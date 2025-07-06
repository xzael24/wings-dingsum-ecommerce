import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RefreshCw, Shield, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Returns & Refunds - Wing's Dingsum Mentai Tobiko",
  description: "Learn about our return policy, refund process, and quality guarantee.",
}

const returnReasons = [
  {
    icon: XCircle,
    title: "Quality Issues",
    description: "If your dim sum doesn't meet our quality standards",
    action: "Full refund or replacement",
  },
  {
    icon: Clock,
    title: "Late Delivery",
    description: "Orders delivered significantly past estimated time",
    action: "Partial refund or credit",
  },
  {
    icon: AlertCircle,
    title: "Wrong Order",
    description: "Received incorrect items or missing products",
    action: "Immediate replacement",
  },
  {
    icon: RefreshCw,
    title: "Damaged Packaging",
    description: "Items damaged during shipping or delivery",
    action: "Full refund or replacement",
  },
]

const returnProcess = [
  {
    step: "1",
    title: "Contact Us",
    description: "Reach out within 24 hours of delivery via phone, email, or our contact form.",
  },
  {
    step: "2",
    title: "Provide Details",
    description: "Share your order number, photos of the issue, and description of the problem.",
  },
  {
    step: "3",
    title: "Review Process",
    description: "Our team will review your case and respond within 2 business hours.",
  },
  {
    step: "4",
    title: "Resolution",
    description: "Receive your refund, replacement, or store credit as appropriate.",
  },
]

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Returns & <span className="text-red-600">Refunds</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
              Your satisfaction is our priority. Learn about our return policy and quality guarantee.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:py-16">
        {/* Quality Guarantee */}
        <section className="mb-12 sm:mb-16">
          <Card className="bg-green-50 border-green-200">
            <CardHeader className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl text-gray-900">100% Quality Guarantee</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
                We stand behind every dim sum we make. If you're not completely satisfied with your order, we'll make it
                right with a full refund or replacement - no questions asked.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Return Reasons */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Valid Return <span className="text-red-600">Reasons</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {returnReasons.map((reason, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-base sm:text-lg">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{reason.description}</p>
                  <p className="text-xs sm:text-sm font-semibold text-green-600">{reason.action}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Return Process */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Return <span className="text-red-600">Process</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {returnProcess.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 font-bold text-lg sm:text-xl">
                    {step.step}
                  </div>
                  <CardTitle className="text-base sm:text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Policy Details */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Policy <span className="text-red-600">Details</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  <span>What's Covered</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-gray-600">• Quality issues with food items</p>
                <p className="text-sm sm:text-base text-gray-600">• Incorrect or missing items</p>
                <p className="text-sm sm:text-base text-gray-600">• Damaged packaging affecting food quality</p>
                <p className="text-sm sm:text-base text-gray-600">• Significant delivery delays</p>
                <p className="text-sm sm:text-base text-gray-600">• Temperature control failures</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl flex items-center space-x-2">
                  <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  <span>What's Not Covered</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-gray-600">• Personal taste preferences</p>
                <p className="text-sm sm:text-base text-gray-600">• Orders consumed more than 50%</p>
                <p className="text-sm sm:text-base text-gray-600">• Delivery issues due to incorrect address</p>
                <p className="text-sm sm:text-base text-gray-600">• Claims made after 24 hours</p>
                <p className="text-sm sm:text-base text-gray-600">• Items stored improperly after delivery</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Refund Timeline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-gray-600">• Credit card refunds: 3-5 business days</p>
                <p className="text-sm sm:text-base text-gray-600">• Store credit: Immediate</p>
                <p className="text-sm sm:text-base text-gray-600">• Replacement orders: Same day processing</p>
                <p className="text-sm sm:text-base text-gray-600">• PayPal refunds: 1-2 business days</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-gray-600">• Phone: +1 (555) 123-4567</p>
                <p className="text-sm sm:text-base text-gray-600">• Email: returns@wingsdingsum.com</p>
                <p className="text-sm sm:text-base text-gray-600">• Hours: Mon-Sun 9AM-9PM</p>
                <p className="text-sm sm:text-base text-gray-600">• Response time: Within 2 hours</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-white rounded-2xl p-6 sm:p-12 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Need to Return Something?</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            We're here to help! Contact us immediately if you have any issues with your order.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-sm sm:text-base">
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 text-sm sm:text-base"
            >
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
