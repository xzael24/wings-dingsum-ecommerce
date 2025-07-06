"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Gift, CheckCircle } from "lucide-react"
import { Instagram } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubscribed(true)
    setEmail("")
    setIsLoading(false)
  }

  return (
    <section className="py-20 bg-red-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-10 w-12 h-12 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="scale-in">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover-scale hover:bg-red-50 transition-all duration-300 group">
                <Gift className="w-8 h-8 text-red-600 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <h2 className="text-4xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300 cursor-default">
              Diskon 15% Buat Order Pertamamu!
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto hover:text-white transition-colors">
              Mau update dimsum terbaru + diskon & resep eksklusif? Langsung follow IG kita aja biar gak ketinggalan!
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            {!isSubscribed ? (
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <a
                  href="https://www.instagram.com/wings_dimsum.mentaiko?igsh=MXFybjd0d3FrbjBqbQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    type="button"
                    size="lg"
                    className="w-full bg-white text-red-600 hover:bg-gray-100 h-12 px-8 btn-animated hover-lift flex items-center justify-center gap-2"
                  >
                    <Instagram className="w-5 h-5 mr-1" />
                    <span className="font-semibold">Instagram Kita</span>
                  </Button>
                </a>
              </div>
            ) : (
              <div className="bg-white rounded-lg p-6 max-w-md mx-auto animate-scale-in hover-lift">
                <div className="text-green-600 text-4xl mb-4 animate-bounce-in">
                  <CheckCircle className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome to the family!</h3>
                <p className="text-gray-600">Check your email for your 15% discount code.</p>
              </div>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
