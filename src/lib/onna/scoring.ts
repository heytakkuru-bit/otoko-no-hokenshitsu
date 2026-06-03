import { MBTI_TO_SLUG, type MBTICode } from './types';

export type OtokoAnswers = Record<number, 'A' | 'B'>;

export function calculateOtokoType(answers: OtokoAnswers): string {
  // E/I from Q1
  const ei = answers[1] === 'A' ? 'E' : 'I';

  // N/S from Q2
  const ns = answers[2] === 'A' ? 'N' : 'S';

  // T/F from Q3 + Q5 (each contributes 1 point)
  const tPoints = (answers[3] === 'A' ? 1 : 0) + (answers[5] === 'A' ? 1 : 0);
  const fPoints = (answers[3] === 'B' ? 1 : 0) + (answers[5] === 'B' ? 1 : 0);
  // Tiebreak goes to Q3
  const tf = tPoints > fPoints ? 'T' : fPoints > tPoints ? 'F' : answers[3] === 'A' ? 'T' : 'F';

  // J/P from Q4
  const jp = answers[4] === 'A' ? 'J' : 'P';

  const mbti = (ei + ns + tf + jp) as MBTICode;
  return MBTI_TO_SLUG[mbti];
}

export function calculateOnnaType(answers: OtokoAnswers): string {
  const majority = (ids: number[], aChar: string, bChar: string, tiebreakerQ: number): string => {
    const aCount = ids.filter((id) => answers[id] === 'A').length;
    const bCount = ids.filter((id) => answers[id] === 'B').length;
    if (aCount > bCount) return aChar;
    if (bCount > aCount) return bChar;
    return answers[tiebreakerQ] === 'A' ? aChar : bChar;
  };
  const ei = majority([1, 2, 3, 4], 'E', 'I', 1);
  const ns = majority([5, 6, 7, 8], 'N', 'S', 5);
  const tf = majority([9, 10, 11, 12], 'T', 'F', 9);
  const jp = majority([13, 14, 15, 16], 'J', 'P', 13);
  const mbti = `${ei}${ns}${tf}${jp}` as MBTICode;
  return MBTI_TO_SLUG[mbti];
}

export const STORAGE_KEY = 'otoko_diagnosis';

export function saveAnswers(answers: OtokoAnswers): void {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
}

export function loadAnswers(): OtokoAnswers | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as OtokoAnswers) : null;
  } catch {
    return null;
  }
}

export function clearAnswers(): void {
  sessionStorage.removeItem(STORAGE_KEY);
}
