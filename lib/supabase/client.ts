let supabaseClient: any = null

export async function getSupabaseBrowserClientAsync(): Promise<any> {
  // Check if we're in a browser environment
  if (typeof window === "undefined") {
    return null
  }

  // Check if environment variables are available
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("[v0] Supabase environment variables not configured")
    return null
  }

  // Create singleton client with dynamic import
  if (!supabaseClient) {
    try {
      const { createClient } = await import("@supabase/supabase-js")
      supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
        },
      })
    } catch (error) {
      console.warn("[v0] Failed to load Supabase client:", error)
      return null
    }
  }

  return supabaseClient
}

export function getSupabaseBrowserClient(): any {
  // Return cached client if available
  if (supabaseClient) {
    return supabaseClient
  }

  // In v0 preview, return null (async version should be used)
  // In production with proper env vars, initialize synchronously
  if (typeof window === "undefined") {
    return null
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    return null
  }

  // Try dynamic import for production
  getSupabaseBrowserClientAsync().catch(() => {})

  return null // Return null for first call, client will be available on subsequent calls
}

// Alias for compatibility
export { getSupabaseBrowserClient as createBrowserClient }
