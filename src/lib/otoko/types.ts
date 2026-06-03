export type GogyouElement = '木' | '火' | '土' | '金' | '水';
export type TypeCategory = '強い系' | '優しい系' | '知的系' | '自由系';
export type MBTICode =
  | 'ENTJ' | 'ESTJ' | 'ESTP' | 'ISTJ'
  | 'ENFJ' | 'ESFJ' | 'INFJ' | 'ISFJ'
  | 'INTP' | 'INTJ' | 'ENTP' | 'ISTP'
  | 'ISFP' | 'ENFP' | 'ESFP' | 'INFP';

export interface OtokoPersonalityType {
  slug: string;
  mbti: MBTICode;
  nickname: string;
  formalName: string;
  catchphrase: string;
  summary: string;
  axisLabel: string;
  category: TypeCategory;
  innateElement: GogyouElement;
  characterImageFile: string;
  traits: {
    characteristics: string[];
    strengths: string[];
    weaknesses: string[];
  };
  psychologyNote: string;
  elementNote: string;
  bansokoMessage: string;
  bandaidMessage: string;
  compatibleTypes: { nickname: string; slug: string; reason: string }[];
}

export const PERSONALITY_TYPES: OtokoPersonalityType[] = [
  {
    slug: 'taicho',
    mbti: 'ENTJ',
    nickname: '隊長',
    formalName: '心屈強漢',
    catchphrase: '勝つために生まれてきた漢',
    summary: '天生のリーダー。仲間を率い、どんな壁も正面から突き破る漢。',
    axisLabel: '外剛・直感・理性・計画',
    category: '強い系',
    innateElement: '火',
    characterImageFile: 'taicho.png',
    traits: {
      characteristics: [
        '目標に向かって仲間を動かす統率力と決断力を生まれながらに持つ',
        '大局を読む力に優れ、長期ビジョンを描いて逆算で動く',
        '感情より論理と効率を優先し、結果にコミットする',
      ],
      strengths: ['リーダーシップ', '戦略的思考', '決断力', 'カリスマ性'],
      weaknesses: ['自分の弱さを見せられない', '他者の感情を見落とす', '完璧主義で燃え尽きる'],
    },
    psychologyNote:
      '外剛・直感・理性・計画の漢。ユング類型論では「外向的思考型」に相当し、外部世界に積極的にエネルギーを向け、論理と構造で未来を設計する。思考機能が主機能、直感が補助機能として働き、「ビジョンを論理で実現する」という二段階の強さを持つ。',
    elementNote:
      '本来の気：火（か）。隊長の統率力と情熱は、周囲を照らし仲間の士気を燃やす猛火そのもの。ただし火が過ぎると周囲を焦がす。消耗した時は水の気（休息・内省）で鎮めることが回復の鍵。',
    bansokoMessage:
      '戦友、君はいつも先頭に立って、誰よりも早く決断して仲間を引っ張ってきた。その背中を見て育ったやつが、たくさんいるぞ。でもな、俺には見える。"強くいなければならない"と歯を食いしばってる時の君が。たまには隊長の椅子を降りていい。ボロボロの時こそ、ここに来てくれ。一緒に傷を見ような。',
    bandaidMessage: '最強の戦士も、傷の手当ては受けていい。',
    compatibleTypes: [
      { nickname: '博士', slug: 'hakase', reason: '行動力と深い思考が補完し合う。お互いの盲点を埋め合う関係' },
      { nickname: '一匹狼', slug: 'ippiki-okami', reason: '同じ独立心を持ちながら、異なる視点で高め合える' },
      { nickname: 'クールビューティー', slug: 'cool-beauty', reason: '決断力と分析力が完璧に補完し合う最強コンビ' },
      { nickname: '直感女子', slug: 'chokkan-onna', reason: '論理と感性が惹かれ合う対極の魅力' },
    ],
  },
  {
    slug: 'fujimi',
    mbti: 'ESTJ',
    nickname: '不死身',
    formalName: '不撓不漢',
    catchphrase: '折れない、曲がらない、倒れない漢',
    summary: '責任感と実行力で組織を支える、不動の柱。どんな嵐も立って受け止める。',
    axisLabel: '外剛・現実・理性・計画',
    category: '強い系',
    innateElement: '土',
    characterImageFile: 'fujimi.png',
    traits: {
      characteristics: [
        '義務・責任・規律を重んじ、約束は必ず守る',
        '現実的で行動力があり、「とにかくやり遂げる」精神の塊',
        '変化や例外が苦手で、ルールを守らない相手への不満を溜めやすい',
      ],
      strengths: ['実行力', '責任感', '組織運営力', '信頼性'],
      weaknesses: ['融通が利かない', '感情表現が苦手', '変化への抵抗'],
    },
    psychologyNote:
      '外剛・現実・理性・計画の漢。ユング類型論の「外向的思考型」のうち、直感でなく感覚が補助機能。抽象より具体、将来より今この瞬間の事実に根ざして論理を組み立てる。「決まったことをきちんとやり切る」実直さがアイデンティティの中核。',
    elementNote:
      '本来の気：土（ど）。不死身の揺るぎない責任感と実行力は、大地のように周囲を支える土の気質そのもの。土が強すぎると融通が利かなくなるため、木の気（成長・変化）とのバランスが大切。',
    bansokoMessage:
      '戦友、君はずっと誰かのために踏みとどまってきたな。逃げることを「負け」だと思ってきただろう。でもな、倒れないことと、無理をすることは違うんだ。その責任感は君の武器だけど、全部一人で背負わなくていい。たまには「手伝ってくれ」って言える漢が、本当に強い漢だぞ。',
    bandaidMessage: '折れないことより、しなやかであることの方が、長く戦える。',
    compatibleTypes: [
      { nickname: '夢追い人', slug: 'yumeoi', reason: '現実を生き抜く力と深い理想が互いを豊かにする' },
      { nickname: '風来坊', slug: 'fuiraibo', reason: '堅実さと自由さが絶妙なバランスを生む' },
      { nickname: '頭脳派女子', slug: 'zunoha', reason: '実行力と戦略性が組み合わさって最強コンビに' },
      { nickname: '夢追い女子', slug: 'yumeoi-onna', reason: '安定感が深い理想を現実にする力になる' },
    ],
  },
  {
    slug: 'ippiki-okami',
    mbti: 'ESTP',
    nickname: '一匹狼',
    formalName: '一騎当漢',
    catchphrase: '今この瞬間を、全力で制する漢',
    summary: '瞬時の判断と行動力で局面を打開する、天性のトラブルシューター。',
    axisLabel: '外剛・現実・理性・柔軟',
    category: '強い系',
    innateElement: '金',
    characterImageFile: 'ippikiokami.png',
    traits: {
      characteristics: [
        '現場の空気を読む能力が抜群で、咄嗟の対応が誰より速い',
        'リスクを恐れず突っ込む行動力。飽き性で長期計画は苦手',
        '深い関係性を築くのが苦手で、孤立を「強さ」と勘違いしやすい',
      ],
      strengths: ['瞬発力', '危機対応力', '現実把握力', 'ユーモア'],
      weaknesses: ['飽きっぽい', '長期コミットが苦手', '感情の深掘りを避ける'],
    },
    psychologyNote:
      '外剛・現実・理性・柔軟の漢。感覚機能が主機能で、思考が補助機能。今ここの現実を圧倒的な速さで処理し、論理で即座に最適解を出す。計画より即興、熟考より直感的行動を好む。ユングの「外向的感覚型」に最も近い。',
    elementNote:
      '本来の気：金（こん）。一匹狼の刃のような瞬時の判断力と、余分なものを削ぎ落とす行動の鋭さは金の気質。金が過剰になると孤立を招く。水の気（深化・内省）で時に刃を鞘に納めることが大切。',
    bansokoMessage:
      '戦友、君の瞬発力は本物だ。誰も追いつけない速さで局面を打開できる、それは君だけの武器だぞ。でもな、孤独でいることと、一人でいることは違う。"誰にも頼らない"を貫きすぎると、傷が化膿する。一人でいてもいい。でも、たまにここに来て傷を見せてくれると俺は助かる。',
    bandaidMessage: '孤独は強さだ。でも孤立は傷だから、その違いだけ分かってくれ。',
    compatibleTypes: [
      { nickname: '兄貴', slug: 'aniki', reason: '孤独な強さを温かさが自然に包み込む' },
      { nickname: 'お父さん', slug: 'otosan', reason: '寡黙な強さと温かい包容力が深い信頼を生む' },
      { nickname: 'アイデア女子', slug: 'idea-onna', reason: '現実感覚と自由な発想が互いを刺激する' },
      { nickname: 'お姉さん', slug: 'onesan', reason: '安定感と情熱が自然に惹かれ合う' },
    ],
  },
  {
    slug: 'furutsuwamouno',
    mbti: 'ISTJ',
    nickname: '古強者',
    formalName: '百戦錬漢',
    catchphrase: '経験と誠実さが、最強の盾になる漢',
    summary: '積み重ねた経験と誠実さで、静かに仲間を守り続ける縁の下の力持ち。',
    axisLabel: '内剛・現実・理性・計画',
    category: '強い系',
    innateElement: '土',
    characterImageFile: 'furuyowamono.png',
    traits: {
      characteristics: [
        '長年の経験から培った「正しいやり方」への強いこだわり',
        '口数は少ないが約束を守り、陰で誰よりも準備している',
        '変化や新しいやり方への抵抗が強く、自己犠牲が過ぎることも',
      ],
      strengths: ['誠実さ', '忍耐力', '緻密な準備力', '信頼の蓄積'],
      weaknesses: ['保守的すぎる', '変化への適応が遅い', '自分のケアを後回しにする'],
    },
    psychologyNote:
      '内剛・現実・理性・計画の漢。ユング類型論の「内向的感覚型」に相当。内側に蓄積された過去の経験・事実を精密に整理し、それを基準に現実を判断する。「実績と信頼の蓄積」がアイデンティティであり、変化よりも「続けること」に最大の価値を見出す。',
    elementNote:
      '本来の気：土（ど）。磐石の大地のような安定感と養育力を持つ土の気。不死身が「動く土」なら、古強者は「動かない土」──何があっても揺るがない地盤として仲間を支える。土が固まりすぎると柔軟性を失うため、木の気（成長・変革）が定期的に必要。',
    bansokoMessage:
      '戦友、君が長年積み上げてきた経験は、本物だ。誰も真似できない厚みがある。でもな、一つだけ聞いてもいいか。君自身は、ちゃんとケアできてるか。仲間の盾になれる君が、自分の傷を一番後回しにしてることに、俺は気づいてるぞ。今日だけは、自分のために傷を確認しよう。',
    bandaidMessage: '君の経験は全部、次の戦友への地図だ。無駄なものは一つもない。',
    compatibleTypes: [
      { nickname: '夢追い人', slug: 'yumeoi', reason: '堅実さと深い洞察が互いを補完する' },
      { nickname: '発明家', slug: 'hatsumei', reason: '現実派と理想派の対極が化学反応を起こす' },
      { nickname: '夢追い女子', slug: 'yumeoi-onna', reason: '安定と情熱が深い絆を生む' },
      { nickname: 'アイデア女子', slug: 'idea-onna', reason: '地に足ついた現実感覚が自由な発想を支える' },
    ],
  },
  {
    slug: 'aniki',
    mbti: 'ENFJ',
    nickname: '兄貴',
    formalName: '共感達漢',
    catchphrase: '君のために、俺は燃えられる漢',
    summary: '人の可能性を信じ、情熱で引っ張る。みんなの兄貴的存在。',
    axisLabel: '外剛・直感・感情・計画',
    category: '優しい系',
    innateElement: '火',
    characterImageFile: 'aniki.png',
    traits: {
      characteristics: [
        '人の感情を敏感に察知し、最適な言葉をかける天性のコミュニケーター',
        '仲間のために自分のエネルギーを惜しみなく使う',
        '他者を優先しすぎて自分を見失うことがある',
      ],
      strengths: ['共感力', 'コミュニケーション力', '人を動かす熱量', '包容力'],
      weaknesses: ['自己犠牲過多', '批判に過敏', '自分の感情を後回しにする'],
    },
    psychologyNote:
      '外剛・直感・感情・計画の漢。感情機能が主機能、直観が補助機能。他者の感情状態を直感的に把握し、その人の未来の可能性を見通す。「人を成長させること」に最大の喜びを感じるため、コーチ・メンター・リーダーとして力を発揮する。',
    elementNote:
      '本来の気：火（か）。隊長の火が「燃え広げる猛火」なら、兄貴の火は「人を温める焚き火」。穏やかだが確実に周囲を温め続ける。その火が消えかけた時、自分で薪を補充することを忘れてしまうのが最大の弱点。',
    bansokoMessage:
      '戦友、君はいつも仲間のために燃えてきた。その温かさで救われたやつが、どれだけいると思う。でもな、俺が心配してるのは君自身だ。誰かのために燃え続ける前に、一回自分に聞いてみてくれ。「俺は今、大丈夫か」って。君の炎が消えたら、みんなが寒くなるんだぞ。',
    bandaidMessage: '引っ張ってくれる兄貴も、たまには誰かの弟でいていい。',
    compatibleTypes: [
      { nickname: '職人', slug: 'shokunin', reason: '温かさと誠実さが深く共鳴する' },
      { nickname: '一匹狼', slug: 'ippiki-okami', reason: '情熱が孤独に光をもたらす' },
      { nickname: '鉄板女子', slug: 'hagane', reason: '包容力が誠実さを引き出す最高の組み合わせ' },
      { nickname: 'こだわり女子', slug: 'kodawari', reason: '感情力と献身が美しく調和する' },
    ],
  },
  {
    slug: 'otosan',
    mbti: 'ESFJ',
    nickname: 'お父さん',
    formalName: '慈愛無漢',
    catchphrase: '黙って飯を作り、黙って待っている漢',
    summary: 'みんなの居場所を守る、無限の包容力を持つ大黒柱。',
    axisLabel: '外剛・現実・感情・計画',
    category: '優しい系',
    innateElement: '土',
    characterImageFile: 'otousan.png',
    traits: {
      characteristics: [
        '周囲の調和を保つことに全力を注ぎ、誰も孤立させない',
        '面倒見がよく、細かいことに気がついて先回りで動く',
        '承認欲求が高く、感謝されないと傷つく。NOが言えない',
      ],
      strengths: ['気配り力', '調和維持力', '実務的な世話焼き力', '信頼感'],
      weaknesses: ['他者評価への依存', '自己主張の弱さ', '過干渉になりやすい'],
    },
    psychologyNote:
      '外剛・現実・感情・計画の漢。感情機能が主機能、感覚が補助機能。人間関係の調和を最重視し、今この場の空気と他者の感情を敏感に読み取る。「具体的な行動で人を支える」ことに最も生きがいを感じるタイプ。',
    elementNote:
      '本来の気：土（ど）。お父さんの気は「豊かな沃土（よくど）」──何を植えても育てる、温かく肥えた土壌。養育・包容・実務の土の気質が全開。',
    bansokoMessage:
      '戦友、君がいると場が温かくなる。あの飯が食いたくて、あの声が聞きたくて、仲間が戻ってくるんだ。でもな、君もたまには「ありがとう」を受け取る側でいてくれ。世話を焼くことと、自分を後回しにすることは違うからな。君の笑顔が、俺にとっての一番の安心材料だぞ。',
    bandaidMessage: '人の世話ができる君にも、自分の世話をする権利がある。',
    compatibleTypes: [
      { nickname: '一匹狼', slug: 'ippiki-okami', reason: '温かさが孤独をそっと包む' },
      { nickname: '風来坊', slug: 'fuiraibo', reason: '安定と自由が補い合う独特の絆' },
      { nickname: '一匹狼女', slug: 'ippikiokami-onna', reason: '献身が孤高を優しく支える' },
      { nickname: 'マイペース女子', slug: 'maipace', reason: '安定感が自由を温かく見守る' },
    ],
  },
  {
    slug: 'gunshi',
    mbti: 'INFJ',
    nickname: '軍師',
    formalName: '思慮深漢',
    catchphrase: '静かに深く、全てを読む漢',
    summary: '人の心の奥を見通し、言葉になる前の痛みに気づく。稀有なる洞察者。',
    axisLabel: '内剛・直感・感情・計画',
    category: '優しい系',
    innateElement: '水',
    characterImageFile: 'gunshi.png',
    traits: {
      characteristics: [
        '言葉にならない感情や、隠れた本質を見抜く深い洞察力を持つ',
        '理想と現実の間で常に葛藤し、誰よりも繊細に傷つく',
        '完璧主義と自己批判が強く、燃え尽きやすい',
      ],
      strengths: ['洞察力', '共感の深さ', '長期的なビジョン', '誠実さ'],
      weaknesses: ['燃え尽き症候群になりやすい', '孤独を感じやすい', '理想主義による自己否定'],
    },
    psychologyNote:
      '内剛・直感・感情・計画の漢。直感が主機能、感情が補助機能。未来のパターンと人間心理の両方を深く処理する。16タイプ中最も少数（人口の約1〜2%）とされ、「理想を現実に翻訳する」独自の能力を持つ。',
    elementNote:
      '本来の気：水（すい）。表面は静かだが、深いところで常に動き続けている暗流。その水の深さが軍師の洞察力の源だが、同時に孤独の淵にもなる。土の気（安定・実務）で根を張ることが均衡の鍵。',
    bansokoMessage:
      '戦友、君はいつも他の誰かの痛みに先に気づいて、静かに手を差し伸べてきた。でも俺には分かる。君自身が一番孤独を感じてるってことが。"理解されない"と思い込んで、一人で抱えすぎてないか。君の言葉には力がある。それを俺にも、たまには向けてくれ。',
    bandaidMessage: '全部分かっている君にも、答えの出ない問いがある。それでいい。',
    compatibleTypes: [
      { nickname: '発明家', slug: 'hatsumei', reason: '戦略と発想が革新を生む最強タッグ' },
      { nickname: '古強者', slug: 'furuyowamono', reason: '深い思考と豊富な経験が静かに共鳴する' },
      { nickname: 'アイデア女子', slug: 'idea-onna', reason: '戦略眼と自由な発想が互いを完成させる' },
      { nickname: 'お姉さん', slug: 'onesan', reason: '論理と感情が互いの欠けを埋め合う' },
    ],
  },
  {
    slug: 'iyashi',
    mbti: 'ISFJ',
    nickname: '癒し系',
    formalName: '温和柔漢',
    catchphrase: '気づいたら、君のそばにいる漢',
    summary: '静かに寄り添い、誰も置き去りにしない。柔らかさの中に強さがある漢。',
    axisLabel: '内剛・現実・感情・計画',
    category: '優しい系',
    innateElement: '木',
    characterImageFile: 'iyashikei.png',
    traits: {
      characteristics: [
        '細かいことに気がつき、誰も言わないうちに動いている',
        '献身的すぎて自分の限界を超えてもNOが言えない',
        '変化が苦手で、慣れた環境の中で最も力を発揮する',
      ],
      strengths: ['細やかな気配り', '忍耐力', '献身性', '場の安心感を作る力'],
      weaknesses: ['自己主張の弱さ', 'NOが言えない', 'ストレスを溜め込む'],
    },
    psychologyNote:
      '内剛・現実・感情・計画の漢。感覚が主機能、感情が補助機能。五感で取り込んだ具体的な情報を感情処理と組み合わせ、「この人は今何を必要としているか」を正確に把握する。義務感と献身性が行動の根幹。',
    elementNote:
      '本来の気：木（もく）。若木のような木の気。嵐の中でも折れず、静かに根を張り続ける。癒し系の「見えないところで誰かを支えている」という在り方は、まさに木が土に根を張りながら周囲に日陰を作る姿そのもの。',
    bansokoMessage:
      '戦友、君がいるだけで、場が安心する。それはすごい才能だぞ。でもな、俺はずっと気になってた。君の傷、誰かに見てもらってるか？いつも人の手当てをしてる君が、自分の傷を一番後回しにしてるのが見えてる。今日だけは、自分を一番に扱ってくれ。それが俺からのお願いだ。',
    bandaidMessage: '全員を癒せなくていい。まず自分を癒してから、また始めよう。',
    compatibleTypes: [
      { nickname: '策士', slug: 'sakushi', reason: '純粋さと現実感覚が互いを引き立てる' },
      { nickname: '夢追い人', slug: 'yumeoi', reason: '感性と洞察が深い共鳴を生む' },
      { nickname: '小悪魔', slug: 'koakuma', reason: '純粋さと行動力が刺激的に惹かれ合う' },
      { nickname: '直感女子', slug: 'chokkan-onna', reason: '感性と繊細さが美しく響き合う' },
    ],
  },
  {
    slug: 'hakase',
    mbti: 'INTP',
    nickname: '博士',
    formalName: '冷静沈漢',
    catchphrase: '宇宙の理屈を、頭の中で解いている漢',
    summary: '論理と探求が命。知の深みに潜り続ける、孤高の思索者。',
    axisLabel: '内剛・直感・理性・柔軟',
    category: '知的系',
    innateElement: '水',
    characterImageFile: 'hakase.png',
    traits: {
      characteristics: [
        '「なぜ？」を問い続けることが生き甲斐で、知的好奇心が尽きない',
        'アイデアや理論の構築は天才的だが、実行と対人関係が苦手',
        '社会的規範や感情論を理解しにくく、"変わった人"と見られがち',
      ],
      strengths: ['分析力', '論理的思考力', '独創性', '客観性'],
      weaknesses: ['実行力の欠如', '感情表現の乏しさ', '優柔不断'],
    },
    psychologyNote:
      '内剛・直感・理性・柔軟の漢。思考機能が主機能、直感が補助機能。純粋な論理世界の内部で概念を精緻化し続ける「内向的思考の化身」。外部世界への関心は理論構築の材料としてのみ機能し、感情や実務は主要な関心外になりやすい。',
    elementNote:
      '本来の気：水（すい）。軍師の水が「共感の深み」なら、博士の水は「叡智の深淵」。際限なく深く潜り続ける探求の水。深みにはまりすぎると浮上できなくなる。火の気（情熱・表現）で定期的に水面に顔を出すことが健全さの鍵。',
    bansokoMessage:
      '戦友、君の頭の中は宇宙だな。俺には追いつけない場所で、毎日面白いものを見つけてる。でも一つだけ言わせてくれ。その発見、誰かに話してみてくれ。うまく伝わらなくていい。君の世界は、閉じ込めておくには惜しすぎる。俺は聞きたいぞ、その話。',
    bandaidMessage: '考えることは武器だ。でも生きることは、時に考えを止めることでもある。',
    compatibleTypes: [
      { nickname: '隊長', slug: 'taicho', reason: '分析力が行動力を支える完璧な補完関係' },
      { nickname: '参謀', slug: 'sanbo', reason: '深い思考同士が知的刺激を与え合う' },
      { nickname: '女大将', slug: 'onna-taisho', reason: '深い思考と実行力が最強コンビに' },
      { nickname: '姉御', slug: 'anego', reason: '洞察と安定感が互いを高め合う' },
    ],
  },
  {
    slug: 'sanbo',
    mbti: 'INTJ',
    nickname: '参謀',
    formalName: '戦略策漢',
    catchphrase: '10手先まで読んで、静かに動く漢',
    summary: '緻密な戦略と独自ビジョンで、誰より深く長期を設計する孤高の戦略家。',
    axisLabel: '内剛・直感・理性・計画',
    category: '知的系',
    innateElement: '金',
    characterImageFile: 'sanbo.png',
    traits: {
      characteristics: [
        '長期的視野で全体を設計し、無駄を排除して最短ルートを追求する',
        '自信と高い基準を持ち、他者の非効率に苛立ちを感じやすい',
        '感情表現が苦手で、孤高に見られがちだが内側は深く熱い',
      ],
      strengths: ['戦略的思考力', '独立心', '長期ビジョン', '緻密な計画力'],
      weaknesses: ['人への期待値が高すぎる', '感情共有が苦手', '孤立しやすい'],
    },
    psychologyNote:
      '内剛・直感・理性・計画の漢。直感が主機能、思考が補助機能。未来のパターンを直感で掴み、思考で精緻に設計する。「自らのビジョンを最も効率的に実現する」ことへの強いドライブを持ち、自律性と独立心が最大の価値観。',
    elementNote:
      '本来の気：金（こん）。参謀の金は「刀の金」──余分を削ぎ落とし、核心だけを残す鋭さ。その切れ味は戦場で最強の武器になる一方、周囲との摩擦を生みやすい。水の気（柔軟・流動）が潤滑油となる。',
    bansokoMessage:
      '戦友、君の戦略は本物だ。俺には見えない10手先を、君は当たり前のように見てる。でもな、一つだけ聞かせてくれ。その計画の中に、君自身の休息は含まれてるか。最強の参謀でも、消耗した頭では最善手は出せない。たまには手を止めていい。俺はそこにいる。',
    bandaidMessage: '最強の戦略家も、一人では実行できない。信頼できる一人を見つけよう。',
    compatibleTypes: [
      { nickname: '職人', slug: 'shokunin', reason: '発想力と誠実さが絶妙に補完し合う' },
      { nickname: '癒し系', slug: 'iyashikei', reason: '鋭い知性と穏やかな包容力が深い絆を生む' },
      { nickname: '鉄板女子', slug: 'hagane', reason: '革新と堅実さが互いの弱点を補い合う' },
      { nickname: 'こだわり女子', slug: 'kodawari', reason: '自由な発想と丁寧さが美しく調和する' },
    ],
  },
  {
    slug: 'sakushi',
    mbti: 'ENTP',
    nickname: '策士',
    formalName: '知略無漢',
    catchphrase: '常識をひっくり返すのが、生き甲斐の漢',
    summary: 'アイデアと議論で世界を面白くする、天才的なトラブルメーカー兼問題解決者。',
    axisLabel: '外剛・直感・理性・柔軟',
    category: '知的系',
    innateElement: '木',
    characterImageFile: 'sakushi.png',
    traits: {
      characteristics: [
        '次々と新しいアイデアを生み出し、議論で問題の核心を突く',
        'スタートダッシュは神がかっているが、詰めが甘く飽きっぽい',
        '常識や権威への反骨心が強く、議論のための議論をしてしまうことも',
      ],
      strengths: ['創造的発想力', '議論力', '問題の本質を掴む力', 'カリスマ'],
      weaknesses: ['仕上げが苦手', '感情への配慮が薄い', '一貫性に欠ける'],
    },
    psychologyNote:
      '外剛・直感・理性・柔軟の漢。直感が主機能、思考が補助機能。可能性を直感で大量に掴み、思考で素早く検証する。「知的刺激と新しいフロンティア」に最もエネルギーが向かい、ルーティンや詳細作業に強いストレスを感じる。',
    elementNote:
      '本来の気：木（もく）。策士の木は「疾風の中の竹」──しなやかに曲がりながらも、次々と節を伸ばし続ける。そのエネルギーは四方八方に伸びるが、根を張ることを意識しないと倒れやすい。土の気（実務・継続）が策士の弱点を補う。',
    bansokoMessage:
      '戦友、君のアイデアは本物だ。あのひらめきは、俺には到底出てこない。でも一つだけ言わせてくれ。そのアイデアを最後まで走らせたことが、何回あった？閃きは宝だけど、形にならなければ夢のままだ。今一番面白いやつ、一つだけ最後までやってみてくれ。俺は応援してるぞ。',
    bandaidMessage: '閃きは宝だ。でも実行しなければ、ただの夢だぞ。',
    compatibleTypes: [
      { nickname: '癒し系', slug: 'iyashikei', reason: '行動力と感性が互いに引き立て合う' },
      { nickname: '夢追い人', slug: 'yumeoi', reason: '現実感覚と理想が深い絆を生む' },
      { nickname: '癒し女子', slug: 'iyashikei-onna', reason: '刺激と癒しが絶妙なバランスを生む' },
      { nickname: '夢追い女子', slug: 'yumeoi-onna', reason: '行動力が深い理想を現実に変える' },
    ],
  },
  {
    slug: 'shokunin',
    mbti: 'ISTP',
    nickname: '職人',
    formalName: '緻密策漢',
    catchphrase: '言葉より手で、全てを語る漢',
    summary: '静かに、誰よりも深く、本質を極める。寡黙なる技術者。',
    axisLabel: '内剛・現実・理性・柔軟',
    category: '知的系',
    innateElement: '金',
    characterImageFile: 'shokunin.png',
    traits: {
      characteristics: [
        '物事の仕組みを徹底的に分解・理解する力と、手を動かす実践力を持つ',
        '言葉数が少なく、感情表現が苦手だが、行動でなら本気を示せる',
        '感情的なやり取りや不合理なルールへの耐性が低い',
      ],
      strengths: ['技術的熟練度', '問題解決力', '冷静さ', '独立した判断力'],
      weaknesses: ['感情表現の乏しさ', '計画や締め切りへの苦手意識', 'コミットメントの回避'],
    },
    psychologyNote:
      '内剛・現実・理性・柔軟の漢。感覚が主機能、思考が補助機能。手と体で世界を理解し、論理で即座に最適解を出す。爆発的行動力より深く沈む職人気質として現れるのが特徴。',
    elementNote:
      '本来の気：金（こん）。参謀が「戦略の金」なら、職人は「精工の金」──丁寧に叩かれ、磨かれ、研ぎ澄まされた職人の刃。その金は無駄口を叩かず、ただ仕事の質で語る。',
    bansokoMessage:
      '戦友、君の仕事を見てたぞ。言葉にしなくても、あの手から本気が伝わってくる。でもな、俺が気になってるのはそこじゃなくて、君が自分のことを話せてるかだ。不具合は全部自分でなおしてきただろう。でも人間の傷は、たまに他人に見せた方が早く治るぞ。',
    bandaidMessage: '言葉にしなくても君の本気は伝わってる。でも今日は、一言だけ言ってみてくれ。',
    compatibleTypes: [
      { nickname: '兄貴', slug: 'aniki', reason: '誠実さと温かさが深く共鳴する' },
      { nickname: '参謀', slug: 'sanbo', reason: '丁寧さと発想が互いを豊かにする' },
      { nickname: 'お姉さん', slug: 'onesan', reason: '献身と情熱が美しく調和する' },
      { nickname: '腹黒美女', slug: 'haraguro', reason: '誠実さと戦略が互いの欠けを補い合う' },
    ],
  },
  {
    slug: 'fuuraibo',
    mbti: 'ISFP',
    nickname: '風来坊',
    formalName: '自由奔漢',
    catchphrase: '風の吹くまま、美しく生きる漢',
    summary: '今この瞬間の美と感覚に生きる、感性豊かな自由人。縛られることを心底嫌う。',
    axisLabel: '内剛・現実・感情・柔軟',
    category: '自由系',
    innateElement: '水',
    characterImageFile: 'fuiraibo.png',
    traits: {
      characteristics: [
        '鋭い感受性と美的センスを持ち、言葉より行動と作品で気持ちを表す',
        '自分のペースと自由を最も大切にし、強制や計画に強いストレスを感じる',
        '自信を持ちにくく、自分の作品や感性を世界に出すことへの怖さがある',
      ],
      strengths: ['感受性', '美的センス', '今この瞬間への集中力', '柔軟な適応力'],
      weaknesses: ['自己主張の弱さ', '長期計画への苦手意識', '自己評価の低さ'],
    },
    psychologyNote:
      '内剛・現実・感情・柔軟の漢。感情機能が主機能、感覚が補助機能。感情的な価値判断を最も重視し、五感でその瞬間の美や真実を受け取る。「本物の自分らしさ」への強い欲求と、それが否定されることへの深い傷つきやすさが表裏一体。',
    elementNote:
      '本来の気：水（すい）。流れる水の気。流水は岩を砕くほどの力を持つが、形を持たず自由に形を変える。風来坊の感性と適応力は流水そのもの。その水が堰き止められると、内側で澱みが生じる。木の気（表現・成長）で外に向かって流し出すことが解放の鍵。',
    bansokoMessage:
      '戦友、君の感じ方は本物だ。あの繊細なセンスは、俺みたいな武骨な漢には到底持てないものだぞ。でも一つだけ言わせてくれ。君が作ったもの、感じたことを、もう少しだけ外に出してみてくれないか。うまくなくていい。伝わらなくていい。君が感じたことは、誰かにとっての救いになるから。',
    bandaidMessage: '風に乗ることは才能だ。どこかで根を張る時が来ても、君らしさは消えない。',
    compatibleTypes: [
      { nickname: 'お父さん', slug: 'otosan', reason: '自由さと安定が互いを支え合う' },
      { nickname: '不死身', slug: 'fujimi', reason: '軽やかな自由と揺るぎない強さが惹かれ合う' },
      { nickname: '鉄板女子', slug: 'hagane', reason: '自由な明るさと安定感が互いを補う' },
      { nickname: 'こだわり女子', slug: 'kodawari', reason: '行動力と丁寧さが絶妙に補完する' },
    ],
  },
  {
    slug: 'hatsumei-ka',
    mbti: 'ENFP',
    nickname: '発明家',
    formalName: '創造無漢',
    catchphrase: '世界をもっと面白くしたい、エネルギーの塊の漢',
    summary: 'アイデアと情熱で場を変える。人への興味と可能性への信頼が武器。',
    axisLabel: '外剛・直感・感情・柔軟',
    category: '自由系',
    innateElement: '木',
    characterImageFile: 'hatsumei.png',
    traits: {
      characteristics: [
        '可能性とアイデアに溢れ、出会う人全員に何らかの才能を見つける',
        '熱量が高い分、複数のことに同時に燃えて収拾がつかなくなる',
        '批判や否定に過敏で、自己評価の振れ幅が大きい',
      ],
      strengths: ['アイデア発想力', '人を巻き込む力', '共感力', '楽観性'],
      weaknesses: ['散漫になりやすい', '完遂が苦手', '批判への敏感さ'],
    },
    psychologyNote:
      '外剛・直感・感情・柔軟の漢。直感が主機能、感情が補助機能。無数の可能性を直感で掴み、人への共感で温度を与える。「世界はもっと面白くなれる」という根拠のない確信がエンジンとなり、周囲を巻き込んで動く。',
    elementNote:
      '本来の気：木（もく）。芽吹きの木の気。春の新芽のように太陽に向かってただひたすら伸びようとする生命力。ただし根を張る前に伸びすぎると折れる。土の気（継続・実務）が発明家の最大の補強材。',
    bansokoMessage:
      '戦友、君のエネルギーは本当に眩しいぞ。一緒にいるだけで、なんでもできる気がしてくる。でもな、俺は一つだけ心配してる。君が「自分はダメだ」と思いやすいことだ。振れ幅が大きい分、落ちた時の落差も大きい。そういう時こそ保健室に来てくれ。俺はいつでもここにいるから。',
    bandaidMessage: 'アイデアより大事なのは、一つを最後まで信じること。',
    compatibleTypes: [
      { nickname: '一匹狼', slug: 'ippiki-okami', reason: '発想と現実感覚が互いを完成させる' },
      { nickname: '軍師', slug: 'gunshi', reason: '自由な発想と戦略が革新を生む' },
      { nickname: '一匹狼女', slug: 'ippikiokami-onna', reason: '情熱と冷静さが互いを引き立て合う' },
      { nickname: '頭脳派女子', slug: 'zunoha', reason: '発想と戦略が最強のコンビに' },
    ],
  },
  {
    slug: 'gambler',
    mbti: 'ESFP',
    nickname: 'ギャンブラー',
    formalName: '直感勘漢',
    catchphrase: '今日という戦場を、全力で楽しむ漢',
    summary: '生き様でみんなを沸かせる、天性のエンターテイナー。明日より今日が全て。',
    axisLabel: '外剛・現実・感情・柔軟',
    category: '自由系',
    innateElement: '火',
    characterImageFile: 'gambler.png',
    traits: {
      characteristics: [
        '場のテンションを一瞬で上げる天性のエンターテイナー気質',
        '刹那的で計画が苦手。楽しいことへの嗅覚は超一流',
        '深刻な感情や長期の問題に向き合うことを避けがち',
      ],
      strengths: ['場を盛り上げる力', '観察眼', '適応力', '感情的な温かさ'],
      weaknesses: ['長期計画が苦手', '感情的な深みを避ける', '衝動的な判断'],
    },
    psychologyNote:
      '外剛・現実・感情・柔軟の漢。感覚が主機能、感情が補助機能。五感で「今ここ」を全力で楽しみながら、周囲の感情を読んでその場を最高にする。「生きることそのものを楽しむ」ことへの純粋な欲動が、他者を引き込む磁力になる。',
    elementNote:
      '本来の気：火（か）。ギャンブラーの火は「花火」──一瞬にして夜空を染め上げ、見る者を驚かせ、笑顔にする。花火は刹那的だが、それが美しい。ただし打ち上げ続けるためには、土台（土の気）が必要。',
    bansokoMessage:
      '戦友、君がいると場が明るくなる。それは本物の才能だぞ。でもな、俺は知ってる。笑顔の裏で抱えてるものがある時のこと。「楽しそう」と思われてる人間の痛みは、誰にも気づかれにくいからな。今日だけは笑顔を休憩して、ここでゆっくりしていってくれ。飯でも食おう。',
    bandaidMessage: '賭けることが得意な君に一つだけ確実な賭けを教えよう。自分への投資だ。',
    compatibleTypes: [
      { nickname: '隊長', slug: 'taicho', reason: '洞察と実行力が互いの夢を現実にする' },
      { nickname: '古強者', slug: 'furuyowamono', reason: '繊細な感性と豊富な経験が深い信頼を生む' },
      { nickname: '女大将', slug: 'onna-taisho', reason: '感性と行動力が美しく惹かれ合う' },
      { nickname: '姉御', slug: 'anego', reason: '繊細さと安定感が互いを支え合う' },
    ],
  },
  {
    slug: 'yumeoibito',
    mbti: 'INFP',
    nickname: '夢追い人',
    formalName: '浪漫飛漢',
    catchphrase: '傷ついても、夢を手放さない漢',
    summary: '深い理想と繊細な感受性で、静かに世界に意味を問い続ける孤高の詩人。',
    axisLabel: '内剛・直感・感情・柔軟',
    category: '自由系',
    innateElement: '木',
    characterImageFile: 'yumeoi.png',
    traits: {
      characteristics: [
        '深い理想と強い価値観を持ち、それに反することには体が拒絶する',
        '感受性が高く傷つきやすいが、その深さが独自の表現力の源になる',
        '行動よりも内省が多く、「やりたいこと」と「やっていること」のギャップに苦しむ',
      ],
      strengths: ['深い共感力', '独自の表現力', '価値観への誠実さ', '詩的な洞察力'],
      weaknesses: ['行動に移せない', '自己批判が強い', '現実との摩擦に消耗する'],
    },
    psychologyNote:
      '内剛・直感・感情・柔軟の漢。感情機能が主機能、直感が補助機能。深い感情的価値観を内側で精緻に整理し、直感で世界の意味やパターンを掴む。「本当の自分らしく生きること」への強烈な欲求と、現実世界との折り合いの難しさが人生の主テーマになる。',
    elementNote:
      '本来の気：木（もく）。理想という太陽に向かって、傷つきながらも伸び続ける若木。水の気（内省・知恵）を栄養に、時間をかけて育つタイプ。焦らず根を張ることが、大樹への道。',
    bansokoMessage:
      '戦友、君の夢を笑うやつは、俺が許さない。その理想の深さは、弱さじゃなくて強さだ。でもな、夢を見ることと、自分を傷めつけることは別の話だぞ。「まだ何もできていない」じゃなくて、「ずっと夢を手放さなかった」という事実を、今日だけは認めてくれ。それだけで十分だ。',
    bandaidMessage: '夢を見ることは、すでに行動だ。君はちゃんと戦っている。',
    compatibleTypes: [
      { nickname: '策士', slug: 'sakushi', reason: '深い洞察と行動力が互いを完成させる' },
      { nickname: '風来坊', slug: 'fuiraibo', reason: '理想と自由が独特の化学反応を起こす' },
      { nickname: '小悪魔', slug: 'koakuma', reason: '深い洞察と直感が互いを引き立て合う' },
      { nickname: 'マイペース女子', slug: 'maipace', reason: '理想主義と温かさが深く共鳴する' },
    ],
  },
];

export const TYPE_MAP = new Map<string, OtokoPersonalityType>(
  PERSONALITY_TYPES.map((t) => [t.slug, t])
);

export const MBTI_TO_SLUG: Record<MBTICode, string> = {
  ENTJ: 'taicho',
  ESTJ: 'fujimi',
  ESTP: 'ippiki-okami',
  ISTJ: 'furutsuwamouno',
  ENFJ: 'aniki',
  ESFJ: 'otosan',
  INFJ: 'gunshi',
  ISFJ: 'iyashi',
  INTP: 'hakase',
  INTJ: 'sanbo',
  ENTP: 'sakushi',
  ISTP: 'shokunin',
  ISFP: 'fuuraibo',
  ENFP: 'hatsumei-ka',
  ESFP: 'gambler',
  INFP: 'yumeoibito',
};

export const CATEGORY_COLORS: Record<TypeCategory, string> = {
  '強い系': '#b22222',
  '優しい系': '#c9a04e',
  '知的系': '#4a7fb5',
  '自由系': '#4a9e6e',
};

export const ELEMENT_COLORS: Record<GogyouElement, string> = {
  木: '#4a9e6e',
  火: '#b22222',
  土: '#c9a04e',
  金: '#8a9bb0',
  水: '#4a7fb5',
};

export const ELEMENT_EMOJI: Record<GogyouElement, string> = {
  木: '🌿',
  火: '🔥',
  土: '⛰️',
  金: '⚔️',
  水: '💧',
};
