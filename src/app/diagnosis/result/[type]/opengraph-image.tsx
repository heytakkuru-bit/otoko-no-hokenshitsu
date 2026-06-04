import { ImageResponse } from 'next/og';
import { TYPE_MAP } from '@/lib/otoko/types';

export const runtime = 'edge';
export const alt = '漢の保健室 - 16漢診断';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const BASE_URL = 'https://otoko-no-hokenshitsu.vercel.app';

export default async function Image({ params }: { params: { type: string } }) {
  const typeData = TYPE_MAP.get(params.type);

  if (!typeData) {
    return new ImageResponse(
      (
        <div style={{ background: '#0a0a0a', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#C8A96E', fontSize: 48 }}>漢の保健室</span>
        </div>
      ),
      { ...size }
    );
  }

  const charImageUrl = `${BASE_URL}/characters/${typeData.slug}.png`;

  return new ImageResponse(
    (
      <div style={{ background: '#0a0a0a', width: '100%', height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '40px' }}>
        {/* キャラ画像 */}
        <div style={{ width: 380, height: 550, display: 'flex', flexShrink: 0, overflow: 'hidden', borderRadius: 16, border: '1px solid rgba(200,169,110,0.3)' }}>
          <img src={charImageUrl} width={380} height={550} style={{ objectFit: 'cover', objectPosition: 'top' }} />
        </div>
        {/* テキスト */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '0 48px' }}>
          <div style={{ color: 'rgba(200,169,110,0.6)', fontSize: 18, marginBottom: 24, letterSpacing: '0.3em' }}>16漢診断</div>
          <div style={{ color: '#C8A96E', fontSize: 80, fontWeight: 700, lineHeight: 1.1, marginBottom: 24 }}>{typeData.nickname}</div>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 28, marginBottom: 16 }}>{typeData.formalName}</div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 22, lineHeight: 1.6 }}>{typeData.catchphrase}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
