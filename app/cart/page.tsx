"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { AnimatedSection } from "@/components/animated-section"

export default function CartPage() {
  const { items, updateQuantity, removeItem, total } = useCart()
  const [promoCode, setPromoCode] = useState("")
  const [discount, setDiscount] = useState(0)

  const shipping = total > 50 ? 0 : 5.99
  const tax = total * 0.08
  const finalTotal = total + shipping + tax - discount

  const applyPromoCode = () => {
    if (promoCode === "WELCOME15") {
      setDiscount(total * 0.15)
    }
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <AnimatedSection animation="scale-in" className="text-center max-w-md mx-auto">
          <div className="animate-float">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4 hover:text-red-600 transition-colors duration-300">
            Your cart is empty
          </h1>
          <p className="text-gray-600 mb-8 hover:text-gray-800 transition-colors">
            Looks like you haven't added any delicious dim sum to your cart yet.
          </p>
          <Button asChild className="bg-red-600 hover:bg-red-700 btn-animated hover-lift hover-glow">
            <Link href="/products">Start Shopping</Link>
          </Button>
        </AnimatedSection>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <AnimatedSection animation="fade-up" className="mb-8">
        <Button
          variant="ghost"
          asChild
          className="mb-4 text-sm sm:text-base hover:bg-red-50 hover:text-red-600 transition-all duration-300"
        >
          <Link href="/products">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-gray-900 hover:text-red-600 transition-colors duration-300 cursor-default">
          Shopping Cart
        </h1>
        <p className="text-gray-600 hover:text-gray-800 transition-colors">{items.length} items in your cart</p>
      </AnimatedSection>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item, index) => (
            <AnimatedSection key={item.id} animation="fade-up" delay={index * 100}>
              <Card className="hover:shadow-lg transition-all duration-300 hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="hover-scale transition-transform duration-300">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg hover:text-red-600 transition-colors duration-300 cursor-default">
                        {item.name}
                      </h3>
                      <p className="text-red-600 font-bold hover:text-red-700 transition-colors cursor-default">
                        {`Rp${item.price.toLocaleString("id-ID")}`}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 sm:h-10 sm:w-10 hover:bg-red-50 hover:border-red-500 hover:text-red-600 transition-all duration-300"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                      <span className="w-8 sm:w-12 text-center text-sm sm:text-base font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 sm:h-10 sm:w-10 hover:bg-red-50 hover:border-red-500 hover:text-red-600 transition-all duration-300"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold hover:text-red-600 transition-colors cursor-default">
                        {`Rp${(item.price * item.quantity).toLocaleString("id-ID")}`}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 transition-all duration-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-left" delay={200} className="lg:col-span-1">
          <Card className="sticky top-4 hover:shadow-lg transition-all duration-300 hover-lift">
            <CardHeader>
              <CardTitle className="hover:text-red-600 transition-colors duration-300">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between hover:bg-gray-50 p-2 rounded transition-colors">
                <span>Subtotal</span>
                <span className="font-medium">{`Rp${total.toLocaleString("id-ID")}`}</span>
              </div>
              <div className="flex justify-between hover:bg-gray-50 p-2 rounded transition-colors">
                <span>Shipping</span>
                <span className="font-medium">{shipping === 0 ? "Gratis" : `Rp${shipping.toLocaleString("id-ID")}`}</span>
              </div>
              <div className="flex justify-between hover:bg-gray-50 p-2 rounded transition-colors">
                <span>Tax</span>
                <span className="font-medium">{`Rp${tax.toLocaleString("id-ID")}`}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600 hover:bg-green-50 p-2 rounded transition-colors">
                  <span>Discount</span>
                  <span className="font-medium">-Rp{discount.toLocaleString("id-ID")}</span>
                </div>
              )}
              <Separator />
              <div className="flex justify-between font-bold text-lg hover:text-red-600 transition-colors cursor-default">
                <span>Total</span>
                <span>{`Rp${finalTotal.toLocaleString("id-ID")}`}</span>
              </div>

              <div className="space-y-2">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="focus:border-red-500 transition-colors"
                  />
                  <Button
                    variant="outline"
                    onClick={applyPromoCode}
                    className="hover:bg-red-50 hover:border-red-500 hover:text-red-600 transition-all duration-300"
                  >
                    Apply
                  </Button>
                </div>
                {total < 50 && (
                  <p className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                    Tambah {`Rp${(50 - total).toLocaleString("id-ID")}`} lagi untuk gratis ongkir!
                  </p>
                )}
              </div>

              <Button
                asChild
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-sm sm:text-base btn-animated hover-lift hover-glow"
              >
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  )
}
