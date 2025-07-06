"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingCart, User, Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useCart } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { items } = useCart()
  const { user } = useAuth()
  const scrollY = useScrollAnimation()

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  useEffect(() => {
    setIsScrolled(scrollY > 50)
  }, [scrollY])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-all duration-300 group-hover:scale-110 hover-glow">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-red-600 group-hover:text-red-700 transition-colors">
                Wing's Dingsum
              </h1>
              <p className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors">Mentai Tobiko</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {[
              { href: "/", label: " Beranda" },
              { href: "/products", label: "Produk" },
              { href: "/about", label: "Tentang" },
              { href: "/contact", label: "Kontak" },
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-red-600 transition-all duration-300 text-sm lg:text-base relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-2 flex-1 max-w-md mx-8">
            <div className="relative flex-1 group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-red-600 transition-colors" />
              <Input
                type="search"
                placeholder="Search dim sum..."
                className="pl-10 border-gray-300 focus:border-red-500 transition-all duration-300 focus:shadow-md"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link
              href="/account"
              className="text-gray-700 hover:text-red-600 transition-all duration-300 p-2 rounded-full hover:bg-red-50 group"
            >
              <User className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            </Link>

            <Link
              href="/cart"
              className="relative text-gray-700 hover:text-red-600 transition-all duration-300 p-2 rounded-full hover:bg-red-50 group"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
              {itemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-red-600 text-white text-xs min-w-[1.25rem] h-5 flex items-center justify-center animate-bounce-in cart-bounce">
                  {itemCount}
                </Badge>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden p-2 hover:bg-red-50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-5 h-5">
                <Menu
                  className={`w-5 h-5 absolute transition-all duration-300 ${isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
                />
                <X
                  className={`w-5 h-5 absolute transition-all duration-300 ${isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 py-4 border-t" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col space-y-4">
            {[
              { href: "/", label: "Beranda" },
              { href: "/products", label: "Produk" },
              { href: "/about", label: "Tentang" },
              { href: "/contact", label: "Kontak" },
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-red-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-red-50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Input
                type="search"
                placeholder="Search dim sum..."
                className="border-gray-300 focus:border-red-500 transition-all duration-300"
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
