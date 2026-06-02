/**
 * 動画連動配信のテスト送信スクリプト。
 * TEST_LINE_USER_ID にだけ送信する。broadcast_at は更新しない（本番データを汚さない）。
 *
 * 使い方:
 *   node --env-file=.env.local scripts/test-video-linked-delivery.mjs          # 最新エピソード
 *   node --env-file=.env.local scripts/test-video-linked-delivery.mjs 2        # 第2話を指定
 */

import { createClient } from '@supabase/supabase-js';

const TEST_USER_ID = process.env.TEST_LINE_USER_ID;
const ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_KEY  = process.env.SUPABASE_SERVICE_KEY;
const NOTE_URL     = process.env.NEXT_PUBLIC_NOTE_URL ?? '';
const APP_URL      = process.env.NEXT_PUBLIC_APP_URL  ?? '';

// ─── 事前チェック ───────────────────────────────────────────────
if (!TEST_USER_ID || TEST_USER_ID.startsWith('http')) {
  console.error('❌ .env.local の TEST_LINE_USER_ID に Uxxxxxxxx 形式の LINE ユーザーIDを設定してください。');
  console.error('   （https://lin.ee/... はURLであって、ユーザーIDではありません）');
  console.error('   Supabaseの line_users テーブルで line_user_id カラムを確認してください。');
  process.exit(1);
}
if (!ACCESS_TOKEN) { console.error('❌ LINE_CHANNEL_ACCESS_TOKEN が未設定です'); process.exit(1); }
if (!SUPABASE_URL || !SERVICE_KEY) { console.error('❌ Supabase の環境変数が未設定です'); process.exit(1); }

const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

// ─── エピソード取得 ──────────────────────────────────────────────
const episodeArg = process.argv[2];
let query = supabase
  .from('video_linked_messages')
  .select('id, episode_number, nayami, mama_answer, publish_date')
  .order('publish_date', { ascending: false })
  .limit(1);

if (episodeArg) {
  query = supabase
    .from('video_linked_messages')
    .select('id, episode_number, nayami, mama_answer, publish_date')
    .eq('episode_number', parseInt(episodeArg, 10))
    .limit(1);
}

const { data, error } = await query;
if (error) { console.error('❌ DBエラー:', error.message); process.exit(1); }
if (!data?.length) { console.error('❌ エピソードが見つかりません'); process.exit(1); }

const ep = data[0];

// ─── メッセージ構築 ──────────────────────────────────────────────
const messages = [
  {
    type: 'text',
    text: [
      `[テスト送信] 第${ep.episode_number}話`,
      ``,
      `ねえ、昨日の動画、見てくれた？`,
      ``,
      `第${ep.episode_number}話、「${ep.nayami}」の話ね。`,
      ``,
      `動画では言えなかったこと、`,
      `ここで話すわ。`,
      ``,
      `━━━━━━━━━━`,
      ``,
      ep.mama_answer,
      ``,
      `━━━━━━━━━━`,
    ].join('\n'),
  },
  {
    type: 'text',
    text: NOTE_URL
      ? `続き、Noteにも書いてあるから、\nゆっくり読みたい人はこっちも。\n\n▼ ママのNote\n${NOTE_URL}`
      : `続き、またここで話すわ。\nちゃんと読んでくれてるの、わかってるから。`,
  },
  {
    type: 'text',
    text: [
      `最後にひとつだけ。`,
      ``,
      `まだ診断やってない人、`,
      `一回やってみな。`,
      `あんたのタイプ、ちゃんとわかるから。`,
      ``,
      `▼ 見送り男診断`,
      `${APP_URL}/start`,
    ].join('\n'),
  },
];

// ─── LINE 送信 ───────────────────────────────────────────────────
console.log(`\n送信先: ${TEST_USER_ID}`);
console.log(`エピソード: 第${ep.episode_number}話「${ep.nayami}」（${ep.publish_date}）\n`);

const res = await fetch('https://api.line.me/v2/bot/message/push', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
  },
  body: JSON.stringify({ to: TEST_USER_ID, messages }),
});

if (res.ok) {
  console.log('✅ 送信成功');
} else {
  const body = await res.text();
  console.error(`❌ 送信失敗 (${res.status}):`, body);
  process.exit(1);
}
