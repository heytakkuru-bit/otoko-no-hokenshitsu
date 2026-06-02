import type { GogyouElement } from './types';

export interface ElementCondition {
  element: GogyouElement;
  reading: string;
  emoji: string;
  color: string;
  bgColor: string;
  fullMessage: string;
  weakMessage: string;
}

export const ELEMENT_CONDITIONS: Record<GogyouElement, ElementCondition> = {
  木: {
    element: '木',
    reading: 'もく',
    emoji: '🌿',
    color: '#4a9e6e',
    bgColor: 'rgba(74, 158, 110, 0.15)',
    fullMessage:
      '戦友、今日はアイデアと行動意欲が溢れてる日だ。その勢いは本物だぞ。一つだけ選んで、思い切って踏み出してみてくれ。木の気は、動いた分だけ伸びる。',
    weakMessage:
      '戦友、今日は少し根っこが疲れてる日かもしれない。無理に動かなくていい。木も雨の日は葉を閉じて根にエネルギーを集める。今日は栄養補給の日だ。好きなものを食べて、寝てくれ。',
  },
  火: {
    element: '火',
    reading: 'か',
    emoji: '🔥',
    color: '#b22222',
    bgColor: 'rgba(178, 34, 34, 0.15)',
    fullMessage:
      '戦友、今日は情熱と表現力が全開の日だ。誰かに会いたくなったら会いに行っていい。その熱量は伝染する。ただし燃えすぎには注意しろよ。水を一杯飲んで、適度に燃えてくれ。',
    weakMessage:
      '戦友、今日は炎が少し小さい日だな。それでいい。炎はずっと燃え続けるものじゃない。今日は誰かの温かいところにいてくれ。もらい火でいいんだ。一人で燃えようとしなくていい日だぞ。',
  },
  土: {
    element: '土',
    reading: 'ど',
    emoji: '⛰️',
    color: '#c9a04e',
    bgColor: 'rgba(201, 160, 78, 0.15)',
    fullMessage:
      '戦友、今日は粘り強さと実務力が冴える日だ。ずっと後回しにしてたやつを片付けるのに最高のタイミングだぞ。一つ着実にやり切ってみてくれ。土の力は、積み重ねに宿るからな。',
    weakMessage:
      '戦友、今日はちょっと不安感が強い日かもしれない。それは君が弱いわけじゃないぞ。足の裏を地面につけて、ゆっくり深呼吸してみてくれ。地に足をつけるだけで、土の気は戻ってくる。',
  },
  金: {
    element: '金',
    reading: 'こん',
    emoji: '⚔️',
    color: '#8a9bb0',
    bgColor: 'rgba(138, 155, 176, 0.15)',
    fullMessage:
      '戦友、今日は集中力と判断力が研ぎ澄まされている日だ。複雑な問題の核心を掴むのに最高のタイミングだぞ。余分なものを一つ削ぎ落として、大事なものに時間を使ってくれ。',
    weakMessage:
      '戦友、今日は少しだけ悲しみや物寂しさが強い日かもしれない。無理に振り払わなくていいぞ。金の気が弱まる日は感受性が高まる日でもある。その感覚を、誰かに話すか、紙に書き出してみてくれ。',
  },
  水: {
    element: '水',
    reading: 'すい',
    emoji: '💧',
    color: '#4a7fb5',
    bgColor: 'rgba(74, 127, 181, 0.15)',
    fullMessage:
      '戦友、今日は直感と洞察力が抜群に冴える日だ。「なんとなくこっちだ」という感覚を信じていい。水の気が満ちた日の直感は大抵正しいからな。静かな場所で、自分の内側の声を聴いてみてくれ。',
    weakMessage:
      '戦友、今日は決断が難しく、なんとなく不安を感じやすい日だ。それは弱さじゃなくて、水の気が少ない日の症状だぞ。水をたくさん飲んで、ぬるいお湯につかってくれ。水で水を補うのが一番早い処方だ。',
  },
};

export function getTodaysElement(): GogyouElement {
  const elements: GogyouElement[] = ['木', '火', '土', '金', '水'];
  const now = new Date();
  const yearStart = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - yearStart.getTime()) / 86_400_000);
  return elements[dayOfYear % 5];
}
