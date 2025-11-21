"use server"

import { getSupabaseServerClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function updateUserRole(userId: string, newRole: string) {
  const supabase = await getSupabaseServerClient()

  const { error } = await supabase.from("users").update({ role: newRole }).eq("id", userId)

  if (error) throw error

  revalidatePath("/admin")
  return { success: true }
}

export async function updateUserVisupoints(userId: string, visupoints: number) {
  const supabase = await getSupabaseServerClient()

  const { error } = await supabase.from("users").update({ visupoints }).eq("id", userId)

  if (error) throw error

  revalidatePath("/admin")
  return { success: true }
}

export async function deleteVideo(videoId: string) {
  const supabase = await getSupabaseServerClient()

  const { error } = await supabase.from("videos").delete().eq("id", videoId)

  if (error) throw error

  revalidatePath("/admin")
  return { success: true }
}

export async function deleteComment(commentId: string) {
  const supabase = await getSupabaseServerClient()

  const { error } = await supabase.from("comments").delete().eq("id", commentId)

  if (error) throw error

  revalidatePath("/admin")
  return { success: true }
}

export async function updateVideoStatus(videoId: string, status: string) {
  const supabase = await getSupabaseServerClient()

  const { error } = await supabase.from("videos").update({ status }).eq("id", videoId)

  if (error) throw error

  revalidatePath("/admin")
  return { success: true }
}
