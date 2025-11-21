import { createServerClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 })
    }

    const supabase = await createServerClient()

    // Get user by email
    const { data: users, error: fetchError } = await supabase
      .from("users")
      .select("id, email, role")
      .eq("email", email)
      .single()

    if (fetchError || !users) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Update user role to admin
    const { error: updateError } = await supabase.from("users").update({ role: "admin" }).eq("id", users.id)

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: `User ${email} is now an admin!`,
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to update role",
      },
      { status: 500 },
    )
  }
}
