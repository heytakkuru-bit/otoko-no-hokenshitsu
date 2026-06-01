'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ResultPage({ params }: { params: { type: string } }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/diagnosis/result/${params.type}`);
  }, [params.type, router]);

  return null;
}
