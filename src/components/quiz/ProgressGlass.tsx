'use client';

interface ProgressGlassProps {
  current: number;
  total: number;
}

export default function ProgressGlass({ current, total }: ProgressGlassProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="px-4 pt-5 pb-2">
      <div className="flex items-center gap-3">
        <span
          className="text-xs font-medium whitespace-nowrap"
          style={{ color: 'rgba(200,169,110,0.7)' }}
        >
          第 {current} 問
        </span>
        <div
          className="flex-1 h-1.5 rounded-full overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          <div
            className="h-full rounded-full transition-all duration-700 ease-out"
            style={{
              width: `${percentage}%`,
              background: 'linear-gradient(to right, #8a6a20, #C8A96E)',
            }}
          />
        </div>
        <span className="text-xs" style={{ color: 'rgba(200,169,110,0.5)' }}>
          {total}問
        </span>
      </div>
    </div>
  );
}
