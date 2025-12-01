"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { joinWaitlist } from "@/app/actions" // Uncomment for production
import { CheckCircle, Loader2, AlertCircle } from "lucide-react"

interface WaitlistFormProps {
  variant?: "default" | "inline"
}

interface FieldError {
  name?: string
  email?: string
  company?: string
  phone?: string
  organizationType?: string
  preferredDate?: string
  preferredTime?: string
}

const FREE_EMAIL_PROVIDERS = new Set([
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
])

const TIME_SLOTS = [
  { value: "", label: "Select preferred time" },
  { value: "morning", label: "Morning (9am - 12pm)" },
  { value: "afternoon", label: "Afternoon (12pm - 5pm)" },
  { value: "flexible", label: "Flexible / No preference" },
]

export function WaitlistForm({ variant = "default" }: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [organizationType, setOrganizationType] = useState("")
  const [preferredDate, setPreferredDate] = useState("")
  const [preferredTime, setPreferredTime] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [fieldErrors, setFieldErrors] = useState<FieldError>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  // Validation functions
  const validateName = (value: string): string | undefined => {
    if (!value.trim()) return "Name is required"
    if (value.trim().length < 2) return "Name must be at least 2 characters"
    if (/\d/.test(value)) return "Name should not contain numbers"
    return undefined
  }

  const validateEmail = (value: string): string | undefined => {
    if (!value.trim()) return "Email is required"
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) return "Please enter a valid email address"
    const domain = value.split("@")[1]?.toLowerCase()
    if (domain && FREE_EMAIL_PROVIDERS.has(domain)) {
      return "Please use a work email address"
    }
    return undefined
  }

  const validateCompany = (value: string): string | undefined => {
    if (!value.trim()) return "Company is required"
    if (value.trim().length < 2) return "Company name must be at least 2 characters"
    return undefined
  }

  const validatePhone = (value: string): string | undefined => {
    if (!value.trim()) return undefined // Phone is optional
    // Remove all non-digit characters for validation
    const digits = value.replace(/\D/g, "")
    if (digits.length < 10) return "Phone number must have at least 10 digits"
    if (digits.length > 15) return "Phone number is too long"
    return undefined
  }

  const validateOrganizationType = (value: string): string | undefined => {
    if (!value) return "Please select an organization type"
    return undefined
  }

  const validatePreferredDate = (value: string): string | undefined => {
    if (!value) return undefined // Date is optional
    const selectedDate = new Date(value)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (selectedDate < today) return "Please select a future date"
    // Check if date is within 90 days
    const maxDate = new Date()
    maxDate.setDate(maxDate.getDate() + 90)
    if (selectedDate > maxDate) return "Please select a date within the next 90 days"
    return undefined
  }

  // Format phone number as user types
  const formatPhoneNumber = (value: string): string => {
    const digits = value.replace(/\D/g, "")
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
    if (digits.length <= 10) return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
    return `+${digits.slice(0, digits.length - 10)} (${digits.slice(-10, -7)}) ${digits.slice(-7, -4)}-${digits.slice(-4)}`
  }

  const handleBlur = useCallback((field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }))
  }, [])

  const validateField = useCallback((field: string, value: string) => {
    let error: string | undefined
    switch (field) {
      case "name":
        error = validateName(value)
        break
      case "email":
        error = validateEmail(value)
        break
      case "company":
        error = validateCompany(value)
        break
      case "phone":
        error = validatePhone(value)
        break
      case "organizationType":
        error = validateOrganizationType(value)
        break
      case "preferredDate":
        error = validatePreferredDate(value)
        break
    }
    setFieldErrors(prev => ({ ...prev, [field]: error }))
    return error
  }, [])

  const validateAllFields = (): boolean => {
    const errors: FieldError = {
      name: validateName(name),
      email: validateEmail(email),
      company: validateCompany(company),
      phone: validatePhone(phone),
      organizationType: validateOrganizationType(organizationType),
      preferredDate: validatePreferredDate(preferredDate),
    }
    setFieldErrors(errors)
    setTouched({ name: true, email: true, company: true, phone: true, organizationType: true, preferredDate: true })
    return !Object.values(errors).some(error => error !== undefined)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")

    if (!validateAllFields()) {
      setStatus("error")
      setErrorMessage("Please fix the errors above before submitting.")
      return
    }

    setStatus("loading")

    // === DEMO MODE (Cloudflare static export) ===
    // Simulate success without backend call
    await new Promise(resolve => setTimeout(resolve, 500))
    setStatus("success")
    setEmail("")
    setName("")
    setCompany("")
    setPhone("")
    setOrganizationType("")
    setPreferredDate("")
    setPreferredTime("")
    setFieldErrors({})
    setTouched({})

    // === PRODUCTION MODE (Vercel) ===
    // Uncomment below and comment out demo mode above for production
    /*
    try {
      const result = await joinWaitlist({
        email,
        name,
        company,
        phone,
        organizationType,
        preferredDate: preferredDate || null,
        preferredTime: preferredTime || null,
      })

      if (result.success) {
        setStatus("success")
        setEmail("")
        setName("")
        setCompany("")
        setPhone("")
        setOrganizationType("")
        setPreferredDate("")
        setPreferredTime("")
        setFieldErrors({})
        setTouched({})
      } else {
        setStatus("error")
        setErrorMessage(result.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again.")
    }
    */
  }

  const FieldErrorMessage = ({ error }: { error?: string }) => {
    if (!error) return null
    return (
      <div className="flex items-center gap-1.5 mt-1 text-destructive text-xs">
        <AlertCircle className="h-3 w-3" />
        <span>{error}</span>
      </div>
    )
  }

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split("T")[0]
  }

  // Get maximum date (90 days from now)
  const getMaxDate = () => {
    const maxDate = new Date()
    maxDate.setDate(maxDate.getDate() + 90)
    return maxDate.toISOString().split("T")[0]
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border bg-card p-6">
        <div className="mb-3 inline-flex rounded-full bg-green-500/10 p-2">
          <CheckCircle className="h-5 w-5 text-green-500" />
        </div>
        <h3 className="mb-1 font-semibold">Request received!</h3>
        <p className="text-muted-foreground text-sm">We'll be in touch soon to schedule your demo.</p>
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
        <Button type="submit" className="rounded-full" disabled={status === "loading"}>
          {status === "loading" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Request Demo"
          )}
        </Button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="space-y-1">
        <label htmlFor="name" className="font-medium text-sm">
          Full Name *
        </label>
        <Input
          id="name"
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            if (touched.name) validateField("name", e.target.value)
          }}
          onBlur={() => {
            handleBlur("name")
            validateField("name", name)
          }}
          disabled={status === "loading"}
          className={touched.name && fieldErrors.name ? "border-destructive" : ""}
        />
        {touched.name && <FieldErrorMessage error={fieldErrors.name} />}
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="font-medium text-sm">
          Work Email *
        </label>
        <Input
          id="email"
          type="email"
          placeholder="john@company.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (touched.email) validateField("email", e.target.value)
          }}
          onBlur={() => {
            handleBlur("email")
            validateField("email", email)
          }}
          disabled={status === "loading"}
          className={touched.email && fieldErrors.email ? "border-destructive" : ""}
        />
        {touched.email && <FieldErrorMessage error={fieldErrors.email} />}
      </div>

      <div className="space-y-1">
        <label htmlFor="company" className="font-medium text-sm">
          Company *
        </label>
        <Input
          id="company"
          type="text"
          placeholder="Acme Insurance"
          value={company}
          onChange={(e) => {
            setCompany(e.target.value)
            if (touched.company) validateField("company", e.target.value)
          }}
          onBlur={() => {
            handleBlur("company")
            validateField("company", company)
          }}
          disabled={status === "loading"}
          className={touched.company && fieldErrors.company ? "border-destructive" : ""}
        />
        {touched.company && <FieldErrorMessage error={fieldErrors.company} />}
      </div>

      <div className="space-y-1">
        <label htmlFor="phone" className="font-medium text-sm">
          Phone Number
        </label>
        <Input
          id="phone"
          type="tel"
          placeholder="(555) 123-4567"
          value={phone}
          onChange={(e) => {
            const formatted = formatPhoneNumber(e.target.value)
            setPhone(formatted)
            if (touched.phone) validateField("phone", formatted)
          }}
          onBlur={() => {
            handleBlur("phone")
            validateField("phone", phone)
          }}
          disabled={status === "loading"}
          className={touched.phone && fieldErrors.phone ? "border-destructive" : ""}
        />
        {touched.phone && <FieldErrorMessage error={fieldErrors.phone} />}
      </div>

      <div className="space-y-1">
        <label htmlFor="organizationType" className="font-medium text-sm">
          Organization Type *
        </label>
        <select
          id="organizationType"
          value={organizationType}
          onChange={(e) => {
            setOrganizationType(e.target.value)
            if (touched.organizationType) validateField("organizationType", e.target.value)
          }}
          onBlur={() => {
            handleBlur("organizationType")
            validateField("organizationType", organizationType)
          }}
          disabled={status === "loading"}
          className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
            touched.organizationType && fieldErrors.organizationType ? "border-destructive" : "border-input"
          }`}
        >
          <option value="">Select organization type</option>
          <option value="Insurance Carrier">Insurance Carrier</option>
          <option value="Insurance Broker/Agent">Insurance Broker/Agent</option>
          <option value="MGA">MGA (Managing General Agent)</option>
          <option value="Reinsurer">Reinsurer</option>
          <option value="Other">Other</option>
        </select>
        {touched.organizationType && <FieldErrorMessage error={fieldErrors.organizationType} />}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <label htmlFor="preferredDate" className="font-medium text-sm">
            Preferred Date
          </label>
          <Input
            id="preferredDate"
            type="date"
            value={preferredDate}
            onChange={(e) => {
              setPreferredDate(e.target.value)
              if (touched.preferredDate) validateField("preferredDate", e.target.value)
            }}
            onBlur={() => {
              handleBlur("preferredDate")
              validateField("preferredDate", preferredDate)
            }}
            min={getMinDate()}
            max={getMaxDate()}
            disabled={status === "loading"}
            className={touched.preferredDate && fieldErrors.preferredDate ? "border-destructive" : ""}
          />
          {touched.preferredDate && <FieldErrorMessage error={fieldErrors.preferredDate} />}
        </div>

        <div className="space-y-1">
          <label htmlFor="preferredTime" className="font-medium text-sm">
            Preferred Time
          </label>
          <select
            id="preferredTime"
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            disabled={status === "loading"}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {TIME_SLOTS.map((slot) => (
              <option key={slot.value} value={slot.value}>
                {slot.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {status === "error" && errorMessage && (
        <div className="rounded-md bg-destructive/10 p-2.5 text-destructive text-sm">{errorMessage}</div>
      )}

      <Button type="submit" className="w-full mt-2 rounded-full" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Request Demo"
        )}
      </Button>

      <div className="relative flex items-center justify-center gap-3 my-4">
        <div className="h-px flex-1 bg-border" />
        <span className="text-sm text-muted-foreground">or</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <a
        href="https://calendly.com/karly-askcooper/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-2.5 px-4 rounded-full border border-input bg-background text-sm font-medium hover:bg-muted transition-colors"
      >
        Book a time directly
      </a>
    </form>
  )
}
