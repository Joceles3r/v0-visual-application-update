import { type NextRequest, NextResponse } from "next/server"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"

// Route de secours pour accéder au dashboard admin
// Utilisez cette route en cas d'urgence pour vous redonner le rôle admin
export async function POST(request: NextRequest) {
  try {
    const { email, secret } = await request.json()

    // Code secret de sécurité - À changer après utilisation
    const EMERGENCY_SECRET = process.env.EMERGENCY_ADMIN_SECRET || "VISUAL-EMERGENCY-2025"

    if (secret !== EMERGENCY_SECRET) {
      return NextResponse.json({ error: "Code secret invalide" }, { status: 403 })
    }

    const supabase = getSupabaseBrowserClient()

    if (!supabase) {
      return NextResponse.json({ error: "Service de base de données non disponible" }, { status: 503 })
    }

    // Mettre à jour le rôle de l'utilisateur spécifié en admin
    const { data, error } = await supabase.from("users").update({ role: "admin" }).eq("email", email).select()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    if (!data || data.length === 0) {
      return NextResponse.json({ error: "Utilisateur non trouvé" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      message: `Rôle admin accordé à ${email}`,
      user: data[0],
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
