-- =============================================================
-- weekday_messages テーブル
-- 曜日ごとのLINEメッセージ素材（各曜日3件、計21件）
-- =============================================================

CREATE TABLE IF NOT EXISTS public.weekday_messages (
  id         UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  weekday    INTEGER     NOT NULL CHECK (weekday BETWEEN 0 AND 6),
  category   TEXT        NOT NULL,
  title      TEXT        NOT NULL,
  body       TEXT        NOT NULL,
  sort_order INTEGER     NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (weekday, sort_order)
);

COMMENT ON TABLE  public.weekday_messages            IS '曜日ごとのLINEメッセージ素材（0=日〜6=土）';
COMMENT ON COLUMN public.weekday_messages.weekday    IS '0=日 1=月 2=火 3=水 4=木 5=金 6=土';
COMMENT ON COLUMN public.weekday_messages.category   IS 'mama_words / regular_story / mouth_habit / past_story / weekend / daytime / tomorrow';
COMMENT ON COLUMN public.weekday_messages.sort_order IS '同じ曜日内でのローテーション順（1〜3）';

ALTER TABLE public.weekday_messages ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_weekday_messages_weekday
  ON public.weekday_messages (weekday);
