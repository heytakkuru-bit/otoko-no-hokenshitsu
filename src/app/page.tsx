import Link from 'next/link';
import Image from 'next/image';

export default function RootPage() {
  const TYPES = [
    '隊長', '不死身', '一匹狼', '古強者',
    '兄貴', 'お父さん', '軍師', '癒し系',
    '博士', '参謀', '策士', '職人',
    '風来坊', '発明家', 'ギャンブラー', '夢追い人',
  ];

  return (
    <main className="bg-[#0a0a0a] text-white">

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative h-[100svh] overflow-hidden">
        <Image
          src="/characters/group.png"
          alt="16漢"
          fill
          className="object-cover object-top"
          priority
        />

        {/* top fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
        {/* bottom fade — taller for content space */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />

        {/* content */}
        <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-16 px-6">
          <p
            className="text-[#C8A96E] font-bold mb-3"
            style={{ fontSize: '10px', letterSpacing: '0.5em' }}
          >
            十 人 十 漢
          </p>
          <h1 className="text-5xl font-black tracking-tight leading-none mb-5">
            漢の保健室
          </h1>
          <p className="text-white/50 text-sm leading-loose mb-10">
            16の漢が、君の本質を見極める。<br />
            君はどの漢だ？
          </p>
          <Link
            href="/diagnosis"
            className="bg-[#C8A96E] text-[#0a0a0a] font-black px-10 py-4 rounded-full text-sm tracking-widest active:scale-95 transition-transform duration-150"
          >
            診断を受ける
          </Link>
          <p className="text-white/25 text-[10px] mt-4 tracking-widest">無料 · 全16問 · 約3分</p>
        </div>
      </section>

      {/* ── CONCEPT ─────────────────────────────────────────── */}
      <section className="px-8 py-24">
        <p
          className="text-[#C8A96E] font-bold mb-8"
          style={{ fontSize: '10px', letterSpacing: '0.4em' }}
        >
          ABOUT
        </p>
        <h2 className="text-4xl font-black leading-tight mb-8">
          十人十漢。<br />
          君の中にある<br />
          漢の本質を診る。
        </h2>
        <p className="text-white/40 text-sm leading-loose">
          MBTIをベースに独自設計した16タイプ診断。
          心理学と五行思想が交差するその結果は、
          君の強さと傷の両方を照らし出す。
        </p>
      </section>

      {/* ── 16 TYPES ────────────────────────────────────────── */}
      <section className="px-6 pb-24 border-t border-white/5 pt-20">
        <p
          className="text-[#C8A96E] font-bold mb-6 px-2"
          style={{ fontSize: '10px', letterSpacing: '0.4em' }}
        >
          16 TYPES
        </p>
        <h2 className="text-3xl font-black mb-3 px-2">君はどの漢だ？</h2>
        <p className="text-white/30 text-sm mb-10 px-2">全16タイプの中に、君がいる。</p>

        <div className="grid grid-cols-4 gap-2 mb-10">
          {TYPES.map((name) => (
            <div
              key={name}
              className="aspect-square bg-white/[0.04] border border-white/[0.08] rounded-2xl flex items-center justify-center"
            >
              <span className="text-[10px] text-white/40 font-bold text-center leading-tight px-1">
                {name}
              </span>
            </div>
          ))}
        </div>

        <Link
          href="/diagnosis"
          className="block w-full border border-[#C8A96E] text-[#C8A96E] text-center font-black py-4 rounded-2xl text-sm tracking-widest active:bg-[#C8A96E]/10 transition-colors duration-150"
        >
          診断スタート →
        </Link>
      </section>

      {/* ── ONNA LINK ───────────────────────────────────────── */}
      <section className="px-6 pb-24 border-t border-white/5 pt-20">
        <Link
          href="/onna"
          className="block bg-white/[0.04] border border-white/[0.1] rounded-3xl p-8 active:bg-white/[0.07] transition-colors duration-150"
        >
          <p
            className="text-[#C8A96E] font-bold mb-4"
            style={{ fontSize: '10px', letterSpacing: '0.4em' }}
          >
            FOR WOMEN
          </p>
          <h3 className="text-2xl font-black mb-2">16女診断</h3>
          <p className="text-white/40 text-sm mb-6 leading-relaxed">
            十人十女 ——<br />
            女性の方はこちらへ。
          </p>
          <div className="flex items-center justify-between">
            <span className="text-white/25 text-xs tracking-widest">16タイプ · 無料 · 約3分</span>
            <span className="text-[#C8A96E] font-black text-lg">→</span>
          </div>
        </Link>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-12 text-center">
        <p
          className="text-white/15 font-bold"
          style={{ fontSize: '10px', letterSpacing: '0.4em' }}
        >
          漢の保健室
        </p>
      </footer>

    </main>
  );
}
