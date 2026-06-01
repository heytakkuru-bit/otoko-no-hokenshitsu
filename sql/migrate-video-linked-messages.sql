-- =============================================================
-- video_linked_messages テーブル 構成変更
-- nayami / mama_answer を削除し、delivery_type / video_url / note_url を追加
-- =============================================================

ALTER TABLE public.video_linked_messages
  ADD COLUMN IF NOT EXISTS delivery_type TEXT NOT NULL DEFAULT 'video'
    CHECK (delivery_type IN ('video', 'note')),
  ADD COLUMN IF NOT EXISTS video_url     TEXT,
  ADD COLUMN IF NOT EXISTS note_url      TEXT;

COMMENT ON COLUMN public.video_linked_messages.delivery_type IS 'video=動画配信 / note=Note配信';
COMMENT ON COLUMN public.video_linked_messages.video_url     IS '動画URL（TikTok / X / YouTube）';
COMMENT ON COLUMN public.video_linked_messages.note_url      IS 'NoteのURL';

ALTER TABLE public.video_linked_messages
  DROP COLUMN IF EXISTS nayami,
  DROP COLUMN IF EXISTS mama_answer;

CREATE INDEX IF NOT EXISTS idx_video_linked_delivery_type
  ON public.video_linked_messages (delivery_type);
