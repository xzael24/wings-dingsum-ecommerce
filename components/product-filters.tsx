"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [categories, setCategories] = useState<any[]>([])
  const [sizes, setSizes] = useState<string[]>([])
  const [toppings, setToppings] = useState<any[]>([])

  useEffect(() => {
    // Fetch categories
    supabase.from("categories").select("*").then(({ data }) => {
      setCategories(data || [])
    })
    // Fetch unique sizes from product_variants
    supabase.from("product_variants").select("name").then(({ data }) => {
      const uniqueSizes = Array.from(new Set((data || []).map((v: any) => v.name)))
      setSizes(uniqueSizes)
    })
    // Fetch toppings
    supabase.from("toppings").select("*").then(({ data }) => {
      setToppings(data || [])
    })
  }, [])

  // Ganti kategori dengan list dari produk dimsum
  const dimsumCategories = [
    { id: "dimsum-mentai-tobiko", label: "Mentai Tobiko" },
    { id: "dimsum-tartar", label: "Tartar" },
    { id: "dimsum-saus-keju", label: "Saus Keju" },
    { id: "dimsum-saus-bolognese", label: "Saus Bolognese" },
    { id: "dimsum-ori", label: "Ori" },
  ]

  return (
    <div className="space-y-6">
      {/* Kategori Dimsum */}
      <AnimatedSection animation="scale-in" delay={100}>
        <Card className="hover:shadow-lg transition-all duration-300 hover-lift">
          <CardHeader>
            <CardTitle className="text-lg hover:text-red-600 transition-colors duration-300">Kategori Dimsum</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {dimsumCategories.map((category, index) => (
              <AnimatedSection key={category.id} animation="fade-up" delay={index * 50}>
                <div className="flex items-center space-x-2 group hover:bg-red-50 p-2 rounded-lg transition-all duration-300">
                  <Checkbox id={`cat-${category.id}`} className="group-hover:border-red-500 transition-colors" />
                  <label
                    htmlFor={`cat-${category.id}`}
                    className="text-sm cursor-pointer group-hover:text-red-600 transition-colors duration-300"
                  >
                    {category.label}
                  </label>
                </div>
              </AnimatedSection>
            ))}
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Ukuran/Porsi */}
      <AnimatedSection animation="scale-in" delay={150}>
        <Card className="hover:shadow-lg transition-all duration-300 hover-lift">
          <CardHeader>
            <CardTitle className="text-lg hover:text-red-600 transition-colors duration-300">Ukuran/Porsi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {sizes.map((size, index) => (
              <AnimatedSection key={size} animation="fade-up" delay={index * 50}>
                <div className="flex items-center space-x-2 group hover:bg-red-50 p-2 rounded-lg transition-all duration-300">
                  <Checkbox id={`size-${size}`} className="group-hover:border-red-500 transition-colors" />
                  <label
                    htmlFor={`size-${size}`}
                    className="text-sm cursor-pointer group-hover:text-red-600 transition-colors duration-300"
                  >
                    {size}
                  </label>
                </div>
              </AnimatedSection>
            ))}
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Extra Topping */}
      <AnimatedSection animation="scale-in" delay={200}>
        <Card className="hover:shadow-lg transition-all duration-300 hover-lift">
          <CardHeader>
            <CardTitle className="text-lg hover:text-red-600 transition-colors duration-300">Extra Topping</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {toppings.map((topping, index) => (
              <AnimatedSection key={topping.id} animation="fade-up" delay={index * 50}>
                <div className="flex items-center space-x-2 group hover:bg-red-50 p-2 rounded-lg transition-all duration-300">
                  <Checkbox id={`topping-${topping.id}`} className="group-hover:border-red-500 transition-colors" />
                  <label
                    htmlFor={`topping-${topping.id}`}
                    className="text-sm cursor-pointer group-hover:text-red-600 transition-colors duration-300"
                  >
                    {topping.name}
                  </label>
                </div>
              </AnimatedSection>
            ))}
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Price Range */}
      <AnimatedSection animation="scale-in" delay={300}>
        <Card className="hover:shadow-lg transition-all duration-300 hover-lift">
          <CardHeader>
            <CardTitle className="text-lg hover:text-red-600 transition-colors duration-300">Rentang Harga</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={100000}
                step={1000}
                className="w-full hover:opacity-80 transition-opacity"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span className="hover:text-red-600 transition-colors cursor-default">Rp{priceRange[0].toLocaleString("id-ID")}</span>
                <span className="hover:text-red-600 transition-colors cursor-default">Rp{priceRange[1].toLocaleString("id-ID")}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={400}>
        <Button className="w-full bg-red-600 hover:bg-red-700 btn-animated hover-lift hover-glow">Terapkan Filter</Button>
      </AnimatedSection>
    </div>
  )
}
