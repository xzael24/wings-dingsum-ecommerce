"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Plus, Heart } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { useCart } from "@/contexts/cart-context"
import { useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { supabase } from "@/lib/supabase"

export default function FeaturedProducts() {
  const { addItem } = useCart()
  const { toast } = useToast()
  const [favorites, setFavorites] = useState<number[]>([])
  const [addingToCart, setAddingToCart] = useState<number | null>(null)
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeatured = async () => {
      setLoading(true)
      const { data } = await supabase
        .from("products")
        .select("*, product_variants(*)")
        .eq("is_active", true)
        .eq("is_featured", true)
        .order("id", { ascending: true })
      setProducts(data || [])
      setLoading(false)
    }
    fetchFeatured()
  }, [])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const handleAddToCart = async (product: any) => {
    setAddingToCart(product.id)
    await new Promise((resolve) => setTimeout(resolve, 500))
    const variant = product.product_variants?.find((v: any) => v.name === "Mini") || product.product_variants?.[0]
    addItem({
      id: product.id,
      product_id: product.id,
      name: product.name,
      price: variant?.price || 0,
      image: product.image_url,
    })
    toast({
      title: "Added to Cart!",
      description: `${product.name} has been added to your cart.`,
    })
    setAddingToCart(null)
  }

  if (loading) return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-red-600 hover:text-red-700 transition-colors cursor-default">Dim Sum</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto hover:text-gray-800 transition-colors">
            Discover our most popular creations featuring premium mentai and tobiko ingredients
          </p>
        </AnimatedSection>
        <div className="text-center py-12 text-gray-500">Loading...</div>
      </div>
    </section>
  )

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-50/30 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pilihan <span className="text-red-600 hover:text-red-700 transition-colors cursor-default">Dimsum Terbaik</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto hover:text-gray-800 transition-colors">
            Menu andalan kami udah pasti mentai & tobiko-nya juara! Kamu harus coba.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product: any, index: number) => {
            const variants = Array.isArray(product.product_variants) ? product.product_variants : []
            const variant = variants.find((v: any) => v.name === "Mini") || variants[0]
            return (
              <AnimatedSection key={product.id} animation="scale-in" delay={index * 100} className="h-full">
                <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover-lift h-full flex flex-col relative overflow-hidden">
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                  <CardHeader className="p-0 relative">
                    <div className="relative overflow-hidden rounded-t-lg image-zoom">
                      <Image
                        src={product.image_url || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-64 object-cover transition-transform duration-700"
                      />
                      {product.badge && (
                        <Badge className="absolute top-4 left-4 bg-red-600 text-white animate-pulse-slow">
                          {product.badge}
                        </Badge>
                      )}
                      {/* Favorite button */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 bg-white/80 hover:bg-white transition-all duration-300 hover:scale-110"
                        onClick={() => toggleFavorite(product.id)}
                      >
                        <Heart
                          className={`w-4 h-4 transition-all duration-300 ${
                            favorites.includes(product.id)
                              ? "fill-red-500 text-red-500 scale-110"
                              : "text-gray-600 hover:text-red-500"
                          }`}
                        />
                      </Button>
                      {/* Rating badge */}
                      <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <CardTitle className="text-xl mb-2 group-hover:text-red-600 transition-colors duration-300 cursor-default">
                      {product.name}
                    </CardTitle>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed group-hover:text-gray-800 transition-colors">
                      {product.description}
                    </p>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {product.ingredients?.map((ingredient: string, idx: number) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs hover:bg-red-100 hover:text-red-700 transition-colors cursor-default"
                          >
                            {ingredient}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors">
                          {variant ? `Rp${variant.price?.toLocaleString("id-ID")}` : <span className="text-gray-400 text-base">No Variant</span>}
                        </span>
                        {variant && variant.original_price && (
                          <span className="text-lg text-gray-400 line-through">Rp{variant.original_price?.toLocaleString("id-ID")}</span>
                        )}
                      </div>
                      <div className="text-sm text-gray-500 hover:text-gray-700 transition-colors cursor-default">
                        ({product.review_count || 0} reviews)
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 sm:p-6 pt-0">
                    <Button
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-2 sm:py-3 text-sm sm:text-base btn-animated hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => handleAddToCart(product)}
                      disabled={addingToCart === product.id || !variant}
                    >
                      {addingToCart === product.id ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Menambahkan...
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 group-hover:rotate-90 transition-transform duration-300" />
                          Bungkus, Bos!
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            )
          })}
        </div>
        <AnimatedSection animation="fade-up" delay={400} className="text-center mt-8 sm:mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 text-sm sm:text-base hover-lift btn-animated group"
          >
            <Link href="/products">
              Scroll Semua Menu 😋
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
