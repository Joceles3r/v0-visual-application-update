let createClient: any = null
const clientInstance: any = null
let supabaseAvailable = false

// Try to load Supabase dynamically
if (typeof window !== "undefined") {
  import("@supabase/supabase-js")
    .then((module) => {
      createClient = module.createClient
      supabaseAvailable = true
    })
    .catch((err) => {
      console.warn("[v0] Supabase module not available:", err.message)
    })
}

export function getSupabaseBrowserClient() {
  // In v0 environment, Supabase browser client is not available
  // All auth should be handled server-side via getSupabaseServerClient
  console.warn(
    "[v0] Browser Supabase client is disabled in v0 environment. Use getSupabaseServerClient for server-side operations.",
  )
  return null
}

// Alias for compatibility
export { getSupabaseBrowserClient as createBrowserClient }
