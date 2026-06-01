export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';

export async function POST(req: NextRequest) {
  try {
    const { sessionId, answers, resultType, startedAt, userAgent } = await req.json();

    if (!sessionId || !resultType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { error: sessionError } = await supabaseServer.from('quiz_sessions').upsert({
      id: sessionId,
      started_at: startedAt ?? new Date().toISOString(),
      completed_at: new Date().toISOString(),
      result_type: resultType,
      user_agent: typeof userAgent === 'string' ? userAgent.slice(0, 500) : null,
    });

    if (sessionError) {
      console.error('quiz_sessions upsert error:', sessionError);
      return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }

    if (Array.isArray(answers) && answers.length > 0) {
      const rows = answers.map((a: { questionId: number; answerValue: string }) => ({
        session_id: sessionId,
        question_id: a.questionId,
        answer_value: a.answerValue,
      }));
      const { error: answersError } = await supabaseServer.from('quiz_answers').insert(rows);
      if (answersError) console.error('quiz_answers insert error:', answersError);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('submit route error:', e);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
