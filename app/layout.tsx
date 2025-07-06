import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CartProvider } from "@/contexts/cart-context"
import { AuthProvider } from "@/contexts/auth-context"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wing's Dingsum Mentai Tobiko",
  description: "Premium Japanese-style dim sum with mentai and tobiko",
  keywords: "dim sum, mentai, tobiko, japanese food, dumplings",
  authors: [{ name: "Wing's Dingsum" }],
  openGraph: {
    title: "Wing's Dingsum Mentai Tobiko",
    description: "Premium Japanese-style dim sum with mentai and tobiko",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
