export type GogyouElement = '木' | '火' | '土' | '金' | '水';
export type TypeCategory = '強い系' | '優しい系' | '知的系' | '自由系';
export type MBTICode =
  | 'ENTJ' | 'ESTJ' | 'ESTP' | 'ISTJ'
  | 'ENFJ' | 'ESFJ' | 'INFJ' | 'ISFJ'
  | 'INTP' | 'INTJ' | 'ENTP' | 'ISTP'
  | 'ISFP' | 'ENFP' | 'ESFP' | 'INFP';

export interface OnnaPersonalityType {
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

export const PERSONALITY_TYPES: OnnaPersonalityType[] = [
  {
    slug: 'onna-taisho',
    mbti: 'ENTJ',
    nickname: '女大将',
    formalName: '心屈強女',
    catchphrase: '表に立って場を率いる、芯の通った女',
    summary: '生まれながらのリーダー。迷わず前に出て場を動かす、芯の通った女。守るものができると無敵になる。',
    axisLabel: '外剛・直感・理性・計画',
    category: '強い系',
    innateElement: '火',
    characterImageFile: 'onna-taisho.png',
    traits: {
      characteristics: [
        'リーダーシップがあり決断が早い',
        '弱音を吐かず自他に厳しい',
        '守るものがあると無敵になる',
      ],
      strengths: ['統率力', '決断力', '責任感'],
      weaknesses: ['弱さを見せられない', '頼るのが苦手', '完璧を求めすぎる'],
    },
    psychologyNote:
      '外剛・直感・理性・計画型。ユング類型論の「外向的思考型」に相当。外部世界に積極的にエネルギーを向け、論理と構造で未来を設計する。思考機能が主機能、直感が補助機能として働き、ビジョンを論理で実現する二段構えの強さを持つ。',
    elementNote:
      '本来の気：火（か）。女大将の統率力と情熱は、周囲を照らし場を動かす猛火そのもの。燃えすぎると周囲を焦がすため、消耗した時は水の気（休息・内省）で鎮めることが回復の鍵。',
    bansokoMessage:
      'あなたはいつも表に立って、誰よりも早く動いて場を引っ張ってきたね。その背中で育った人が、たくさんいるよ。でも私には見える。"強くいなければ"と歯を食いしばってる時のあなたが。たまにはリーダーの席を離れていい。ボロボロの時こそ、ここに来てくれ。一緒に傷を確認しよう。',
    bandaidMessage: '表に立ち続けてきたあなたに、少しだけ休む勇気を。',
    compatibleTypes: [],
  },
  {
    slug: 'hagane',
    mbti: 'ISTJ',
    nickname: '鉄板女子',
    formalName: '不撓不女',
    catchphrase: '何度倒れても立ち上がる、折れない女',
    summary: '逆境に強く、過去を糧に変える。コツコツ積み上げる不屈の精神が最大の武器。',
    axisLabel: '内剛・現実・理性・計画',
    category: '強い系',
    innateElement: '土',
    characterImageFile: 'hagane.png',
    traits: {
      characteristics: [
        '逆境に強い',
        '過去を糧に変える',
        'コツコツ努力できる',
      ],
      strengths: ['不屈の精神', '安定感', '誠実さ'],
      weaknesses: ['一人で抱え込む', '融通が利かない', '感情を溜める'],
    },
    psychologyNote:
      '内剛・現実・理性・計画型。ユング類型論の「内向的感覚型」に相当。内側に蓄積された経験・事実を精密に整理し、それを基準に現実を判断する。「積み上げてきたものを守る」誠実さがアイデンティティの中核。',
    elementNote:
      '本来の気：土（ど）。鉄板女子の揺るぎない安定感と不屈の精神は、大地そのもの。土が固まりすぎると融通が利かなくなるため、木の気（成長・変化）とのバランスが大切。',
    bansokoMessage:
      'あなたがどれだけ倒れても立ち上がってきたか、私は知ってる。その強さは本物だよ。でもね、一人で抱え込む癖があるでしょう。全部自分でなんとかしようとしてきたんだよね。今日だけは、その荷物を少し降ろしていい。ここに来てくれてよかった。',
    bandaidMessage: '倒れても立つ、その繰り返しがあなたの強さ。でも今日だけは、休んでいい。',
    compatibleTypes: [],
  },
  {
    slug: 'ippikiokami-onna',
    mbti: 'ISTP',
    nickname: '一匹狼女',
    formalName: '一騎当女',
    catchphrase: '群れない、媚びない、自分の道を行く女',
    summary: '群れず、媚びず、自分の美学で生きる。深くハマれば誰より本物になれる女。',
    axisLabel: '内剛・現実・理性・柔軟',
    category: '自由系',
    innateElement: '金',
    characterImageFile: 'ippikiokami-onna.png',
    traits: {
      characteristics: [
        '一人の時間を大切にする',
        '自分の美学を持つ',
        'ハマると深い',
      ],
      strengths: ['自律心', '専門性', '独立心'],
      weaknesses: ['人に頼れない', '誤解されやすい', '不器用'],
    },
    psychologyNote:
      '内剛・現実・理性・柔軟型。感覚機能が主機能で、思考が補助機能。今ここの現実を速く処理し、論理で即座に最適解を出す。計画より即興、熟考より直感的行動を好む職人気質。',
    elementNote:
      '本来の気：金（こん）。一匹狼女の研ぎ澄まされた判断力と、余分なものを削ぎ落とす鋭さは金の気質。金が過剰になると孤立を招く。水の気（深化・内省）で刃を鞘に納める時間も大切。',
    bansokoMessage:
      'あなたの自分の道を行く姿、かっこいいと思ってる。でもね、「一人でやれる」と「一人でやる必要がある」は違うんだよ。誰かに頼ることを弱さだと思ってきてないかな。ここは頼っていい場所だよ。来てくれてよかった。',
    bandaidMessage: '群れなくていい。でも孤立と孤独は違う。その線だけ覚えていて。',
    compatibleTypes: [],
  },
  {
    slug: 'anego',
    mbti: 'ESTJ',
    nickname: '姉御',
    formalName: '百戦錬女',
    catchphrase: '場数を踏んだ余裕と貫禄で人を引き寄せる女',
    summary: '場数と器の大きさで人を引き寄せる、頼れる姉御。動じない余裕が最大の魅力。',
    axisLabel: '外剛・現実・理性・計画',
    category: '強い系',
    innateElement: '土',
    characterImageFile: 'anego.png',
    traits: {
      characteristics: [
        '経験豊富で器が大きい',
        '後輩に慕われる',
        '物事に動じない',
      ],
      strengths: ['包容力', '対応力', '統率力'],
      weaknesses: ['自分を後回し', '仕切りすぎる', '弱音を吐けない'],
    },
    psychologyNote:
      '外剛・現実・理性・計画型。ユング類型論の「外向的思考型」のうち、感覚が補助機能。今この瞬間の事実に根ざして論理を組み立てる。「実績を積み上げ、場を仕切る」実直さがアイデンティティの中核。',
    elementNote:
      '本来の気：土（ど）。姉御の安定した包容力と対応力は、周囲を支える大地の気質。動きながら仲間を支える豊かな土。土が固まりすぎると仕切りすぎになるため、木の気（柔軟性）で和らげることが大切。',
    bansokoMessage:
      'あなたがいると場が締まる。みんな安心してあなたに甘えてきたんだよね。でも私は気になってた。あなた自身は、誰かに甘えられてる？いつも誰かのために動いてきたあなたが、自分の傷を後回しにしてることに気づいてるよ。今日だけは、自分のために時間を使ってくれ。',
    bandaidMessage: '引っ張ってきた分だけ、たまには誰かに引っ張ってもらっていい。',
    compatibleTypes: [],
  },
  {
    slug: 'onesan',
    mbti: 'ENFJ',
    nickname: 'お姉さん',
    formalName: '共感達女',
    catchphrase: '誰の話も受け止める、心の温かい姉貴肌の女',
    summary: '誰の話も受け止める、心の温かい姉貴肌の女。困っている人を放っておけない、天性の聞き役。',
    axisLabel: '外剛・直感・感情・計画',
    category: '優しい系',
    innateElement: '木',
    characterImageFile: 'onesan.png',
    traits: {
      characteristics: [
        '共感力が高い',
        '困っている人を放っておけない',
        '聞き役上手',
      ],
      strengths: ['共感力', '観察力', '面倒見の良さ'],
      weaknesses: ['感情を背負いすぎる', '自分を犠牲にする', '断れない'],
    },
    psychologyNote:
      '外剛・直感・感情・計画型。感情機能が主機能、直感が補助機能。他者の感情状態を直感的に把握し、その人の気持ちに寄り添う。「人の話を受け止め、成長を支える」ことに最大の喜びを感じるタイプ。',
    elementNote:
      '本来の気：木（もく）。お姉さんの木は、春の若葉のように周囲をほっとさせる生命力。しなやかに風を受け止め、折れずに立ち続ける。木が伸びすぎると自分の根が細くなるため、土の気（安定・休息）で栄養を補うことが大切。',
    bansokoMessage:
      'あなたはいつも誰かの話を受け止めてきたね。それだけで、どれだけの人が救われたか。でも私は気になってる。あなた自身の話、誰かに聞いてもらえてる？感情を背負いすぎて、気づいたら限界だったってことにならないか心配なんだよ。今日はあなたの番。ここで話してくれ。',
    bandaidMessage: '聞き役上手なあなたに、たまには話す番が来てもいい。',
    compatibleTypes: [],
  },
  {
    slug: 'okasan',
    mbti: 'ESFJ',
    nickname: 'お母さん',
    formalName: '慈愛無女',
    catchphrase: '無条件の愛で包み込む、大地のような女',
    summary: '与えることに喜びを感じる、無条件の愛で包み込む大地のような女。その温かさに、みんな自然と引き寄せられる。',
    axisLabel: '外剛・現実・感情・計画',
    category: '優しい系',
    innateElement: '土',
    characterImageFile: 'okasan.png',
    traits: {
      characteristics: [
        '与えることに喜びを感じる',
        '居場所を作る天才',
        '気配り上手',
      ],
      strengths: ['包容力', '忍耐力', '献身性'],
      weaknesses: ['自己犠牲が過ぎる', 'NOが言えない', '抱え込む'],
    },
    psychologyNote:
      '外剛・現実・感情・計画型。感情機能が主機能、感覚が補助機能。人間関係の調和を最重視し、今この場の空気と他者の感情を敏感に読み取る。「具体的な行動で人を包む」ことに最も生きがいを感じるタイプ。',
    elementNote:
      '本来の気：土（ど）。お母さんの気は「豊かな沃土」──何を植えても育てる、温かく肥えた土壌。養育・包容・実務の土の気質が全開。土が過剰になると自分を忘れてしまうため、木の気（自己成長）で自分自身も育てることを忘れずに。',
    bansokoMessage:
      'あなたがいると場が温かくなる。あの料理が食べたくて、あの声が聞きたくて、みんな自然と集まってくるんだよ。でもね、あなた自身は誰かに甘えられてる？自己犠牲が当たり前になってきてないか、私はそこが心配なんだよ。今日だけは、あなたが受け取る番にしよう。',
    bandaidMessage: '与え続けてきたあなたにも、受け取る権利がある。',
    compatibleTypes: [],
  },
  {
    slug: 'zunoha',
    mbti: 'INTJ',
    nickname: '頭脳派女子',
    formalName: '思慮深女',
    catchphrase: '頭の回転と冷静さで道を切り開く知性派の女',
    summary: '頭の回転と冷静な判断力で道を切り開く、知性派の女。戦略を立て、静かに着実に前進する。',
    axisLabel: '内剛・直感・理性・計画',
    category: '知的系',
    innateElement: '水',
    characterImageFile: 'zunoha.png',
    traits: {
      characteristics: [
        '論理的に考える',
        '戦略を立てるのが得意',
        '知的な会話を好む',
      ],
      strengths: ['分析力', '戦略性', '判断力'],
      weaknesses: ['感情表現が苦手', '頭で考えすぎる', '人に厳しい'],
    },
    psychologyNote:
      '内剛・直感・理性・計画型。直感が主機能、思考が補助機能。未来のパターンを直感で掴み、思考で精緻に設計する。「自らのビジョンを最も効率的に実現する」ことへの強いドライブを持ち、自律性が最大の価値観。',
    elementNote:
      '本来の気：水（すい）。頭脳派女子の水は「叡智の深淵」。静かな水面の下で絶えず思考が流れる。深く考えすぎると浮上できなくなるため、火の気（情熱・表現）で時に水面に顔を出すことが大切。',
    bansokoMessage:
      'あなたの分析力と判断力は本物だよ。私には見えない部分まで、しっかり考えてる。でもね、頭で考えすぎて感情を後回しにしてないかな。正しいことと、自分が感じてることは別だよ。今日は頭を少し休めて、感じることだけをしてみてくれ。',
    bandaidMessage: '頭が切れるあなたに、感情は邪魔じゃない。それも武器だから。',
    compatibleTypes: [],
  },
  {
    slug: 'iyashikei-onna',
    mbti: 'ISFP',
    nickname: '癒し女子',
    formalName: '温和柔女',
    catchphrase: 'いるだけで場が和む、優しさそのものの女',
    summary: 'いるだけで場が和む、優しさそのものの女。穏やかな存在感が、自然と人を引き寄せる。',
    axisLabel: '内剛・現実・感情・柔軟',
    category: '優しい系',
    innateElement: '木',
    characterImageFile: 'iyashikei-onna.png',
    traits: {
      characteristics: [
        '穏やかで癒しのオーラがある',
        '争いを好まない',
        '動物や子供に好かれる',
      ],
      strengths: ['癒し力', '調和力', '優しさ'],
      weaknesses: ['押しに弱い', '自己主張が苦手', '流されやすい'],
    },
    psychologyNote:
      '内剛・現実・感情・柔軟型。感情機能が主機能、感覚が補助機能。感情的な価値判断を最も重視し、五感でその瞬間の美や調和を受け取る。争いを嫌い、穏やかな環境の中で最も力を発揮する。',
    elementNote:
      '本来の気：木（もく）。癒し女子の木は「里山の木」──ただそこにいるだけで、周囲に安らぎと日陰を与える。嵐の中でもしなやかに立ち続けるが、押しの強い風には流されやすい。土の気（安定・芯）で根を深く張ることが大切。',
    bansokoMessage:
      'あなたがいるだけで場が柔らかくなる。それはすごい才能だよ。でもね、押しに弱くて流されてしまうことがあるでしょう。「これでいいのかな」って心の中で思いながら、口には出せないことが多いんじゃないかな。ここは正直に話していい場所だよ。来てくれてよかった。',
    bandaidMessage: '流れることも優しさ。でも自分の芯は、手放さなくていいよ。',
    compatibleTypes: [],
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
      { nickname: '参謀', slug: 'sanbo', reason: '知的対話が無限に続く。互いの理論を磨き合える' },
      { nickname: '策士', slug: 'sakushi', reason: '議論のパートナー。博士が深堀りし、策士が広げる' },
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
      { nickname: '隊長', slug: 'taicho', reason: '参謀の戦略を熱量で実行してくれる最高のバディ' },
      { nickname: '博士', slug: 'hakase', reason: '知的深度が合う。互いの思考を刺激し合える' },
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
      { nickname: '隊長', slug: 'taicho', reason: '策士のアイデアを実行に移してくれる、最高の実行部隊' },
      { nickname: '発明家', slug: 'hatsumei-ka', reason: '創造力が爆発し合う。お互いを更新し続けられる関係' },
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
      { nickname: '一匹狼', slug: 'ippiki-okami', reason: '言葉より行動で分かり合える。無言の連帯が最高' },
      { nickname: '古強者', slug: 'furutsuwamouno', reason: '同じ職人気質。黙って隣に座っているだけで安心' },
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
      { nickname: '一匹狼', slug: 'ippiki-okami', reason: '自由さと今この瞬間への共鳴。お互い深入りしない心地よさ' },
      { nickname: 'ギャンブラー', slug: 'gambler', reason: '感性と楽しむ力が近い。一緒にいると解放感がある' },
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
      { nickname: '策士', slug: 'sakushi', reason: 'アイデアが爆発し合う。互いが互いを更新し続ける' },
      { nickname: '夢追い人', slug: 'yumeoibito', reason: '夢を語り合える。深いところで価値観が共鳴する' },
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
      { nickname: '兄貴', slug: 'aniki', reason: '賑やかさを共有でき、兄貴がギャンブラーを深みに導いてくれる' },
      { nickname: '一匹狼', slug: 'ippiki-okami', reason: '行動派同士。共に動いて共に笑える関係' },
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
      { nickname: '軍師', slug: 'gunshi', reason: '深い世界観を言葉にせずとも分かり合える稀有な存在' },
      { nickname: '発明家', slug: 'hatsumei-ka', reason: '夢を語り合える。発明家が夢追い人を外の世界へ連れ出してくれる' },
    ],
  },
];

export const TYPE_MAP = new Map<string, OnnaPersonalityType>(
  PERSONALITY_TYPES.map((t) => [t.slug, t])
);

export const MBTI_TO_SLUG: Record<MBTICode, string> = {
  ENTJ: 'onna-taisho',
  ESTJ: 'anego',
  ESTP: 'ippiki-okami',
  ISTJ: 'hagane',
  ENFJ: 'onesan',
  ESFJ: 'okasan',
  INFJ: 'gunshi',
  ISFJ: 'iyashi',
  INTP: 'hakase',
  INTJ: 'zunoha',
  ENTP: 'sakushi',
  ISTP: 'ippikiokami-onna',
  ISFP: 'iyashikei-onna',
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
