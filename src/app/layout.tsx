import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"

import { cn } from "@/lib/utils"

import { ThemeProvider } from "@/components/theme-provider"

const gtAmerica = localFont({
  src: [
    {
      path: "../../public/fonts/GT America Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/GT America Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  weight: "400",
  variable: "--font-gtAmerica",
})

export const metadata: Metadata = {
  title: "exceed starter template",
  description: "this is a starter template for exceed",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(gtAmerica.className, gtAmerica.variable, "min-h-screen")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
