'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import CharacterImage from '@/components/otoko/CharacterImage';
import {
  TYPE_MAP,
  CATEGORY_COLORS,
  ELEMENT_COLORS,
  ELEMENT_EMOJI,
  type OnnaPersonalityType,
} from '@/lib/onna/types';
import { ELEMENT_CONDITIONS, getTodaysElement, type ElementCondition } from '@/lib/onna/elements';
import { clearAnswers } from '@/lib/onna/scoring';

// ─── Phase types ──────────────────────────────────────────────────────────────
type Phase = 'loading' | 'reveal' | 'content';

const NOTE_URL = 'https://note.com'; // Note記事URLをここに設定

export default function OtokoResultPage({ params }: { params: { type: string } }) {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>('loading');
  const [typeData, setTypeData] = useState<OnnaPersonalityType | null>(null);
  const [todayCondition, setTodayCondition] = useState<ElementCondition | null>(null);
  const [conditionMode, setConditionMode] = useState<'full' | 'weak'>('full');
  const [shareVisible, setShareVisible] = useState(false);

  useEffect(() => {
    const data = TYPE_MAP.get(params.type);
    if (!data) {
      router.replace('/onna');
      return;
    }
    setTypeData(data);

    const todayEl = getTodaysElement();
    setTodayCondition(ELEMENT_CONDITIONS[todayEl]);

    // Phase 1: loading (1.4s)
    const t1 = setTimeout(() => setPhase('reveal'), 1400);
    // Phase 2: reveal (1.2s)
    const t2 = setTimeout(() => setPhase('content'), 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [params.type, router]);

  const handleRetry = useCallback(() => {
    clearAnswers();
    router.push('/onna');
  }, [router]);

  const handleShare = useCallback(() => {
    if (!typeData) return;
    const text = `私は「${typeData.nickname}（${typeData.formalName}）」女でした！\n${typeData.catchphrase}\n\n#16女診断 #十人十女 #16女パーソナリティ診断`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');
    setShareVisible(true);
  }, [typeData]);

  // ─── Loading phase ────────────────────────────────────────────────────────
  if (phase === 'loading') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="text-center space-y-8">
          <div className="relative w-24 h-24 mx-auto">
            <div className="absolute inset-0 rounded-full border-2 border-[#b22222]/20 animate-ping" />
            <div
              className="absolute inset-3 rounded-full border-2 border-[#c9a04e]/30 animate-ping"
              style={{ animationDelay: '0.3s' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl animate-pulse">⚕️</div>
            </div>
          </div>
          <div>
            <p className="text-[#c9a04e] text-lg font-bold mb-2">漢保が診断中だ…</p>
            <p className="text-[#f5f0e8]/40 text-sm">十六の女から、君の本質を見極めてる</p>
          </div>
          <div className="flex gap-1 justify-center">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-[#c9a04e]/50 animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!typeData) return null;

  const categoryColor = CATEGORY_COLORS[typeData.category];

  // ─── Reveal phase ─────────────────────────────────────────────────────────
  if (phase === 'reveal') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div
          className="space-y-4 animate-[revealPop_0.6s_cubic-bezier(0.34,1.56,0.64,1)_forwards]"
          style={{ opacity: 0 }}
        >
          <p className="text-[#f5f0e8]/50 text-sm tracking-widest uppercase">
            君は…
          </p>
          <div
            className="text-7xl font-black"
            style={{
              color: '#c9a04e',
              textShadow: '0 0 40px rgba(201,160,78,0.6), 0 0 80px rgba(201,160,78,0.2)',
              fontFamily: 'serif',
            }}
          >
            {typeData.nickname}
          </div>
          <p className="text-[#f5f0e8]/60 text-lg" style={{ fontFamily: 'serif' }}>
            {typeData.formalName}
          </p>
          <p className="text-[#b22222] text-sm font-bold mt-2">{typeData.catchphrase}</p>
        </div>

        {/* Flash overlay */}
        <div className="fixed inset-0 bg-white/10 animate-[flash_0.4s_ease-out_forwards] pointer-events-none" />

        <style>{`
          @keyframes revealPop {
            from { opacity: 0; transform: scale(0.7); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes flash {
            from { opacity: 0.3; }
            to { opacity: 0; }
          }
        `}</style>
      </div>
    );
  }

  // ─── Full content phase ───────────────────────────────────────────────────
  return (
    <div className="flex-1 flex flex-col pb-10 animate-[fadeInResult_0.6s_ease-out_forwards]">
      <style>{`
        @keyframes fadeInResult {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bandaidSlide {
          from { opacity: 0; transform: translateX(-12px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* ── ヘッダー ── */}
      <div className="px-5 pt-8 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
            style={{ background: `${categoryColor}25`, color: categoryColor, border: `1px solid ${categoryColor}50` }}
          >
            {typeData.category}
          </span>
          <span className="text-[#f5f0e8]/30 text-[10px]">{typeData.axisLabel}</span>
        </div>
        <h1
          className="text-5xl font-black text-[#c9a04e] leading-none"
          style={{ fontFamily: 'serif', textShadow: '0 0 20px rgba(201,160,78,0.2)' }}
        >
          {typeData.nickname}
        </h1>
        <p className="text-[#f5f0e8]/60 text-sm mt-1" style={{ fontFamily: 'serif' }}>
          {typeData.formalName}
        </p>
        <p className="text-[#f5f0e8]/80 text-sm font-bold mt-2">{typeData.catchphrase}</p>
      </div>

      {/* ── キャラクター画像 ── */}
      <div className="flex justify-center px-5 mb-4">
        <CharacterImage
          filename={typeData.characterImageFile}
          alt={typeData.nickname}
          size={260}
          isHero
        />
      </div>

      {/* ── サマリー ── */}
      <div className="px-5 mb-4">
        <div className="bg-[#243040] border border-[#c9a04e]/15 rounded-2xl p-4">
          <p className="text-[#f5f0e8]/80 text-sm leading-relaxed">{typeData.summary}</p>
        </div>
      </div>

      {/* ── 特徴・強み・弱み ── */}
      <div className="px-5 mb-4 space-y-3">
        <SectionBlock title="特徴" items={typeData.traits.characteristics} color={categoryColor} />
        <div className="grid grid-cols-2 gap-3">
          <SmallBlock title="⚔️ 強み" items={typeData.traits.strengths} color="#4a9e6e" />
          <SmallBlock title="🩹 弱み" items={typeData.traits.weaknesses} color="#8a9bb0" />
        </div>
      </div>

      {/* ── 心理学的解説 ── */}
      <div className="px-5 mb-4">
        <div className="bg-[#1e2d3d] border border-[#4a7fb5]/20 rounded-2xl p-4">
          <p className="text-[#4a7fb5] text-xs font-bold tracking-wide mb-2">📖 女の本質（心理学解説）</p>
          <p className="text-[#f5f0e8]/70 text-sm leading-relaxed">{typeData.psychologyNote}</p>
        </div>
      </div>

      {/* ── 五行解説 ── */}
      <div className="px-5 mb-4">
        <div
          className="rounded-2xl p-4 border"
          style={{
            background: `${ELEMENT_COLORS[typeData.innateElement]}15`,
            borderColor: `${ELEMENT_COLORS[typeData.innateElement]}30`,
          }}
        >
          <p
            className="text-xs font-bold tracking-wide mb-2"
            style={{ color: ELEMENT_COLORS[typeData.innateElement] }}
          >
            {ELEMENT_EMOJI[typeData.innateElement]} 本来の気：{typeData.innateElement}（
            {getElementReading(typeData.innateElement)}）
          </p>
          <p className="text-[#f5f0e8]/70 text-sm leading-relaxed">{typeData.elementNote}</p>
        </div>
      </div>

      {/* ── 漢保からのメッセージ ── */}
      <div className="px-5 mb-4">
        <div className="bg-[#243040] rounded-2xl p-5 border border-[#c9a04e]/20">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#b22222]/20 border border-[#b22222]/40 flex items-center justify-center text-sm">
              ✚
            </div>
            <p className="text-[#c9a04e] text-sm font-bold">漢保からのメッセージ</p>
          </div>
          <p className="text-[#f5f0e8]/80 text-sm leading-relaxed whitespace-pre-line">
            {typeData.bansokoMessage}
          </p>
        </div>
      </div>

      {/* ── 絆創膏メッセージ ── */}
      <div
        className="mx-5 mb-6 rounded-2xl p-5 border-2 border-[#b22222]"
        style={{
          background: 'rgba(178,34,34,0.08)',
          animation: 'bandaidSlide 0.5s 0.3s ease-out both',
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          {/* Bandaid icon */}
          <div className="flex gap-0.5 items-center">
            <div className="w-8 h-3 bg-[#b22222]/60 rounded-sm relative">
              <div className="absolute inset-y-0 left-1.5 right-1.5 bg-[#b22222]/30 rounded-sm" />
            </div>
          </div>
          <p className="text-[#b22222] text-xs font-black tracking-widest">BANSOKO MESSAGE</p>
        </div>
        <p
          className="text-[#f5f0e8] text-base font-black leading-relaxed"
          style={{ fontFamily: 'serif' }}
        >
          「{typeData.bandaidMessage}」
        </p>
      </div>

      {/* ── 相性タイプ ── */}
      <div className="px-5 mb-4">
        <p className="text-[#c9a04e]/70 text-xs font-bold tracking-widest mb-3">⚔️ 相性の良い漢</p>
        <div className="space-y-2">
          {typeData.compatibleTypes.map((ct) => (
            <div
              key={ct.slug}
              className="flex items-start gap-3 bg-[#1e2d3d] border border-[#c9a04e]/10 rounded-xl p-3"
            >
              <CharacterImage filename={TYPE_MAP.get(ct.slug)?.characterImageFile ?? `${ct.slug}.png`} alt={ct.nickname} size={44} />
              <div className="flex-1 min-w-0">
                <p className="text-[#c9a04e] text-sm font-bold">{ct.nickname}</p>
                <p className="text-[#f5f0e8]/50 text-xs leading-relaxed mt-0.5">{ct.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 今日のコンディション ── */}
      {todayCondition && (
        <div className="px-5 mb-6">
          <p className="text-[#c9a04e]/70 text-xs font-bold tracking-widest mb-3">
            📅 今日のコンディション
          </p>
          <div
            className="rounded-2xl p-4 border"
            style={{
              background: todayCondition.bgColor,
              borderColor: `${todayCondition.color}40`,
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{todayCondition.emoji}</span>
                <div>
                  <p className="text-xs font-bold" style={{ color: todayCondition.color }}>
                    {todayCondition.element}（{todayCondition.reading}）の気
                  </p>
                  <p className="text-[#f5f0e8]/40 text-[10px]">今日の五行コンディション</p>
                </div>
              </div>
              <div className="flex gap-1">
                {(['full', 'weak'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setConditionMode(mode)}
                    className={`text-[10px] px-2 py-0.5 rounded-full border transition-all duration-200 ${
                      conditionMode === mode
                        ? 'text-white border-transparent'
                        : 'text-[#f5f0e8]/40 border-[#f5f0e8]/10'
                    }`}
                    style={conditionMode === mode ? { background: todayCondition.color } : {}}
                  >
                    {mode === 'full' ? '満ちている' : '弱っている'}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-[#f5f0e8]/80 text-sm leading-relaxed">
              {conditionMode === 'full' ? todayCondition.fullMessage : todayCondition.weakMessage}
            </p>
          </div>
        </div>
      )}

      {/* ── Xシェアボタン ── */}
      <div className="px-5 mb-3">
        <button
          onClick={handleShare}
          className="w-full bg-black text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3
            border border-white/10 active:scale-[0.98] transition-all duration-150"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.26 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span>
            「{typeData.nickname}」女としてシェアする
          </span>
        </button>
        {shareVisible && (
          <p className="text-center text-[#4a9e6e] text-xs mt-2 animate-fade-in-up">
            ✓ Xが開きました。投稿してくれ、戦友。
          </p>
        )}
      </div>

      {/* ── Note読むボタン ── */}
      <div className="px-5 mb-3">
        <a
          href={NOTE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#243040] border border-[#c9a04e]/20
            text-[#c9a04e] font-bold py-4 rounded-2xl active:scale-[0.98] transition-all duration-150"
        >
          <span>📖</span>
          <span>漢の保健室 Note を読む</span>
        </a>
      </div>

      {/* ── もう一度診断する ── */}
      <div className="px-5 pt-2">
        <button
          onClick={handleRetry}
          className="w-full text-[#f5f0e8]/30 text-sm py-3 hover:text-[#f5f0e8]/55
            transition-colors duration-200"
        >
          もう一度診断する
        </button>
      </div>

      {/* ── フッタートーク ── */}
      <div className="px-5 pt-4 pb-2 text-center">
        <p className="text-[#f5f0e8]/20 text-xs leading-relaxed">
          ほら、傷口に絆創膏を貼っておいたぞ。
          <br />
          ボロボロになっても、また貼り合おうぜ。
          <br />
          <span className="text-[#c9a04e]/30">― 漢保（オトコタモツ）</span>
        </p>
      </div>
    </div>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────

function SectionBlock({
  title,
  items,
  color,
}: {
  title: string;
  items: string[];
  color: string;
}) {
  return (
    <div className="bg-[#1e2d3d] border border-[#c9a04e]/10 rounded-2xl p-4">
      <p className="text-xs font-bold tracking-wide mb-3" style={{ color }}>
        {title}
      </p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: color }} />
            <span className="text-[#f5f0e8]/70 text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SmallBlock({
  title,
  items,
  color,
}: {
  title: string;
  items: string[];
  color: string;
}) {
  return (
    <div className="bg-[#1e2d3d] border border-[#c9a04e]/10 rounded-2xl p-3">
      <p className="text-xs font-bold mb-2" style={{ color }}>
        {title}
      </p>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="text-[#f5f0e8]/60 text-xs leading-relaxed">
            · {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function getElementReading(el: string): string {
  const map: Record<string, string> = {
    木: 'もく',
    火: 'か',
    土: 'ど',
    金: 'こん',
    水: 'すい',
  };
  return map[el] ?? '';
}
