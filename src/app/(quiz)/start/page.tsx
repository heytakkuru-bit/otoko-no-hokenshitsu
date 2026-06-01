'use client';

import { useRouter } from 'next/navigation';

const STORAGE_KEY = 'sachiko_quiz';

function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export default function StartPage() {
  const router = useRouter();

  const handleStart = () => {
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        sessionId: generateUUID(),
        answers: [],
        startedAt: new Date().toISOString(),
      })
    );
    router.push('/question/1');
  };

  return (
    <div
      className="flex-1 flex flex-col justify-between p-6 pt-12"
      style={{ letterSpacing: '0.05em' }}
    >
      <div>
        <div className="text-center mb-8">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl"
            style={{
              background: 'rgba(200,169,110,0.12)',
              border: '1px solid rgba(200,169,110,0.35)',
            }}
          >
            🩹
          </div>
          <h1
            className="font-bold mb-1"
            style={{ color: '#C8A96E', fontSize: '1.6rem', fontFamily: 'serif' }}
          >
            16漢診断
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem' }}>
            全16問・約3分
          </p>
        </div>

        <div
          className="rounded-2xl p-5 mb-6 space-y-2"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(200,169,110,0.3)',
          }}
        >
          <p style={{ color: '#f5f0e8', fontSize: '0.9rem', lineHeight: 2 }}>
            ちょっとここに座ってくれ。
          </p>
          <p style={{ color: '#C8A96E', fontWeight: 'bold', fontSize: '0.9rem', lineHeight: 2 }}>
            お前がどんな漢なのか、一緒に確かめてみようぜ。
          </p>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', lineHeight: 2, paddingTop: '4px' }}>
            正直に答えてくれればいい。それだけでいい。
          </p>
        </div>
      </div>

      <button
        onClick={handleStart}
        className="w-full font-bold text-lg py-4 transition-all duration-200 active:scale-[0.98]"
        style={{
          background: '#C8A96E',
          color: '#0a0a0a',
          borderRadius: '4px',
          boxShadow: '0 4px 20px rgba(200,169,110,0.3)',
        }}
      >
        診断を受ける
      </button>
    </div>
  );
}
