'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { QUESTIONS, TOTAL_QUESTIONS } from '@/lib/quiz/questions';
import type { AnswerValue } from '@/lib/quiz/questions';
import { calculateResult } from '@/lib/quiz/scoring';
import type { QuizAnswer } from '@/lib/quiz/scoring';
import ProgressGlass from '@/components/quiz/ProgressGlass';
import QuestionCard from '@/components/quiz/QuestionCard';

const STORAGE_KEY = 'sachiko_quiz';

const LOADING_LINES = [
  'ふむ……',
  'お前の場合は……',
  'なるほどな……',
  'ちょっと待ってくれ……',
  '見えてきたぞ……',
];

interface QuizState {
  sessionId: string;
  answers: QuizAnswer[];
  startedAt: string;
}

export default function QuestionPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const questionId = parseInt(params.id, 10);
  const question = QUESTIONS.find((q) => q.id === questionId);
  const [selected, setSelected] = useState<AnswerValue | null>(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingLine, setLoadingLine] = useState(LOADING_LINES[0]);

  useEffect(() => {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) {
      router.replace('/start');
      return;
    }
    setVisible(false);
    setSelected(null);
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, [questionId, router]);

  const handleAnswer = useCallback(
    (value: AnswerValue) => {
      setSelected(value);

      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const state = JSON.parse(raw) as QuizState;

      const newAnswers: QuizAnswer[] = [
        ...state.answers.filter((a) => a.questionId !== questionId),
        { questionId, answerValue: value },
      ];
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, answers: newAnswers }));

      if (questionId >= TOTAL_QUESTIONS) {
        setLoading(true);
        const resultType = calculateResult(newAnswers);

        let lineIndex = 0;
        const interval = setInterval(() => {
          lineIndex = (lineIndex + 1) % LOADING_LINES.length;
          setLoadingLine(LOADING_LINES[lineIndex]);
        }, 600);

        setTimeout(() => {
          clearInterval(interval);
          router.push(`/diagnosis/result/${resultType}`);
        }, 2400);
      } else {
        setTimeout(() => {
          router.push(`/question/${questionId + 1}`);
        }, 700);
      }
    },
    [questionId, router]
  );

  if (!question) return null;

  if (loading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="text-center" style={{ letterSpacing: '0.05em' }}>
          {/* 十字マーク */}
          <div className="relative w-12 h-12 mx-auto mb-6 animate-pulse">
            <div
              className="absolute left-1/2 top-0 -translate-x-1/2"
              style={{ width: '4px', height: '48px', background: '#C8A96E', borderRadius: '2px' }}
            />
            <div
              className="absolute top-1/2 left-0 -translate-y-1/2"
              style={{ width: '48px', height: '4px', background: '#C8A96E', borderRadius: '2px' }}
            />
          </div>
          <p className="text-lg font-medium mb-2" style={{ color: '#C8A96E' }}>
            {loadingLine}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
            お前の漢を診てる。少し待ってくれ。
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex-1 flex flex-col transition-opacity duration-400 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <ProgressGlass current={questionId} total={TOTAL_QUESTIONS} />

      {question.midComment && (
        <div className="px-4 py-3">
          <div
            className="rounded-xl px-4 py-3"
            style={{
              background: 'rgba(200,169,110,0.08)',
              border: '1px solid rgba(200,169,110,0.2)',
            }}
          >
            <p style={{ color: 'rgba(200,169,110,0.8)', fontSize: '0.82rem', lineHeight: 1.8 }}>
              {question.midComment}
            </p>
          </div>
        </div>
      )}

      <QuestionCard question={question} selected={selected} onAnswer={handleAnswer} />

      {selected && !loading && (
        <div className="text-center pb-6">
          <p
            className="text-xs animate-pulse"
            style={{ color: 'rgba(200,169,110,0.5)' }}
          >
            考え中……
          </p>
        </div>
      )}
    </div>
  );
}
