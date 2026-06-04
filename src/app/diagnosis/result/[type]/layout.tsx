import type { Metadata } from 'next';
import { TYPE_MAP } from '@/lib/otoko/types';

const BASE_URL = 'https://otoko-no-hokenshitsu.vercel.app';

export async function generateMetadata({
  params,
}: {
  params: { type: string };
}): Promise<Metadata> {
  const typeData = TYPE_MAP.get(params.type);

  const title = typeData
    ? `私は「${typeData.nickname}（${typeData.formalName}）」漢でした！`
    : '16漢診断 | 漢の保健室';

  const description = typeData
    ? `${typeData.catchphrase} ｜ 漢の保健室 #十人十漢`
    : '君の本質を見極める16タイプ診断。漢の保健室。';

  const imageUrl = `${BASE_URL}/diagnosis/result/${params.type}/opengraph-image`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/diagnosis/result/${params.type}`,
      siteName: '漢の保健室',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: typeData?.nickname ?? '16漢診断' }],
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
