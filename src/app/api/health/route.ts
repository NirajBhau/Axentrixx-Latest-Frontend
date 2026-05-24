import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export async function GET() {
  try {
    // Perform a lightweight query to ensure Supabase stays active
    const { data, error } = await supabase
      .from('Contact')
      .select('id')
      .limit(1);

    if (error) {
      console.error('Supabase ping error:', error);
      return NextResponse.json({ status: 'unhealthy', error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      status: 'healthy',
      database: 'connected',
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Health check exception:', error);
    return NextResponse.json({ status: 'error', message: error.message }, { status: 500 });
  }
}
