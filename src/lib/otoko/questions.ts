export interface OtokoQuestion {
  id: number;
  displayAxis: string;
  question: string;
  comment: string;
  optionA: { label: string };
  optionB: { label: string };
}

export const OTOKO_QUESTIONS: OtokoQuestion[] = [
  {
    id: 1,
    displayAxis: '外剛 ／ 内剛',
    question: '正直に答えてくれ。休日を過ごした後、本当に回復できてるのはどっちだ、戦友？',
    comment: 'エネルギーの源を教えてくれ。どちらが「本当に」楽なんだ。',
    optionA: { label: '友達や仲間と思い切り過ごした後の方が確実に充電できる' },
    optionB: { label: '一人でゆっくり過ごした後の方が完全に充電できる' },
  },
  {
    id: 2,
    displayAxis: '直感 ／ 現実',
    question: '新しい戦場（仕事・プロジェクト）に立った時、最初に君を動かすのは？',
    comment: '戦場での最初の一歩を決めるのは何だ。直感か、事実か。',
    optionA: { label: '"面白そう"という直感、全体のつながり、まだ見ぬ可能性への期待' },
    optionB: { label: '"今何ができるか"という確認、実績・データ・目の前の事実' },
  },
  {
    id: 3,
    displayAxis: '理性 ／ 感情',
    question: '仲間が明らかに間違えた時、君はどうする？',
    comment: '判断の基準を見せてくれ。頭か、心か。',
    optionA: { label: '正しいことを正直に伝える。気持ちより事実と論理が先だ' },
    optionB: { label: 'まず気持ちを受け止めてから伝える。関係と調和を最優先にする' },
  },
  {
    id: 4,
    displayAxis: '計画 ／ 柔軟',
    question: '大事な予定の前、君はどうする？',
    comment: '戦いの準備スタイルを教えてくれ。',
    optionA: { label: '事前にしっかり準備と計画を立て、見通しを持って臨む' },
    optionB: { label: '行き当たりばったりの方が燃える。流れを読んでアジャイルに動く' },
  },
  {
    id: 5,
    displayAxis: '理性 ／ 感情',
    question: '傷ついた仲間を目の前にした時、君に最初に出てくるのは？',
    comment: '心の動き方を正直に答えてくれ。これが最後の問いだ。',
    optionA: { label: '"どうすれば解決できるか"が先に浮かぶ（頭が動く）' },
    optionB: { label: '"つらかったな"という言葉が先に出る（心が動く）' },
  },
];
