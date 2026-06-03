export interface OtokoQuestion {
  id: number;
  displayAxis: string;
  question: string;
  comment: string;
  optionA: { label: string };
  optionB: { label: string };
}

export const ONNA_QUESTIONS: OtokoQuestion[] = [
  // ── 外剛 / 内剛 (E / I) Q1〜Q4 ──────────────────────────
  {
    id: 1,
    displayAxis: '外剛 ／ 内剛',
    question: '休日に友人から「今日飲みに行こうぜ」と急に誘われた。どっちに近い？',
    comment: 'エネルギーの源を教えてくれ。正直に答えていい。',
    optionA: { label: '予定がなければ即OK。みんなで盛り上がる方が元気になる' },
    optionB: { label: '正直、家でゆっくりしたい。断るか迷う' },
  },
  {
    id: 2,
    displayAxis: '外剛 ／ 内剛',
    question: '初めて会う人が多い場で、自然な自分はどっち？',
    comment: '自分では気づきにくいかもしれないけど、素直に答えてみて。',
    optionA: { label: '自分から話しかけて場を盛り上げる' },
    optionB: { label: '話しかけられるのを待ち、聞き役に回る' },
  },
  {
    id: 3,
    displayAxis: '外剛 ／ 内剛',
    question: '丸一日自由な休日、どう過ごしたい？',
    comment: '理想の休日を教えてくれ。',
    optionA: { label: '友達と出かけたり、新しい場所に行きたい' },
    optionB: { label: '家で本を読んだり、一人の時間を楽しみたい' },
  },
  {
    id: 4,
    displayAxis: '外剛 ／ 内剛',
    question: '一番エネルギーが充電される瞬間はどっち？',
    comment: 'なるほどな。もう少し続けるよ。',
    optionA: { label: '人と話したり、賑やかな場にいるとき' },
    optionB: { label: '一人で静かに過ごしているとき' },
  },
  // ── 直感 / 現実 (N / S) Q5〜Q8 ──────────────────────────
  {
    id: 5,
    displayAxis: '直感 ／ 現実',
    question: '行ったことのない場所に行くとき、どう決める？',
    comment: '今度は発想のくせを教えてくれ。',
    optionA: { label: '「なんとなくここに行きたい」という直感で決める' },
    optionB: { label: '口コミや実績、行く目的を調べて決める' },
  },
  {
    id: 6,
    displayAxis: '直感 ／ 現実',
    question: 'あなたを動かすのは、どっちに近い？',
    comment: '心が動く方向を教えてくれ。',
    optionA: { label: '未来の可能性や、まだ見ぬ世界' },
    optionB: { label: '今ある現実、確かな実績' },
  },
  {
    id: 7,
    displayAxis: '直感 ／ 現実',
    question: '問題に直面したとき、まずどう動く？',
    comment: '考え方のくせが出るところだよ。',
    optionA: { label: 'ひらめきや感覚で解決方法を考える' },
    optionB: { label: 'データや事実を集めて分析する' },
  },
  {
    id: 8,
    displayAxis: '直感 ／ 現実',
    question: '洋服を買うとき、何を重視する？',
    comment: '半分来たよ。正直に答えてくれてありがとう。',
    optionA: { label: '「これ着たらこうなりそう」というイメージ' },
    optionB: { label: '着心地・素材・実用性' },
  },
  // ── 理性 / 感情 (T / F) Q9〜Q12 ──────────────────────────
  {
    id: 9,
    displayAxis: '理性 ／ 感情',
    question: '友人が落ち込んで相談してきた。まずすることは？',
    comment: '判断の基準を教えてくれ。頭か、心か。',
    optionA: { label: '解決策を一緒に考える' },
    optionB: { label: 'まずは話を聞いて、気持ちに寄り添う' },
  },
  {
    id: 10,
    displayAxis: '理性 ／ 感情',
    question: '判断するとき、優先するのは？',
    comment: 'どっちが「しっくりくる」か、直感で答えてくれ。',
    optionA: { label: '論理的に正しいかどうか' },
    optionB: { label: '自分や相手の気持ち' },
  },
  {
    id: 11,
    displayAxis: '理性 ／ 感情',
    question: '落ち込んでいる友人をサポートするなら、どっちが得意？',
    comment: '自然と出てくる方を選んでくれ。',
    optionA: { label: '厳しくても正直に指摘すること' },
    optionB: { label: '優しく寄り添って励ますこと' },
  },
  {
    id: 12,
    displayAxis: '理性 ／ 感情',
    question: 'チームを評価するとき、重視するのは？',
    comment: 'なかなか面白い女だな。あと少しだよ。',
    optionA: { label: '結果やパフォーマンス' },
    optionB: { label: 'メンバーの雰囲気や関係性' },
  },
  // ── 計画 / 柔軟 (J / P) Q13〜Q16 ──────────────────────────
  {
    id: 13,
    displayAxis: '計画 ／ 柔軟',
    question: '旅行の計画を立てるとき、どっち派？',
    comment: '最後の軸だ。準備スタイルを教えてくれ。',
    optionA: { label: 'スケジュールを細かく決めておきたい' },
    optionB: { label: '現地でその時の気分で決めたい' },
  },
  {
    id: 14,
    displayAxis: '計画 ／ 柔軟',
    question: '締め切りのある仕事、どう進める？',
    comment: '自分のリズムを教えてくれ。',
    optionA: { label: '早めに着手して余裕を持って終わらせる' },
    optionB: { label: 'ギリギリまで粘って、集中力で仕上げる' },
  },
  {
    id: 15,
    displayAxis: '計画 ／ 柔軟',
    question: '予定が急に変更になったとき、どう感じる？',
    comment: '正直に答えてくれ。',
    optionA: { label: '困る、ペースが乱されて疲れる' },
    optionB: { label: '面白い、むしろテンションが上がる' },
  },
  {
    id: 16,
    displayAxis: '計画 ／ 柔軟',
    question: '毎日の生活スタイルは、どっちに近い？',
    comment: 'これが最後の問いだ。正直に答えてくれ。',
    optionA: { label: 'だいたい決まったルーティンで動きたい' },
    optionB: { label: 'その日の気分で柔軟に動きたい' },
  },
];
