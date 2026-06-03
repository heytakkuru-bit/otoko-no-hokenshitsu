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
