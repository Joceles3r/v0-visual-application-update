// Stub for v0 environment - Supabase server client without actual @supabase/supabase-js dependency
// This allows the app to load in v0 without Supabase, while real deployment uses actual Supabase

export async function getSupabaseServerClient() {
  console.log("[v0] Using stub Supabase server client (Supabase not available in v0)")

  // Return a mock client that won't break the app
  return {
    auth: {
      getUser: async () => ({ data: { user: null }, error: null }),
      getSession: async () => ({ data: { session: null }, error: null }),
    },
    from: (table: string) => ({
      select: (columns: string) => ({
        eq: (column: string, value: any) => ({
          single: async () => ({ data: null, error: null }),
          then: async (fn: any) => fn({ data: null, error: null }),
        }),
        then: async (fn: any) => fn({ data: [], error: null }),
      }),
      insert: (data: any) => ({
        select: () => ({
          single: async () => ({ data: null, error: null }),
        }),
      }),
      update: (data: any) => ({
        eq: (column: string, value: any) => ({
          then: async (fn: any) => fn({ data: null, error: null }),
        }),
      }),
      delete: () => ({
        eq: (column: string, value: any) => ({
          then: async (fn: any) => fn({ data: null, error: null }),
        }),
      }),
    }),
  } as any
}

export { getSupabaseServerClient as createServerClient }
