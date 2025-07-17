"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Plus, Heart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { supabase } from "@/lib/supabase"

export default function ProductGrid() {
  const { addItem } = useCart()
  const [favorites, setFavorites] = useState<number[]>([])
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      // Fetch products
      const { data: productsData } = await supabase
        .from("products")
        .select("*, product_variants(*)")
        .eq("is_active", true)
        .order("is_featured", { ascending: false })
      setProducts(productsData || [])
      setLoading(false)
    }
    fetchProducts()
  }, [])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const handleAddToCart = (product: any) => {
    // Ambil harga varian Mini jika ada, jika tidak ambil varian pertama
    const variant = product.product_variants?.find((v: any) => v.name === "Mini") || product.product_variants?.[0]
    addItem({
      id: product.id,
      product_id: product.id,
      name: product.name,
      price: variant?.price || 0,
      image: product.image_url,
    })
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-gray-600">{products.length} products found</p>
        <label htmlFor="sort-products" className="sr-only">
          Sort products
        </label>
        <select
          id="sort-products"
          className="border border-gray-300 rounded-md px-3 py-2"
          aria-label="Sort products"
        >
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Rating</option>
          <option>Newest</option>
        </select>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => {
          const variants = Array.isArray(product.product_variants) ? product.product_variants : []
          const variant = variants.find((v: any) => v.name === "Mini") || variants[0]
          return (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="p-0 relative">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image_url || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <Badge className="absolute top-4 left-4 bg-red-600 text-white">{product.badge}</Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart
                      className={`w-4 h-4 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                    />
                  </Button>
                  <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.ingredients?.map((ingredient: string, index: number) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-red-600">
                      {variant ? `Rp${variant.price?.toLocaleString("id-ID")}` : <span className="text-gray-400 text-base">No Variant</span>}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">({product.review_count} reviews)</div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => handleAddToCart(product)}
                  disabled={!variant}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Bungkus, Bos!
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
