import { siteConfig } from "@/config/site"
import { ThemeProvider } from "@/components/providers/theme-provider"

import "@/styles/globals.css"

import type { Metadata } from "next"
import { inter } from "@/public/fonts/font"
import NextTopLoader from "nextjs-toploader"

import { QueryProvider } from "@/components/providers/query-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#0ea5e9" />
        <QueryProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
