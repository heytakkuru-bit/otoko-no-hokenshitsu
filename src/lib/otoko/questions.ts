export type AnswerValue = 'A' | 'B';

export type ResultType =
  | 'taicho' | 'fujimi' | 'ippiki-okami' | 'furutsuwamouno'
  | 'aniki' | 'otosan' | 'gunshi' | 'iyashi'
  | 'hakase' | 'sanbo' | 'sakushi' | 'shokunin'
  | 'fuuraibo' | 'hatsumei-ka' | 'gambler' | 'yumeoibito';

export interface Answer {
  value: AnswerValue;
  text: string;
}

export interface Question {
  id: number;
  axis: string;      // 表示軸ラベル
  category: string;
  text: string;
  answers: Answer[];
  midComment?: string;
}

export const TOTAL_QUESTIONS = 16;

export const QUESTIONS: Question[] = [
  // ── 外剛 / 内剛 (E / I) Q1〜Q4 ──────────────────────────
  {
    id: 1,
    axis: '外剛 ／ 内剛',
    category: '行動パターン',
    text: '休日に友人から「今日飲みに行こうぜ」と急に誘われた。どっちに近い？',
    answers: [
      { value: 'A', text: '予定がなければ即OKする。外に出た方が元気になる' },
      { value: 'B', text: '正直、一人でのんびりしたい。断りたくなる' },
    ],
  },
  {
    id: 2,
    axis: '外剛 ／ 内剛',
    category: '初対面の場',
    text: '初めて会う人が多い集まりに参加した。自分はどちらに近い？',
    answers: [
      { value: 'A', text: '積極的に話しかけて、自然と輪の中心になる' },
      { value: 'B', text: '誰かが話しかけてくれるのを待ち、少人数と深く話す' },
    ],
  },
  {
    id: 3,
    axis: '外剛 ／ 内剛',
    category: '考え方の整理',
    text: '仕事で難しい問題に直面した。まず何をする？',
    answers: [
      { value: 'A', text: '誰かに話して、しゃべりながら頭を整理する' },
      { value: 'B', text: '一人で静かに考えてから、答えをまとめる' },
    ],
  },
  {
    id: 4,
    axis: '外剛 ／ 内剛',
    category: '休日の過ごし方',
    text: '丸一日自由な休日。理想的な過ごし方は？',
    midComment: '……なるほどな。続けるぞ。',
    answers: [
      { value: 'A', text: '友人と出かけるか、人が多い場所に行きたい' },
      { value: 'B', text: '家か静かな場所で、自分のペースで過ごしたい' },
    ],
  },

  // ── 直感 / 現実 (N / S) Q5〜Q8 ──────────────────────────
  {
    id: 5,
    axis: '直感 ／ 現実',
    category: '旅行スタイル',
    text: '旅行に行くとなったら、どんな計画の立て方をする？',
    answers: [
      { value: 'A', text: 'とりあえず行ってみて、気分でルートを決める' },
      { value: 'B', text: '事前に調べ、宿・ルート・予算をしっかり決める' },
    ],
  },
  {
    id: 6,
    axis: '直感 ／ 現実',
    category: '発想のくせ',
    text: '仕事で「新しいアイデアを出せ」と言われた。自分はどちらに近い？',
    answers: [
      { value: 'A', text: 'まだ誰もやっていない未来の可能性をイメージして発想する' },
      { value: 'B', text: '過去の成功例や実績データを参考にして改善案を出す' },
    ],
  },
  {
    id: 7,
    axis: '直感 ／ 現実',
    category: '話し合いの場',
    text: '会議や議論の場で、自分が話しやすいのはどちら？',
    answers: [
      { value: 'A', text: '理想や可能性・将来のビジョンを語るのが好き' },
      { value: 'B', text: '具体的な数字・事実・実現できるかどうかで話す' },
    ],
  },
  {
    id: 8,
    axis: '直感 ／ 現実',
    category: '物の選び方',
    text: '家電や道具を新しく買うとき、どう選ぶ？',
    midComment: '半分来たぞ。正直に答えてくれてありがとうよ。',
    answers: [
      { value: 'A', text: 'なんとなくピンと来たもの・デザインで直感選び' },
      { value: 'B', text: 'スペックや口コミを比較して、納得してから選ぶ' },
    ],
  },

  // ── 理性 / 感情 (T / F) Q9〜Q12 ──────────────────────────
  {
    id: 9,
    axis: '理性 ／ 感情',
    category: '相談への向き合い方',
    text: '友人が仕事の悩みを相談してきた。まず自分がすることは？',
    answers: [
      { value: 'A', text: '原因を分析して、解決策や改善案を提示する' },
      { value: 'B', text: 'まず「それはつらかったな」と共感して話を聞く' },
    ],
  },
  {
    id: 10,
    axis: '理性 ／ 感情',
    category: 'チームのミス',
    text: 'チームでミスが起きた。自分が最初に動くのはどっち？',
    answers: [
      { value: 'A', text: '再発を防ぐために原因を徹底追及する' },
      { value: 'B', text: 'まずメンバーの気持ちをフォローし、チームを立て直す' },
    ],
  },
  {
    id: 11,
    axis: '理性 ／ 感情',
    category: '意見の対立',
    text: '誰かと意見が食い違ったとき、自分の優先順位は？',
    answers: [
      { value: 'A', text: '論理的に正しい方が通るべき。筋が通れば関係は後でいい' },
      { value: 'B', text: '関係を壊さないことが優先。正論より和を大事にしたい' },
    ],
  },
  {
    id: 12,
    axis: '理性 ／ 感情',
    category: '映画・物語の楽しみ方',
    text: '映画や本を楽しんだ後、誰かと感想を話すとき自分は？',
    midComment: '……君、なかなか面白い漢だな。あと少しだ。',
    answers: [
      { value: 'A', text: '設定の矛盾・構成・伏線回収を語りたい' },
      { value: 'B', text: 'キャラクターの気持ちや感動シーンについて話したい' },
    ],
  },

  // ── 計画 / 柔軟 (J / P) Q13〜Q16 ──────────────────────────
  {
    id: 13,
    axis: '計画 ／ 柔軟',
    category: '準備のスタイル',
    text: '大事な予定が1週間後にある。準備はどうする？',
    answers: [
      { value: 'A', text: '数日前には全部整えて、余裕を持って臨む' },
      { value: 'B', text: '前日か当日にまとめてやる。直前の方が集中できる' },
    ],
  },
  {
    id: 14,
    axis: '計画 ／ 柔軟',
    category: '仕事の進め方',
    text: '締め切りがある仕事を渡された。どう進める？',
    answers: [
      { value: 'A', text: '期限より早めに終わらせ、見直し時間も確保する' },
      { value: 'B', text: '締め切り直前に集中して仕上げる。その方が出来がいい' },
    ],
  },
  {
    id: 15,
    axis: '計画 ／ 柔軟',
    category: '予定外の変更',
    text: '決まっていた予定が急に変更になった。どう感じる？',
    answers: [
      { value: 'A', text: 'イラッとする。事前に言えよと思う' },
      { value: 'B', text: 'まあそういうこともある。なんとかなる' },
    ],
  },
  {
    id: 16,
    axis: '計画 ／ 柔軟',
    category: '生活スタイル',
    text: '自分の部屋や身の回りの状態は？',
    answers: [
      { value: 'A', text: 'きちんと整理されていないと落ち着かない' },
      { value: 'B', text: '自分でどこに何があるかわかればOK。細かいことは気にしない' },
    ],
  },
];