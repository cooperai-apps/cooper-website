"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { joinWaitlist } from "@/app/actions"
import { CheckCircle, Loader2 } from "lucide-react"

interface WaitlistFormProps {
  variant?: "default" | "inline"
}

const FREE_EMAIL_PROVIDERS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
  "protonmail.com",
  "mail.com",
  "zoho.com",
  "yandex.com",
  "gmx.com",
  "live.com",
  "msn.com",
  "me.com",
  "mac.com",
]

export function WaitlistForm({ variant = "default" }: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [organizationType, setOrganizationType] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const isWorkEmail = (email: string): boolean => {
    const domain = email.split("@")[1]?.toLowerCase()
    return domain ? !FREE_EMAIL_PROVIDERS.includes(domain) : false
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    if (!isWorkEmail(email)) {
      setStatus("error")
      setErrorMessage("Please use a work email address, not a personal email.")
      return
    }

    try {
      const result = await joinWaitlist({ email, name, company, phone, organizationType })

      if (result.success) {
        setStatus("success")
        setEmail("")
        setName("")
        setCompany("")
        setPhone("")
        setOrganizationType("")
      } else {
        setStatus("error")
        setErrorMessage(result.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border bg-card p-5">
        <div className="mb-3 inline-flex rounded-full bg-green-500/10 p-2">
          <CheckCircle className="h-5 w-5 text-green-500" />
        </div>
        <h3 className="mb-1 font-semibold">You're on the list!</h3>
        <p className="text-muted-foreground text-sm">We'll get in touch soon.</p>
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="mx-auto flex max-w-md gap-2">
        <Input
          type="email"
          placeholder="Enter your work email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "loading"}
          className="flex-1"
        />
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Joining...
            </>
          ) : (
            "Join Waitlist"
          )}
        </Button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="space-y-1.5">
        <label htmlFor="name" className="font-medium text-sm">
          Full Name *
        </label>
        <Input
          id="name"
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={status === "loading"}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="font-medium text-sm">
          Work Email *
        </label>
        <Input
          id="email"
          type="email"
          placeholder="john@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "loading"}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="company" className="font-medium text-sm">
          Company *
        </label>
        <Input
          id="company"
          type="text"
          placeholder="Acme Insurance"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
          disabled={status === "loading"}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="phone" className="font-medium text-sm">
          Phone Number
        </label>
        <Input
          id="phone"
          type="tel"
          placeholder="+1 (555) 123-4567"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={status === "loading"}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="organizationType" className="font-medium text-sm">
          Organization Type *
        </label>
        <select
          id="organizationType"
          value={organizationType}
          onChange={(e) => setOrganizationType(e.target.value)}
          required
          disabled={status === "loading"}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="">Select organization type</option>
          <option value="Insurance Carrier">Insurance Carrier</option>
          <option value="Insurance Broker/Agent">Insurance Broker/Agent</option>
          <option value="MGA">MGA (Managing General Agent)</option>
          <option value="Reinsurer">Reinsurer</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {status === "error" && (
        <div className="rounded-md bg-destructive/10 p-2.5 text-destructive text-sm">{errorMessage}</div>
      )}

      <Button type="submit" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Joining...
          </>
        ) : (
          "Join Waitlist"
        )}
      </Button>

      <p className="text-muted-foreground text-xs text-center">By joining, you agree to receive updates.</p>
    </form>
  )
}
