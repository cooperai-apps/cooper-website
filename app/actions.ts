"use server"

import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function joinWaitlist(data: {
  email: string
  name: string
  company: string
  phone: string
  organizationType: string
}) {
  try {
    const cookieStore = await cookies()

    const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        },
      },
    })

    const { error } = await supabase.from("waitlist").insert({
      email: data.email.toLowerCase().trim(),
      name: data.name.trim(),
      company: data.company.trim(),
      phone: data.phone.trim() || null,
      organization_type: data.organizationType.trim(),
    })

    if (error) {
      // Check if it's a duplicate email error
      if (error.code === "23505") {
        return {
          success: false,
          error: "This email is already on the waitlist!",
        }
      }

      console.error("[v0] Waitlist signup error:", error)
      return {
        success: false,
        error: "Failed to join waitlist. Please try again.",
      }
    }

    return { success: true }
  } catch (error) {
    console.error("[v0] Waitlist signup error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}
