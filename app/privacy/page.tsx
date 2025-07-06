import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Users, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy - Wing's Dingsum Mentai Tobiko",
  description: "Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Privacy <span className="text-red-600">Policy</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm sm:text-base text-gray-500 mt-4">Last updated: January 2024</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:py-16">
        {/* Privacy Overview */}
        <section className="mb-12 sm:mb-16">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Data Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600">
                  We use industry-standard encryption and security measures to protect your personal information.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600">
                  We're transparent about what data we collect and how we use it to improve your experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600">
                  You have full control over your data, including the right to access, update, or delete it.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">Personal Information</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3">
                  When you create an account or place an order, we collect:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-600 ml-4">
                  <li>Name and contact information</li>
                  <li>Delivery addresses</li>
                  <li>Payment information (processed securely)</li>
                  <li>Order history and preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">Usage Information</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3">
                  We automatically collect certain information when you use our website:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-600 ml-4">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent</li>
                  <li>Referral sources</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm sm:text-base text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Process and fulfill your orders</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Communicate about your orders and account</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Improve our products and services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Send promotional emails (with your consent)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Prevent fraud and ensure security</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Comply with legal obligations</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm sm:text-base text-gray-600">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                only in the following circumstances:
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Service Providers:</strong> With trusted partners who help us operate our business (payment
                    processors, delivery services)
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Legal Requirements:</strong> When required by law or to protect our rights
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm sm:text-base text-gray-600">
                We implement appropriate security measures to protect your personal information:
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-gray-600">
                <li className="flex items-start space-x-2">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>SSL encryption for all data transmission</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Secure payment processing through certified providers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Regular security audits and updates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Limited access to personal information</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm sm:text-base text-gray-600">
                You have the following rights regarding your personal information:
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Access:</strong> Request a copy of your personal information
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Update:</strong> Correct or update your information
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Delete:</strong> Request deletion of your account and data
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Opt-out:</strong> Unsubscribe from marketing communications
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    <strong>Portability:</strong> Request your data in a portable format
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                If you have questions about this Privacy Policy or want to exercise your rights, contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                  <span className="text-sm sm:text-base text-gray-700">privacy@wingsdingsum.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                  <span className="text-sm sm:text-base text-gray-700">+1 (555) 123-4567</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <section className="mt-12 sm:mt-16 text-center bg-white rounded-2xl p-6 sm:p-12 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Questions About Privacy?</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            We're committed to protecting your privacy. Contact us if you have any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-sm sm:text-base">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 text-sm sm:text-base"
            >
              <Link href="/faq">View FAQ</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
