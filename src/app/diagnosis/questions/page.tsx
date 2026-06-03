'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { QUESTIONS, TOTAL_QUESTIONS } from '@/lib/quiz/questions';
import type { QuizAnswer } from '@/lib/quiz/scoring';
import { calculateResult } from '@/lib/quiz/scoring';
import { clearAnswers } from '@/lib/otoko/scoring';

const LOADING_LINES = [
  '気を測定中…',
  '十六の漢と照合中…',
  '君の本質を見極めてるぞ…',
  'もう少し待ってくれ…',
];

const AXIS_SECTIONS = [
  { label: '外剛 ／ 内剛', range: [1, 4] },
  { label: '直感 ／ 現実', range: [5, 8] },
  { label: '理性 ／ 感情', range: [9, 12] },
  { label: '計画 ／ 柔軟', range: [13, 16] },
];

export default function OtokoQuestionsPage() {
  const router = useRouter();
  const [currentQ, setCurrentQ] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selected, setSelected] = useState<'A' | 'B' | null>(null);
  const [slideOut, setSlideOut] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingLine, setLoadingLine] = useState(LOADING_LINES[0]);

  useEffect(() => {
    setSlideIn(true);
    const t = setTimeout(() => setSlideIn(false), 500);
    return () => clearTimeout(t);
  }, [currentQ]);

  const handleAnswer = useCallback(
    (value: 'A' | 'B') => {
      if (selected) return;
      setSelected(value);

      const newAnswers: QuizAnswer[] = [...answers, { questionId: currentQ, answerValue: value }];
      setAnswers(newAnswers);

      if (currentQ === TOTAL_QUESTIONS) {
        clearAnswers();
        setLoading(true);

        let idx = 0;
        const interval = setInterval(() => {
          idx = (idx + 1) % LOADING_LINES.length;
          setLoadingLine(LOADING_LINES[idx]);
        }, 500);

        setTimeout(() => {
          clearInterval(interval);
          const typeSlug = calculateResult(newAnswers);
          router.push(`/diagnosis/result/${typeSlug}`);
        }, 2200);
      } else {
        setTimeout(() => {
          setSlideOut(true);
          setTimeout(() => {
            setCurrentQ((q) => q + 1);
            setSelected(null);
            setSlideOut(false);
          }, 300);
        }, 500);
      }
    },
    [currentQ, answers, selected, router]
  );

  const question = QUESTIONS[currentQ - 1];
  const progress = ((currentQ - 1) / TOTAL_QUESTIONS) * 100;
  const currentSection = AXIS_SECTIONS.findIndex(
    (s) => currentQ >= s.range[0] && currentQ <= s.range[1]
  );

  if (loading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-6 min-h-screen">
        <div className="text-center space-y-6">
          <div className="relative w-20 h-20 mx-auto">
            <div className="absolute inset-0 rounded-full border-2 border-[#b22222]/30 animate-ping" />
            <div className="absolute inset-2 rounded-full border-2 border-[#c9a04e]/40 animate-ping animation-delay-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl">✚</span>
            </div>
          </div>
          <div>
            <p
              className="text-[#c9a04e] text-xl font-bold mb-2 transition-all duration-500"
              key={loadingLine}
            >
              {loadingLine}
            </p>
            <p className="text-[#f5f0e8]/40 text-sm">漢保が判断してる。少し待ってくれ。</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      {/* Progress bar */}
      <div className="px-6 pt-8 pb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#c9a04e]/70 text-xs font-bold tracking-widest">
            Q{currentQ} / {TOTAL_QUESTIONS}
          </span>
          <span className="text-[#f5f0e8]/30 text-xs">{question.axis}</span>
        </div>
        <div className="h-1.5 bg-[#243040] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#b22222] to-[#c9a04e] rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        {/* Axis section dots */}
        <div className="flex justify-center gap-3 mt-3">
          {AXIS_SECTIONS.map((s, i) => (
            <div
              key={s.label}
              className={`rounded-full transition-all duration-300 ${
                i < currentSection
                  ? 'w-2 h-2 bg-[#c9a04e]'
                  : i === currentSection
                  ? 'w-4 h-2 bg-[#b22222]'
                  : 'w-2 h-2 bg-[#243040]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question card */}
      <div
        className={`flex-1 px-5 pb-8 flex flex-col gap-4 transition-all duration-300 ${
          slideOut ? 'opacity-0 -translate-x-8' : slideIn ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
        }`}
      >
        {/* Coach comment */}
        <div className="flex items-start gap-3 mt-2">
          <div className="w-8 h-8 rounded-full bg-[#b22222]/20 border border-[#b22222]/40 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
            ✚
          </div>
          <div className="bg-[#243040] rounded-xl rounded-tl-sm px-4 py-3 flex-1">
            <p className="text-[#f5f0e8]/60 text-sm leading-relaxed">
              {question.midComment ?? `${question.category}について教えてくれ。`}
            </p>
          </div>
        </div>

        {/* Question text */}
        <div className="bg-[#1e2d3d] border border-[#c9a04e]/15 rounded-2xl p-5">
          <p className="text-[#f5f0e8] text-base font-bold leading-relaxed">{question.text}</p>
        </div>

        {/* Options */}
        <div className="space-y-3 mt-2">
          {question.answers.map((ans) => {
            const isSelected = selected === ans.value;
            const isOther = selected !== null && selected !== ans.value;
            return (
              <button
                key={ans.value}
                onClick={() => handleAnswer(ans.value)}
                disabled={selected !== null}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#b22222]/20 border-[#b22222] text-[#f5f0e8] shadow-[0_0_16px_rgba(178,34,34,0.3)]'
                    : isOther
                    ? 'bg-[#1e2d3d]/50 border-[#243040] text-[#f5f0e8]/30'
                    : 'bg-[#1e2d3d] border-[#c9a04e]/20 text-[#f5f0e8] active:scale-[0.98] hover:border-[#c9a04e]/40'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-black mt-0.5 ${
                      isSelected
                        ? 'bg-[#b22222] text-white'
                        : isOther
                        ? 'bg-[#243040] text-[#f5f0e8]/20'
                        : 'bg-[#c9a04e]/20 text-[#c9a04e]'
                    }`}
                  >
                    {ans.value}
                  </span>
                  <span className="text-sm leading-relaxed">{ans.text}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
