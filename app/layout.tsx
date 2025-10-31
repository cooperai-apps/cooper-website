import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Assistant, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const assistant = Assistant({
  subsets: ["latin"],
  variable: "--font-assistant",
})

export const metadata: Metadata = {
  title: "Cooper AI - AI-Powered Insurance Assistant",
  description:
    "Cooper streamlines submissions, automates underwriting, and accelerates policy management for insurance professionals.",
  generator: 'v0.app',
  icons: {
    icon: '/cooper-flower-white.webp',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${assistant.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
