# 漢の保健室

16漢パーソナリティ診断サイト。漢保（オトコタモツ）が全16タイプの漢を診断する。

## 技術スタック

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase
- Vercel

## ルート

| パス | 説明 |
|------|------|
| `/` | トップページ |
| `/start` | 診断開始 |
| `/question/[id]` | 16問の質問フロー |
| `/diagnosis/result/[type]` | 診断結果 (16タイプ) |
