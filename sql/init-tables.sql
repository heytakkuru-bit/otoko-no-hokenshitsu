-- =============================================================
-- snack-sachiko: Supabase init tables
-- STEP2 (quiz) + STEP3 (LINE delivery)
-- Target: PostgreSQL 15 (Supabase)
-- =============================================================

-- UUID
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- updated_at trigger function
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- =============================================================
-- STEP2: quiz tables
-- =============================================================

-- 1. quiz_sessions
CREATE TABLE IF NOT EXISTS public.quiz_sessions (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  started_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at  TIMESTAMPTZ,
  result_type   TEXT        CHECK (result_type IN ('hetare', 'mayoi', 'majime', 'karamawari')),
  user_agent    TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. quiz_answers
CREATE TABLE IF NOT EXISTS public.quiz_answers (
  id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id   UUID        NOT NULL REFERENCES public.quiz_sessions (id) ON DELETE CASCADE,
  question_id  INTEGER     NOT NULL,
  answer_value TEXT        NOT NULL,
  answered_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. affiliate_clicks
CREATE TABLE IF NOT EXISTS public.affiliate_clicks (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id  UUID        REFERENCES public.quiz_sessions (id) ON DELETE SET NULL,
  link_type   TEXT        NOT NULL,
  result_type TEXT        CHECK (result_type IN ('hetare', 'mayoi', 'majime', 'karamawari')),
  clicked_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);


-- =============================================================
-- STEP3: LINE delivery tables
-- =============================================================

-- 4. line_users
CREATE TABLE IF NOT EXISTS public.line_users (
  id               UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  line_user_id     TEXT        NOT NULL UNIQUE,
  display_name     TEXT,
  followed_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  unfollowed_at    TIMESTAMPTZ,
  status           TEXT        NOT NULL DEFAULT 'active'
                               CHECK (status IN ('active', 'blocked', 'unfollowed')),
  quiz_result_type TEXT        CHECK (quiz_result_type IN ('hetare', 'mayoi', 'majime', 'karamawari')),
  quiz_session_id  UUID        REFERENCES public.quiz_sessions (id) ON DELETE SET NULL,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);

DROP TRIGGER IF EXISTS trg_line_users_updated_at ON public.line_users;
CREATE TRIGGER trg_line_users_updated_at
  BEFORE UPDATE ON public.line_users
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 5. line_delivery_schedule (21-day step delivery)
CREATE TABLE IF NOT EXISTS public.line_delivery_schedule (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  line_user_id  TEXT        NOT NULL REFERENCES public.line_users (line_user_id) ON DELETE CASCADE,
  day_number    INTEGER     NOT NULL CHECK (day_number BETWEEN 1 AND 21),
  scheduled_at  TIMESTAMPTZ NOT NULL,
  delivered_at  TIMESTAMPTZ,
  status        TEXT        NOT NULL DEFAULT 'pending'
                            CHECK (status IN ('pending', 'delivered', 'failed', 'skipped')),
  message_type  TEXT        NOT NULL DEFAULT 'morning'
                            CHECK (message_type IN ('morning', 'noon', 'evening')),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (line_user_id, day_number)
);

-- 6. line_delivery_log
CREATE TABLE IF NOT EXISTS public.line_delivery_log (
  id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  line_user_id    TEXT        NOT NULL REFERENCES public.line_users (line_user_id) ON DELETE CASCADE,
  day_number      INTEGER     NOT NULL,
  message_content TEXT,
  sent_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
  opened          BOOLEAN     NOT NULL DEFAULT false,
  clicked_link    TEXT,
  flagged         BOOLEAN     NOT NULL DEFAULT false
);

-- 7. line_conversations
CREATE TABLE IF NOT EXISTS public.line_conversations (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  line_user_id  TEXT        NOT NULL REFERENCES public.line_users (line_user_id) ON DELETE CASCADE,
  role          TEXT        NOT NULL CHECK (role IN ('user', 'assistant')),
  content       TEXT        NOT NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);


-- =============================================================
-- RLS
-- service_role bypasses RLS automatically (no policy needed)
-- anon: SELECT only on quiz tables; LINE tables: no anon access
-- =============================================================

ALTER TABLE public.quiz_sessions          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_answers           ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.affiliate_clicks       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.line_users             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.line_delivery_schedule ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.line_delivery_log      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.line_conversations     ENABLE ROW LEVEL SECURITY;

-- quiz_sessions: anon SELECT
DROP POLICY IF EXISTS "anon_select_quiz_sessions" ON public.quiz_sessions;
CREATE POLICY "anon_select_quiz_sessions"
  ON public.quiz_sessions
  FOR SELECT
  TO anon
  USING (true);

-- quiz_answers: anon SELECT
DROP POLICY IF EXISTS "anon_select_quiz_answers" ON public.quiz_answers;
CREATE POLICY "anon_select_quiz_answers"
  ON public.quiz_answers
  FOR SELECT
  TO anon
  USING (true);


-- =============================================================
-- Indexes
-- =============================================================

CREATE INDEX IF NOT EXISTS idx_quiz_sessions_result_type   ON public.quiz_sessions (result_type);
CREATE INDEX IF NOT EXISTS idx_quiz_sessions_completed_at  ON public.quiz_sessions (completed_at);

CREATE INDEX IF NOT EXISTS idx_quiz_answers_session_id     ON public.quiz_answers (session_id);
CREATE INDEX IF NOT EXISTS idx_quiz_answers_question_id    ON public.quiz_answers (question_id);

CREATE INDEX IF NOT EXISTS idx_affiliate_clicks_session_id ON public.affiliate_clicks (session_id);
CREATE INDEX IF NOT EXISTS idx_affiliate_clicks_link_type  ON public.affiliate_clicks (link_type);
CREATE INDEX IF NOT EXISTS idx_affiliate_clicks_clicked_at ON public.affiliate_clicks (clicked_at);

CREATE INDEX IF NOT EXISTS idx_line_users_status           ON public.line_users (status);
CREATE INDEX IF NOT EXISTS idx_line_users_quiz_result_type ON public.line_users (quiz_result_type);
CREATE INDEX IF NOT EXISTS idx_line_users_followed_at      ON public.line_users (followed_at);

CREATE INDEX IF NOT EXISTS idx_delivery_schedule_user_id   ON public.line_delivery_schedule (line_user_id);
CREATE INDEX IF NOT EXISTS idx_delivery_schedule_status    ON public.line_delivery_schedule (status);
CREATE INDEX IF NOT EXISTS idx_delivery_schedule_scheduled ON public.line_delivery_schedule (scheduled_at);

CREATE INDEX IF NOT EXISTS idx_delivery_log_user_id        ON public.line_delivery_log (line_user_id);
CREATE INDEX IF NOT EXISTS idx_delivery_log_sent_at        ON public.line_delivery_log (sent_at);

CREATE INDEX IF NOT EXISTS idx_conversations_user_id       ON public.line_conversations (line_user_id);
CREATE INDEX IF NOT EXISTS idx_conversations_created_at    ON public.line_conversations (created_at);
