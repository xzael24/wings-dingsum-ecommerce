"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCounter } from "@/components/animated-counter"
import { useState } from "react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-red-50 to-red-100 py-20 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-200 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-red-300 rounded-full opacity-30 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-red-400 rounded-full opacity-25 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 group">
                  <div className="flex text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-current animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 hover:text-red-600 transition-colors cursor-default">
                    Skor 4.9 dari 5 — kata mereka sih, enaknya kebangetan 😎
                  </span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="inline-block hover:text-red-600 transition-colors duration-300">Premium</span>{" "}
                  <span className="text-red-600 inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                    Mentai Tobiko
                  </span>{" "}
                  <span className="inline-block hover:text-red-600 transition-colors duration-300">Dim Sum</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                  Rasakan perpaduan sempurna antara dim sum tradisional dan bahan premium khas Jepang.
Mentai dan tobiko andalan kita siap ngasih ledakan rasa umami yang gak terlupakan!
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-sm sm:text-base btn-animated hover-lift hover-glow group"
                >
                  <Link href="/products">
                    Cus Order Sekarang!
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 text-sm sm:text-base hover-lift group"
                >
                  <Link href="/about">
                    Cari Tau Yuk!
                    <span className="ml-2 group-hover:scale-110 transition-transform duration-300">→</span>
                  </Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={600}>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center group hover-scale cursor-default">
                  <div className="text-3xl font-bold text-red-600 group-hover:text-red-700 transition-colors">
                    <AnimatedCounter end={10} suffix="+" />
                  </div>
                  <div className="text-gray-600 group-hover:text-gray-800 transition-colors">Aneka Dimsum</div>
                </div>
                <div className="text-center group hover-scale cursor-default">
                  <div className="text-3xl font-bold text-red-600 group-hover:text-red-700 transition-colors">
                    <AnimatedCounter end={100} suffix="+" />
                  </div>
                  <div className="text-gray-600 group-hover:text-gray-800 transition-colors">Pelanggan Puas</div>
                </div>
                <div className="text-center group hover-scale cursor-default">
                  <div className="text-3xl font-bold text-red-600 group-hover:text-red-700 transition-colors">
                    <AnimatedCounter end={5} suffix="★" />
                  </div>
                  <div className="text-gray-600 group-hover:text-gray-800 transition-colors">Rating Rata-Rata</div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-left" delay={300}>
            <div className="relative group">
              <div className="relative z-10">
                {/* Efek 3D: floating, rotate, shadow, dan gradient */}
                <div className="relative overflow-visible rounded-2xl shadow-2xl hover-lift group-hover: transition-transform duration-700">
                  {/* Layer gradient untuk efek depth */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-100/60 to-yellow-100/40 blur-xl opacity-70 -z-10"></div>
                  {/* Efek floating */}
                  <Image
                    src="/images/hero-dimsum.png"
                    alt="Premium Mentai Tobiko Dim Sum"
                    width={600}
                    height={600}
                    className="rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-6 animate-float-slow"
                    priority
                  />
                  {/* Tambahan highlight untuk efek glossy */}
                  <div className="absolute left-1/3 top-6 w-1/3 h-12 bg-white/30 rounded-full blur-2xl opacity-60 pointer-events-none"></div>
                </div>
              </div>
              {/* Animated background shapes */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-red-200 rounded-2xl -z-10 group-hover:rotate-3 transition-transform duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-red-100 rounded-2xl -z-20 group-hover:-rotate-2 transition-transform duration-500"></div>
              {/* Floating badges */}
              <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg animate-bounce-in hover-rotate z-20">
                <span className="text-red-600 font-bold text-sm">Fresh Daily</span>
              </div>
              <div
                className="absolute bottom-4 right-4 bg-red-600 text-white rounded-full p-3 shadow-lg animate-bounce-in hover-rotate z-20"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="font-bold text-sm">Premium</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
