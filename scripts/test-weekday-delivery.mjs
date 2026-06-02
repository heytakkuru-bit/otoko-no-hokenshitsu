/**
 * 曜日別配信のテスト送信スクリプト。
 * TEST_LINE_USER_ID にだけ送信する。
 *
 * 使い方:
 *   node --env-file=.env.local scripts/test-weekday-delivery.mjs          # 今日の曜日
 *   node --env-file=.env.local scripts/test-weekday-delivery.mjs 1        # 月曜（0=日〜6=土）
 *   node --env-file=.env.local scripts/test-weekday-delivery.mjs 1 2      # 月曜・sort_order=2
 */

import { createClient } from '@supabase/supabase-js';

const TEST_USER_ID = process.env.TEST_LINE_USER_ID;
const ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_KEY  = process.env.SUPABASE_SERVICE_KEY;
const APP_URL      = process.env.NEXT_PUBLIC_APP_URL ?? '';

const DAY_NAMES = ['日', '月', '火', '水', '木', '金', '土'];

// ─── 事前チェック ───────────────────────────────────────────────
if (!TEST_USER_ID || TEST_USER_ID.startsWith('http')) {
  console.error('❌ .env.local の TEST_LINE_USER_ID に Uxxxxxxxx 形式の LINE ユーザーIDを設定してください。');
  console.error('   Supabaseの line_users テーブルで line_user_id カラムを確認してください。');
  process.exit(1);
}
if (!ACCESS_TOKEN) { console.error('❌ LINE_CHANNEL_ACCESS_TOKEN が未設定です'); process.exit(1); }
if (!SUPABASE_URL || !SERVICE_KEY) { console.error('❌ Supabase の環境変数が未設定です'); process.exit(1); }

const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

// ─── 曜日・sort_order の決定 ─────────────────────────────────────
const jstNow    = new Date(Date.now() + 9 * 60 * 60 * 1000);
const weekday   = process.argv[2] !== undefined ? parseInt(process.argv[2], 10) : jstNow.getDay();
const sortOrder = process.argv[3] !== undefined ? parseInt(process.argv[3], 10) : getWeeklySortOrder(jstNow);

if (weekday < 0 || weekday > 6) {
  console.error('❌ weekday は 0〜6 で指定してください（0=日, 1=月, ..., 6=土）');
  process.exit(1);
}

// ─── メッセージ取得 ──────────────────────────────────────────────
const { data, error } = await supabase
  .from('weekday_messages')
  .select('title, body, category')
  .eq('weekday', weekday)
  .eq('sort_order', sortOrder)
  .maybeSingle();

if (error) { console.error('❌ DBエラー:', error.message); process.exit(1); }
if (!data) {
  console.error(`❌ weekday=${weekday}(${DAY_NAMES[weekday]}曜) sort_order=${sortOrder} のメッセージが見つかりません`);
  process.exit(1);
}

// ─── メッセージ構築 ──────────────────────────────────────────────
const messages = [
  {
    type: 'text',
    text: `[テスト送信] ${DAY_NAMES[weekday]}曜・${sortOrder}本目\n\n${data.body}`,
  },
  {
    type: 'text',
    text: [
      `今日も読んでくれてありがとう。`,
      ``,
      `まだ診断してない人は、`,
      `一回やってみて。`,
      ``,
      `▼ 見送り男診断`,
      `${APP_URL}/start`,
    ].join('\n'),
  },
];

// ─── LINE 送信 ───────────────────────────────────────────────────
console.log(`\n送信先: ${TEST_USER_ID}`);
console.log(`メッセージ: ${DAY_NAMES[weekday]}曜 sort_order=${sortOrder} 「${data.title}」\n`);

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

// ─── ISO週番号ベースのローテーション ────────────────────────────
function getWeeklySortOrder(date) {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNum = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return (weekNum % 3) + 1;
}
