import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '漢の保健室 ― 16漢パーソナリティ診断',
  description:
    'あんた、自分がどんな漢か、知ってるか？漢保（オトコタモツ）が全16タイプの漢を診断する。十人十漢 — 漢の数だけ生き方がある。',
  openGraph: {
    title: '漢の保健室 ― 16漢パーソナリティ診断',
    description: 'あんた、自分がどんな漢か、知ってるか？',
  },
};

export default function DiagnosisLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#1a2332] flex flex-col max-w-md mx-auto relative overflow-x-hidden">
      {children}
    </div>
  );
}
