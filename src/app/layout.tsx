import "./globals.css"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ryan Johnson",
  description: "Personal portfolio website of Ryan Johnson, a full-stack web developer doing CS @ SJSU",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}