"use client"

import type React from "react"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale-in"
  delay?: number
}

export function AnimatedSection({ children, className = "", animation = "fade-up", delay = 0 }: AnimatedSectionProps) {
  const { elementRef, isVisible } = useIntersectionObserver()

  const animationClasses = {
    "fade-up": "animate-fade-in-up",
    "fade-left": "animate-fade-in-left",
    "fade-right": "animate-fade-in-right",
    "scale-in": "animate-scale-in",
  }

  return (
    <div
      ref={elementRef}
      className={cn("opacity-0", isVisible && animationClasses[animation], className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
