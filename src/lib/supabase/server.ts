import { createClient, SupabaseClient } from '@supabase/supabase-js';

let _client: SupabaseClient | null = null;

export function getSupabaseServer(): SupabaseClient {
  if (!_client) {
    _client = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_KEY!
    );
  }
  return _client;
}

// Backwards-compatible alias for existing imports
export const supabaseServer = new Proxy({} as SupabaseClient, {
  get(_, prop) {
    return (getSupabaseServer() as unknown as Record<string | symbol, unknown>)[prop];
  },
});
