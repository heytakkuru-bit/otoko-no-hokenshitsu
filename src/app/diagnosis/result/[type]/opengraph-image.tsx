import { ImageResponse } from 'next/og';
import { TYPE_MAP } from '@/lib/otoko/types';

export const runtime = 'edge';
export const alt = '漢の保健室 — 16漢診断';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const BASE_URL = 'https://otoko-no-hokenshitsu.vercel.app';

async function loadFont(weight: 400 | 700, text: string): Promise<ArrayBuffer> {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@${weight}&text=${encodeURIComponent(text)}&display=swap`,
    {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    }
  ).then((r) => r.text());

  const fontUrl = css.match(/src: url\(([^)]+)\)/)?.[1];
  if (!fontUrl) throw new Error(`Font URL not found (weight=${weight})`);
  return fetch(fontUrl).then((r) => r.arrayBuffer());
}

export default async function Image({ params }: { params: { type: string } }) {
  const typeData = TYPE_MAP.get(params.type);

  const LABEL = '16漢診断';
  const FOOTER = '漢の保健室';

  const boldText = typeData ? `${LABEL}${typeData.nickname}` : LABEL;
  const regularText = typeData
    ? `${FOOTER}${typeData.formalName}${typeData.catchphrase}${typeData.axisLabel}`
    : FOOTER;

  // フォントロード失敗時はシステムフォントで続行
  let fonts: { name: string; data: ArrayBuffer; weight: 400 | 700; style: 'normal' }[] = [];
  try {
    const [fontBold, fontRegular] = await Promise.all([
      loadFont(700, boldText),
      loadFont(400, regularText),
    ]);
    fonts = [
      { name: 'Noto Sans JP', data: fontBold, weight: 700, style: 'normal' },
      { name: 'Noto Sans JP', data: fontRegular, weight: 400, style: 'normal' },
    ];
  } catch {
    // ignore
  }

  if (!typeData) {
    return new ImageResponse(
      (
        <div
          style={{
            background: '#0a0a0a',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: '#C8A96E', fontSize: 56, fontWeight: 700 }}>{LABEL}</span>
        </div>
      ),
      { ...size, fonts }
    );
  }

  // キャラ画像をArrayBufferとして取得し、data URLに変換（fetch失敗時はnull）
  let charImageSrc: string | null = null;
  try {
    const res = await fetch(`${BASE_URL}/characters/${typeData.characterImageFile}`);
    if (res.ok) {
      const buf = await res.arrayBuffer();
      const bytes = new Uint8Array(buf);
      let binary = '';
      for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
      charImageSrc = `data:image/png;base64,${btoa(binary)}`;
    }
  } catch {
    // ignore
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* ── ヘッダー ── */}
        <div
          style={{
            display: 'flex',
            padding: '36px 56px 0',
            color: 'rgba(201,160,78,0.55)',
            fontSize: 17,
            fontWeight: 400,
            letterSpacing: '0.3em',
          }}
        >
          {LABEL}
        </div>

        {/* ── ボディ ── */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            padding: '20px 56px 40px',
            gap: 56,
          }}
        >
          {/* キャラ画像（取得できた場合のみ表示） */}
          {charImageSrc && (
            <div
              style={{
                width: 380,
                height: 490,
                flexShrink: 0,
                display: 'flex',
                overflow: 'hidden',
                borderRadius: 16,
                border: '1px solid rgba(201,160,78,0.2)',
                background: '#111111',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={charImageSrc}
                width={380}
                height={490}
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
          )}

          {/* テキスト */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div
              style={{
                color: 'rgba(201,160,78,0.5)',
                fontSize: 16,
                fontWeight: 400,
                letterSpacing: '0.2em',
                marginBottom: 16,
              }}
            >
              {typeData.axisLabel}
            </div>
            <div
              style={{
                color: '#C8A96E',
                fontSize: 88,
                fontWeight: 700,
                lineHeight: 1.05,
                marginBottom: 20,
              }}
            >
              {typeData.nickname}
            </div>
            <div
              style={{
                color: 'rgba(255,255,255,0.72)',
                fontSize: 27,
                fontWeight: 400,
                letterSpacing: '0.1em',
                marginBottom: 16,
              }}
            >
              {typeData.formalName}
            </div>
            <div
              style={{
                color: 'rgba(255,255,255,0.38)',
                fontSize: 20,
                fontWeight: 400,
                lineHeight: 1.65,
              }}
            >
              {typeData.catchphrase}
            </div>
          </div>
        </div>

        {/* ── フッター ── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '0 56px 28px',
            color: 'rgba(255,255,255,0.14)',
            fontSize: 14,
            fontWeight: 400,
            letterSpacing: '0.25em',
          }}
        >
          {FOOTER}
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
