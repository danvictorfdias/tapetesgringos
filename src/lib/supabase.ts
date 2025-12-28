import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables - using stub client');
}

const createStubClient = () => {
  return {
    from: () => ({
      insert: () => Promise.resolve({ data: null, error: null }),
      select: () => ({
        eq: () => ({
          single: () => Promise.resolve({ data: null, error: null }),
          maybeSingle: () => Promise.resolve({ data: null, error: null }),
        }),
      }),
    }),
  } as any;
};

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : createStubClient();
