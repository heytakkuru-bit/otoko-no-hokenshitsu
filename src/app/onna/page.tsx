'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { clearAnswers } from '@/lib/onna/scoring';

export default function OnnaTopPage() {
  const router = useRouter();

  const handleStart = () => {
    clearAnswers();
    router.push('/onna/questions');
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#b22222]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#c9a04e]/5 rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      {/* Header */}
      <div className="pt-10 pb-4 px-6 text-center relative">
        <div className="inline-flex items-center gap-2 bg-[#b22222]/10 border border-[#b22222]/30 rounded-full px-4 py-1.5 mb-6">
          <span className="text-[#c9a04e] text-xs font-bold tracking-widest">16女診断</span>
        </div>
        <h1
          className="text-3xl font-black text-[#c9a04e] leading-tight mb-1"
          style={{ fontFamily: 'serif', textShadow: '0 0 20px rgba(201,160,78,0.3)' }}
        >
          16女
          <br />
          パーソナリティ診断
        </h1>
        <p className="text-[#f5f0e8]/40 text-xs tracking-widest mt-2">
          十人十女 — 君はどの女だ？
        </p>
      </div>

      {/* Group Image */}
      <div className="px-6 py-4">
        <div style={{ maxWidth: '400px', margin: '0 auto', width: '100%' }}>
          <Image
            src="/characters/group-onna.png"
            alt="16女キャラクター集合"
            width={400}
            height={300}
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
            priority
          />
        </div>
      </div>

      {/* Speech bubble */}
      <div className="px-6 mt-2">
        <div className="relative bg-[#243040] border border-[#c9a04e]/20 rounded-2xl rounded-tl-sm p-5">
          {/* Triangle */}
          <div className="absolute -top-2 left-8 w-4 h-2 overflow-hidden">
            <div className="w-4 h-4 bg-[#c9a04e]/20 border border-[#c9a04e]/20 rotate-45 translate-y-1 translate-x-0.5" />
          </div>
          <p className="text-[#f5f0e8] text-base font-bold leading-relaxed">
            ちょっとここに座っていきな。
            <br />
            　君がどんな女なのか、一緒に確かめてみようぜ。
            <br />
            　正直に答えてくれればいい。それだけでいい。
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-auto px-6 pb-10 pt-6">
        <button
          onClick={handleStart}
          className="w-full relative overflow-hidden bg-[#b22222] text-[#f5f0e8] font-black text-xl
            py-5 rounded-2xl border border-[#c9a04e]/30 active:scale-[0.97] transition-all duration-150
            shadow-[0_4px_24px_rgba(178,34,34,0.4)]"
        >
          <span className="relative z-10">診断を受ける</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </button>
        <p className="text-center text-[#f5f0e8]/40 text-xs mt-4 tracking-widest">
          無料・全16問・約3分
        </p>
      </div>
    </div>
  );
}
