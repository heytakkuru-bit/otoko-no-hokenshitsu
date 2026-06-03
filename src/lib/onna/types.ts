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
    slug: 'cool-beauty',
    mbti: 'INTP',
    nickname: 'クールビューティー',
    formalName: '冷静沈女',
    catchphrase: '感情に流されず本質を見抜く、知的な女',
    summary: '感情に流されず本質を見抜く、知的な女。独自の世界観とミステリアスな雰囲気が魅力。',
    axisLabel: '内剛・直感・理性・柔軟',
    category: '知的系',
    innateElement: '水',
    characterImageFile: 'cool-beauty.png',
    traits: {
      characteristics: [
        '冷静で観察眼が鋭い',
        '自分の世界を持つ',
        'ミステリアス',
      ],
      strengths: ['冷静さ', '観察力', '専門性'],
      weaknesses: ['感情表現が乏しい', '距離感が遠い', 'とっつきにくい'],
    },
    psychologyNote:
      '内剛・直感・理性・柔軟型。思考機能が主機能、直感が補助機能。純粋な論理世界の内部で概念を精緻化し続ける「内向的思考の化身」。外部世界への関心は理論構築の材料としてのみ機能し、感情表現や対人関係は主要な関心外になりやすい。',
    elementNote:
      '本来の気：水（すい）。クールビューティーの水は「叡智の深淵」。静かな水面の下で絶えず思考が流れる。深く潜りすぎると浮上できなくなるため、火の気（情熱・表現）で定期的に水面に出ることが大切。',
    bansokoMessage:
      'あなたの観察眼と冷静さは本物だよ。感情に流されずに本質を見る力、私には到底敵わない。でもね、距離を置くことが自分を守る手段になってることはない？冷静に見えても、その内側でいろんなことを感じてるはず。今日だけは、感じてることをそのまま話してみてくれ。',
    bandaidMessage: '冷静さはあなたの武器。でも感情は、敵じゃないよ。',
    compatibleTypes: [],
  },
  {
    slug: 'haraguro',
    mbti: 'ENTP',
    nickname: '腹黒美女',
    formalName: '戦略策女',
    catchphrase: '一手先を読んで動く、計算高い女',
    summary: '一手先を読んで動く、計算高い女。影で全てを操る戦略家。でもその本心は、誰より熱い。',
    axisLabel: '外剛・直感・理性・柔軟',
    category: '知的系',
    innateElement: '金',
    characterImageFile: 'haraguro.png',
    traits: {
      characteristics: [
        '駆け引きが上手い',
        '結果を重視する',
        '影で全てを操る',
      ],
      strengths: ['戦略性', '行動力', '判断力'],
      weaknesses: ['冷たく見られがち', '本心を見せない', '信用されにくい'],
    },
    psychologyNote:
      '外剛・直感・理性・柔軟型。直感が主機能、思考が補助機能。可能性を直感で大量に掴み、思考で素早く検証する。「知的刺激と新しいフロンティア」に最もエネルギーが向かい、ルーティンや詳細作業に強いストレスを感じる。',
    elementNote:
      '本来の気：金（こん）。腹黒美女の金は「鋭く光る刃」──策略と洞察で場を切り開く切れ味。その鋭さは周囲を圧倒するが、使いすぎると孤立を招く。水の気（柔軟・信頼）で刃を和らげることが大切。',
    bansokoMessage:
      'あなたの戦略眼は本物だよ。先を読んで動く力、すごいと思ってる。でも私は一つだけ気になってる。本心を見せるのが怖くて、いつも計算の後ろに隠してないかな。信用されにくいって感じることもあるでしょう。ここでは、計算なしで話していいよ。',
    bandaidMessage: '計算できる頭も、たまには計算をやめてみて。そこに本当のあなたがいるから。',
    compatibleTypes: [],
  },
  {
    slug: 'koakuma',
    mbti: 'ESTP',
    nickname: '小悪魔',
    formalName: '知略無女',
    catchphrase: '男心を掴むのが上手い、魅惑の頭脳派',
    summary: '男心を掴む魅惑の頭脳派。自由奔放に見えて、芯はしっかりある女。',
    axisLabel: '外剛・現実・理性・柔軟',
    category: '自由系',
    innateElement: '火',
    characterImageFile: 'koakuma.png',
    traits: {
      characteristics: [
        '相手の心を読む',
        '計算と本気が曖昧',
        '自由奔放だが芯がある',
      ],
      strengths: ['魅力', '洞察力', '機転'],
      weaknesses: ['本気を見せるのが怖い', '信用されにくい', '飽きっぽい'],
    },
    psychologyNote:
      '外剛・現実・理性・柔軟型。感覚機能が主機能で、思考が補助機能。今ここの現実を圧倒的な速さで処理し、論理で即座に最適解を出す。直感的行動と場の空気を読む力で周囲を魅了する。',
    elementNote:
      '本来の気：火（か）。小悪魔の火は「花火」──一瞬にして場を染め上げ、見る者を虜にする。刹那的だが、それが魅力。打ち上げ続けるには、土台（土の気）が必要。',
    bansokoMessage:
      'あなたの魅力と機転は本物だよ。その場の空気を一瞬で変える力、誰でもできることじゃない。でも私は気になってる。本気を見せるのが怖くて、いつも「小悪魔」の仮面を被ってないかな。ここでは素のままでいていい。そっちの方がずっとかっこいいよ。',
    bandaidMessage: '魅力は仮面じゃなく、素のあなたから出てくるものだよ。',
    compatibleTypes: [],
  },
  {
    slug: 'kodawari',
    mbti: 'ISFJ',
    nickname: 'こだわり女子',
    formalName: '緻密策女',
    catchphrase: '細部にこだわり、地道に積み上げる完璧主義者',
    summary: '細部にこだわり、地道に積み上げる完璧主義者。丁寧で正確な仕事が最大の武器。',
    axisLabel: '内剛・現実・感情・計画',
    category: '知的系',
    innateElement: '土',
    characterImageFile: 'kodawari.png',
    traits: {
      characteristics: [
        '丁寧で正確',
        '手先が器用',
        '妥協を許さない',
      ],
      strengths: ['集中力', '忍耐力', '技術力'],
      weaknesses: ['融通が利かない', '完璧主義で疲弊する', '頑固'],
    },
    psychologyNote:
      '内剛・現実・感情・計画型。感覚が主機能、感情が補助機能。五感で取り込んだ具体的な情報を感情処理と組み合わせ、細部まで丁寧に仕上げる。義務感と品質へのこだわりが行動の根幹。',
    elementNote:
      '本来の気：土（ど）。こだわり女子の土は「陶土」──丁寧に練られ、形づくられ、高温で焼かれて初めて美しい器になる。その完璧主義は強みだが、焼きすぎると割れやすくなる。木の気（柔軟性・成長）で和らげることが大切。',
    bansokoMessage:
      'あなたの丁寧さと正確さは本物だよ。細部まで妥協しない姿勢は、本当にすごいと思う。でもね、完璧を求めすぎて自分が疲弊してることに気づいてる？融通が利かないって自分でも感じることがあるでしょう。今日だけは、完璧じゃなくていい。来てくれてよかった。',
    bandaidMessage: '完璧を目指す力は才能。でも「7割でいい」を覚えると、もっと遠くへ行けるよ。',
    compatibleTypes: [],
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
  ESTP: 'koakuma',
  ISTJ: 'hagane',
  ENFJ: 'onesan',
  ESFJ: 'okasan',
  INFJ: 'gunshi',
  ISFJ: 'kodawari',
  INTP: 'cool-beauty',
  INTJ: 'zunoha',
  ENTP: 'haraguro',
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
