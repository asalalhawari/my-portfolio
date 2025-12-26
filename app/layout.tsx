import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Asal AL-Hawari | Full Stack Developer",
  description:
    "Professional portfolio of Asal AL-Hawari - Full Stack Web Developer specializing in React, Laravel, and modern web technologies.",
  keywords: ["web developer", "full stack", "laravel", "php", "javascript", "react", "portfolio", "asal al-hawari"],
  authors: [{ name: "Asal AL-Hawari" }],
  openGraph: {
    title: "Asal AL-Hawari | Full Stack Developer",
    description: "Professional portfolio showcasing web development projects and services",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#6366f1",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
