"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Package, Truck, Mail } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("order_id")
  const paymentIntentId = searchParams.get("payment_intent")

  const [orderDetails, setOrderDetails] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (orderId) {
      fetchOrderDetails()
    }
  }, [orderId])

  const fetchOrderDetails = async () => {
    try {
      // In a real app, you'd fetch order details from your API
      // For now, we'll simulate it
      setTimeout(() => {
        setOrderDetails({
          id: orderId,
          orderNumber: `WD${new Date().getFullYear()}${orderId?.padStart(4, "0")}`,
          total: 45.99,
          estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        })
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error("Error fetching order details:", error)
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading order details...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection animation="scale-in" className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-in">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4 hover:text-green-600 transition-colors duration-300 cursor-default">
            Payment Successful!
          </h1>
          <p className="text-lg text-gray-600 hover:text-gray-800 transition-colors">
            Thank you for your order. We've received your payment and will start preparing your delicious dim sum.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <Card className="mb-8 hover:shadow-lg transition-all duration-300 hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 hover:text-red-600 transition-colors duration-300">
                <Package className="w-5 h-5" />
                <span>Order Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="hover:bg-gray-50 p-3 rounded transition-colors">
                  <p className="text-sm text-gray-600">Order Number</p>
                  <p className="font-semibold text-lg hover:text-red-600 transition-colors cursor-default">
                    {orderDetails?.orderNumber}
                  </p>
                </div>
                <div className="hover:bg-gray-50 p-3 rounded transition-colors">
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="font-semibold text-lg hover:text-red-600 transition-colors cursor-default">
                    ${orderDetails?.total}
                  </p>
                </div>
                <div className="hover:bg-gray-50 p-3 rounded transition-colors">
                  <p className="text-sm text-gray-600">Payment ID</p>
                  <p className="font-mono text-sm hover:text-red-600 transition-colors cursor-default">
                    {paymentIntentId?.slice(0, 20)}...
                  </p>
                </div>
                <div className="hover:bg-gray-50 p-3 rounded transition-colors">
                  <p className="text-sm text-gray-600">Estimated Delivery</p>
                  <p className="font-semibold hover:text-red-600 transition-colors cursor-default">
                    {orderDetails?.estimatedDelivery}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={400}>
          <Card className="mb-8 hover:shadow-lg transition-all duration-300 hover-lift">
            <CardHeader>
              <CardTitle className="hover:text-red-600 transition-colors duration-300">What's Next?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group hover:bg-red-50 p-3 rounded transition-colors">
                  <Mail className="w-5 h-5 text-red-600 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold group-hover:text-red-600 transition-colors">Order Confirmation</h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                      You'll receive an email confirmation with your order details shortly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group hover:bg-red-50 p-3 rounded transition-colors">
                  <Package className="w-5 h-5 text-red-600 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold group-hover:text-red-600 transition-colors">Order Preparation</h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                      Our chefs will start preparing your fresh dim sum within 2 hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group hover:bg-red-50 p-3 rounded transition-colors">
                  <Truck className="w-5 h-5 text-red-600 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold group-hover:text-red-600 transition-colors">Delivery Updates</h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                      We'll send you tracking information once your order is on its way.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 btn-animated hover-lift hover-glow group"
            >
              <Link href="/account">
                View Order History
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 hover-lift group"
            >
              <Link href="/products">
                Continue Shopping
                <span className="ml-2 group-hover:scale-110 transition-transform duration-300">🥟</span>
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
