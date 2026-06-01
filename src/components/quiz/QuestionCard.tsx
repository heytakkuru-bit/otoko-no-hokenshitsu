'use client';

import type { AnswerValue, Question } from '@/lib/quiz/questions';

interface QuestionCardProps {
  question: Question;
  selected: AnswerValue | null;
  onAnswer: (value: AnswerValue) => void;
}

export default function QuestionCard({ question, selected, onAnswer }: QuestionCardProps) {
  return (
    <div className="flex-1 flex flex-col px-4 py-4" style={{ letterSpacing: '0.05em' }}>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span
            className="inline-block rounded-full px-2.5 py-0.5 text-xs tracking-wide"
            style={{
              background: 'rgba(200,169,110,0.12)',
              border: '1px solid rgba(200,169,110,0.3)',
              color: 'rgba(200,169,110,0.8)',
            }}
          >
            {question.axis}
          </span>
          <span
            className="text-xs"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            {question.category}
          </span>
        </div>
        <h2
          className="text-xl font-bold leading-relaxed"
          style={{ color: '#f5f0e8' }}
        >
          {question.text}
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {question.answers.map((answer) => {
          const isSelected = selected === answer.value;
          const isDisabled = selected !== null;

          return (
            <button
              key={answer.value}
              onClick={() => !isDisabled && onAnswer(answer.value)}
              disabled={isDisabled}
              className="w-full min-h-[52px] px-4 py-3.5 rounded-xl text-left flex items-center gap-3 transition-all duration-300 text-sm font-medium"
              style={{
                border: isSelected
                  ? '1px solid #C8A96E'
                  : isDisabled
                  ? '1px solid rgba(200,169,110,0.1)'
                  : '1px solid rgba(200,169,110,0.25)',
                background: isSelected
                  ? 'rgba(200,169,110,0.18)'
                  : isDisabled
                  ? 'rgba(255,255,255,0.02)'
                  : 'rgba(255,255,255,0.04)',
                color: isSelected
                  ? '#f5f0e8'
                  : isDisabled
                  ? 'rgba(255,255,255,0.25)'
                  : '#f5f0e8',
                transform: isSelected ? 'scale(1.02)' : undefined,
                cursor: isDisabled ? 'not-allowed' : 'pointer',
              }}
            >
              <span
                className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold transition-all duration-300"
                style={{
                  border: isSelected
                    ? '1px solid #C8A96E'
                    : '1px solid rgba(200,169,110,0.4)',
                  background: isSelected ? '#C8A96E' : 'transparent',
                  color: isSelected ? '#0a0a0a' : 'rgba(200,169,110,0.7)',
                }}
              >
                {answer.value}
              </span>
              <span className="leading-snug">{answer.text}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
