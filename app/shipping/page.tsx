import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Clock, Shield, MapPin, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Shipping Information - Wing's Dingsum Mentai Tobiko",
  description: "Learn about our shipping options, delivery areas, and policies.",
}

const shippingOptions = [
  {
    icon: Truck,
    title: "Standard Delivery",
    time: "5-7 Business Days",
    price: "Free on orders $50+",
    description: "Our standard delivery option for most orders. Perfect for planning ahead.",
  },
  {
    icon: Clock,
    title: "Express Delivery",
    time: "2-3 Business Days",
    price: "$12.99",
    description: "Faster delivery for when you need your dim sum sooner.",
  },
  {
    icon: Shield,
    title: "Same Day Delivery",
    time: "Within 4 Hours",
    price: "$19.99",
    description: "Available in select areas. Order before 2PM for same-day delivery.",
  },
]

const deliveryAreas = [
  "Manhattan, NY",
  "Brooklyn, NY",
  "Queens, NY",
  "Bronx, NY",
  "Staten Island, NY",
  "Jersey City, NJ",
  "Hoboken, NJ",
  "Long Island City, NY",
]

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Shipping & <span className="text-red-600">Delivery</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
              Fresh dim sum delivered right to your door. Learn about our shipping options and delivery areas.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:py-16">
        {/* Shipping Options */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Delivery <span className="text-red-600">Options</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {shippingOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <option.icon className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{option.title}</CardTitle>
                  <p className="text-sm sm:text-base text-red-600 font-semibold">{option.time}</p>
                  <p className="text-base sm:text-lg font-bold text-gray-900">{option.price}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-600">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Delivery Areas */}
        <section className="mb-12 sm:mb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Delivery <span className="text-red-600">Areas</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                We currently deliver to the following areas. Don't see your location? Contact us to see if we can
                arrange special delivery.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {deliveryAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  <span className="text-lg sm:text-xl">Packaging & Freshness</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base text-gray-600">• Insulated packaging to maintain temperature</p>
                <p className="text-sm sm:text-base text-gray-600">• Eco-friendly, recyclable materials</p>
                <p className="text-sm sm:text-base text-gray-600">
                  • Steam-fresh guarantee within 2 hours of preparation
                </p>
                <p className="text-sm sm:text-base text-gray-600">• Detailed reheating instructions included</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Shipping Policies */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Shipping <span className="text-red-600">Policies</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Order Processing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-gray-600">• Orders placed before 2PM are processed same day</p>
                <p className="text-sm sm:text-base text-gray-600">• Weekend orders processed on Monday</p>
                <p className="text-sm sm:text-base text-gray-600">• You'll receive tracking information via email</p>
                <p className="text-sm sm:text-base text-gray-600">• Special orders require 24-48 hours notice</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Delivery Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-gray-600">• Someone must be present to receive the order</p>
                <p className="text-sm sm:text-base text-gray-600">• We'll call 15 minutes before arrival</p>
                <p className="text-sm sm:text-base text-gray-600">• Contactless delivery available upon request</p>
                <p className="text-sm sm:text-base text-gray-600">• Delivery to apartment lobbies accepted</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Temperature Control</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-gray-600">• Insulated bags maintain optimal temperature</p>
                <p className="text-sm sm:text-base text-gray-600">• Dry ice used for longer distance deliveries</p>
                <p className="text-sm sm:text-base text-gray-600">• Maximum 4-hour delivery window</p>
                <p className="text-sm sm:text-base text-gray-600">• Refrigerate immediately upon arrival</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Special Requests</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-gray-600">• Dietary restrictions accommodated</p>
                <p className="text-sm sm:text-base text-gray-600">• Corporate catering available</p>
                <p className="text-sm sm:text-base text-gray-600">• Gift wrapping service offered</p>
                <p className="text-sm sm:text-base text-gray-600">• Bulk orders welcome with advance notice</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-white rounded-2xl p-6 sm:p-12 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Ready to Order?</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Experience our premium dim sum delivered fresh to your door. Free shipping on orders over $50!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-sm sm:text-base">
              <Link href="/products">Browse Menu</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 text-sm sm:text-base"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
