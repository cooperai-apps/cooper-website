"use server"

import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function joinWaitlist(data: {
  email: string
  name: string
  company: string
  phone: string
  organizationType: string
  preferredDate?: string | null
  preferredTime?: string | null
}) {
  try {
    // Check if environment variables are set
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error("Missing Supabase credentials:", {
        hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      })
      return {
        success: false,
        error: "Configuration error. Please contact support.",
      }
    }

    const cookieStore = await cookies()

    const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
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
      preferred_date: data.preferredDate || null,
      preferred_time: data.preferredTime || null,
    })

    if (error) {
      // Check if it's a duplicate email error
      if (error.code === "23505") {
        return {
          success: false,
          error: "This email is already on the waitlist!",
        }
      }

      console.error("Waitlist signup error:", {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint,
      })
      return {
        success: false,
        error: `Failed to join waitlist: ${error.message}`,
      }
    }

    return { success: true }
  } catch (error) {
    console.error("Waitlist signup exception:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}
