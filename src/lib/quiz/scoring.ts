import type { AnswerValue, ResultType } from './questions';

export interface QuizAnswer {
  questionId: number;
  answerValue: AnswerValue;
}

const MBTI_TO_SLUG: Record<string, ResultType> = {
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

function majority(
  answers: QuizAnswer[],
  ids: number[],
  aChar: string,
  bChar: string,
  tiebreakerQ: number
): string {
  const subset = answers.filter((a) => ids.includes(a.questionId));
  const aCount = subset.filter((a) => a.answerValue === 'A').length;
  const bCount = subset.filter((a) => a.answerValue === 'B').length;
  if (aCount > bCount) return aChar;
  if (bCount > aCount) return bChar;
  // tiebreaker: use specified question's answer
  const tb = answers.find((a) => a.questionId === tiebreakerQ);
  return tb?.answerValue === 'A' ? aChar : bChar;
}

export function calculateResult(answers: QuizAnswer[]): ResultType {
  const ei = majority(answers, [1, 2, 3, 4], 'E', 'I', 1);
  const ns = majority(answers, [5, 6, 7, 8], 'N', 'S', 5);
  const tf = majority(answers, [9, 10, 11, 12], 'T', 'F', 9);
  const jp = majority(answers, [13, 14, 15, 16], 'J', 'P', 13);
  const mbti = `${ei}${ns}${tf}${jp}`;
  return MBTI_TO_SLUG[mbti] ?? 'yumeoibito';
}
