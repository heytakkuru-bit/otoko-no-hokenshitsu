'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Phase = 'dark' | 'icon' | 'welcome' | 'ready';

export default function Home() {
  const [phase, setPhase] = useState<Phase>('dark');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('icon'), 500);
    const t2 = setTimeout(() => setPhase('welcome'), 1800);
    const t3 = setTimeout(() => setPhase('ready'), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 max-w-md mx-auto"
      style={{ background: '#0a0a0a', letterSpacing: '0.05em' }}
    >
      <div className="text-center w-full">
        {/* 十字マーク */}
        <div
          className={`transition-all duration-700 ${
            phase === 'dark' ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
          }`}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 relative mx-auto">
            <div
              className="absolute"
              style={{ width: '4px', height: '36px', background: '#C8A96E', borderRadius: '2px' }}
            />
            <div
              className="absolute"
              style={{ width: '36px', height: '4px', background: '#C8A96E', borderRadius: '2px' }}
            />
          </div>
          <p
            className={`text-sm tracking-[0.3em] mt-2 transition-all duration-500 ${
              phase === 'icon' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ color: 'rgba(200,169,110,0.7)' }}
          >
            漢の保健室
          </p>
        </div>

        {/* タイトル */}
        <div
          className={`mt-6 transition-all duration-700 ${
            phase === 'welcome' || phase === 'ready'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          {/* 集合画像 */}
          <div style={{ maxWidth: '400px', margin: '0 auto', width: '100%' }} className="mb-4">
            <Image
              src="/characters/group.png"
              alt="16漢キャラクター集合"
              width={400}
              height={300}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
            />
          </div>

          <h1
            className="font-bold mb-2"
            style={{ fontSize: '2.8rem', color: '#C8A96E', fontFamily: 'serif' }}
          >
            漢の保健室
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
            十人十漢 — 戦友はどの漢だ？
          </p>
        </div>

        {/* メインコンテンツ */}
        <div
          className={`mt-8 transition-all duration-700 ${
            phase === 'ready' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* セリフカード */}
          <div
            className="rounded-2xl p-6 mb-6 text-left"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(200,169,110,0.3)',
            }}
          >
            <p
              className="text-sm font-bold"
              style={{ color: '#f5f0e8', lineHeight: 2 }}
            >
              ちょっとここに座ってくれい。
            </p>
            <p
              className="text-sm"
              style={{ color: '#C8A96E', lineHeight: 2, marginTop: '4px' }}
            >
              戦友がどんな漢なのか、一緒に確かめてみようぜ。
            </p>
            <p
              className="text-xs mt-3"
              style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 2 }}
            >
              正直に答えてくれればいい。それだけでいい。
            </p>
          </div>

          <Link
            href="/start"
            className="block w-full font-bold text-lg py-4 text-center transition-all duration-200 active:scale-[0.98]"
            style={{
              background: '#C8A96E',
              color: '#0a0a0a',
              borderRadius: '4px',
              boxShadow: '0 4px 20px rgba(200,169,110,0.3)',
            }}
          >
            診断を受ける
          </Link>

          <p
            className="text-xs mt-4"
            style={{ color: 'rgba(255,255,255,0.25)' }}
          >
            無料・全16問・約3分
          </p>
        </div>
      </div>
    </div>
  );
}
