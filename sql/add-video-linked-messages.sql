-- =============================================================
-- video_linked_messages テーブル
-- TikTok/X動画と連動した翌日LINE配信用
-- =============================================================

CREATE TABLE IF NOT EXISTS public.video_linked_messages (
  id             UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  episode_number INTEGER     NOT NULL UNIQUE,
  nayami         TEXT        NOT NULL,
  mama_answer    TEXT        NOT NULL,
  publish_date   DATE        NOT NULL,
  broadcast_at   TIMESTAMPTZ,           -- 配信済みになったら更新
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE  public.video_linked_messages              IS 'TikTok/X動画ごとのLINE連動メッセージ';
COMMENT ON COLUMN public.video_linked_messages.episode_number IS '動画の話数（1始まり）';
COMMENT ON COLUMN public.video_linked_messages.publish_date   IS '動画を投稿した日（翌日19:00 JSTに配信）';
COMMENT ON COLUMN public.video_linked_messages.broadcast_at   IS 'NULLの間は未配信。配信完了後にセットして二重送信を防ぐ';

ALTER TABLE public.video_linked_messages ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_video_linked_publish_date
  ON public.video_linked_messages (publish_date);

CREATE INDEX IF NOT EXISTS idx_video_linked_broadcast_at
  ON public.video_linked_messages (broadcast_at)
  WHERE broadcast_at IS NULL;
