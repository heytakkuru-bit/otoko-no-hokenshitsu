export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';

export async function POST(req: NextRequest) {
  try {
    const { sessionId, linkType, resultType } = await req.json();

    if (!linkType) {
      return NextResponse.json({ error: 'Missing linkType' }, { status: 400 });
    }

    const { error } = await supabaseServer.from('affiliate_clicks').insert({
      session_id: sessionId ?? null,
      link_type: linkType,
      result_type: resultType ?? null,
      clicked_at: new Date().toISOString(),
    });

    if (error) {
      console.error('affiliate_clicks insert error:', error);
      return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('click route error:', e);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
