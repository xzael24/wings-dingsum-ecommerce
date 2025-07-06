"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronUp, Search, MessageCircle } from "lucide-react"
import Link from "next/link"

const faqCategories = [
  {
    category: "Ordering & Payment",
    questions: [
      {
        question: "How do I place an order?",
        answer:
          "You can place an order through our website by browsing our products, adding items to your cart, and proceeding to checkout. We accept all major credit cards and PayPal.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept Visa, Mastercard, American Express, Discover, and PayPal. All payments are processed securely through our encrypted payment system.",
      },
      {
        question: "Can I modify or cancel my order?",
        answer:
          "Orders can be modified or cancelled within 30 minutes of placement. After that, please contact us immediately and we'll do our best to accommodate your request.",
      },
      {
        question: "Do you offer bulk or catering orders?",
        answer:
          "Yes! We offer catering services for events of all sizes. Please contact us at least 48 hours in advance for catering orders. Special pricing available for large orders.",
      },
    ],
  },
  {
    category: "Products & Ingredients",
    questions: [
      {
        question: "What is mentai and tobiko?",
        answer:
          "Mentai is spicy cod roe, a popular Japanese ingredient with a creamy texture and umami flavor. Tobiko is flying fish roe with a distinctive pop and subtle oceanic taste. Both are premium ingredients we source directly from Japan.",
      },
      {
        question: "Are your dim sum made fresh?",
        answer:
          "Yes! All our dim sum are handcrafted fresh daily by our expert chefs. We never use frozen or pre-made products. Each order is prepared to order to ensure maximum freshness.",
      },
      {
        question: "Do you have vegetarian options?",
        answer:
          "We offer several vegetarian dim sum options, though our specialty items with mentai and tobiko are not vegetarian. Please check product descriptions or contact us for specific dietary requirements.",
      },
      {
        question: "Are there any allergens I should know about?",
        answer:
          "Our products contain fish, shellfish, eggs, wheat, and soy. We also use sesame oil in some preparations. Please inform us of any allergies when ordering, and we'll provide detailed ingredient information.",
      },
    ],
  },
  {
    category: "Delivery & Shipping",
    questions: [
      {
        question: "What are your delivery areas?",
        answer:
          "We currently deliver to Manhattan, Brooklyn, Queens, Bronx, Staten Island, Jersey City, Hoboken, and Long Island City. Same-day delivery is available in select areas.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Standard delivery takes 5-7 business days, express delivery takes 2-3 business days, and same-day delivery is available within 4 hours for orders placed before 2PM in select areas.",
      },
      {
        question: "Is there a minimum order for delivery?",
        answer:
          "There's no minimum order requirement, but orders over $50 qualify for free standard shipping. Orders under $50 have a $5.99 shipping fee.",
      },
      {
        question: "How do you maintain freshness during delivery?",
        answer:
          "We use insulated packaging and temperature-controlled delivery methods. For longer distances, we use dry ice. All orders are guaranteed fresh within 4 hours of preparation.",
      },
    ],
  },
  {
    category: "Quality & Returns",
    questions: [
      {
        question: "What if I'm not satisfied with my order?",
        answer:
          "We offer a 100% satisfaction guarantee. If you're not happy with your order, contact us within 24 hours and we'll provide a full refund or replacement.",
      },
      {
        question: "How should I store the dim sum?",
        answer:
          "Refrigerate immediately upon arrival. Our dim sum can be stored in the refrigerator for up to 3 days. We include detailed reheating instructions with every order.",
      },
      {
        question: "Can I freeze the dim sum?",
        answer:
          "While we recommend consuming fresh, our dim sum can be frozen for up to 1 month. Thaw in refrigerator overnight before reheating. Note that texture may be slightly affected.",
      },
      {
        question: "What's your return policy?",
        answer:
          "We accept returns for quality issues, wrong orders, damaged packaging, or significant delivery delays. Contact us within 24 hours with photos and order details for fastest resolution.",
      },
    ],
  },
]

export default function FAQClientPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openQuestions, setOpenQuestions] = useState<string[]>([])

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions((prev) =>
      prev.includes(questionId) ? prev.filter((id) => id !== questionId) : [...prev, questionId],
    )
  }

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
              Find quick answers to common questions about our dim sum, ordering process, and policies.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <Input
                type="search"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 sm:pl-12 bg-white border-gray-300 focus:border-red-500 text-sm sm:text-base"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:py-16">
        {filteredFAQs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 mb-4">No questions found matching your search.</p>
            <Button
              onClick={() => setSearchTerm("")}
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-50"
            >
              Clear Search
            </Button>
          </div>
        ) : (
          <div className="space-y-8 sm:space-y-12">
            {filteredFAQs.map((category, categoryIndex) => (
              <section key={categoryIndex}>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">{category.category}</h2>
                <div className="space-y-3 sm:space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const questionId = `${categoryIndex}-${questionIndex}`
                    const isOpen = openQuestions.includes(questionId)

                    return (
                      <Card key={questionIndex} className="hover:shadow-md transition-shadow">
                        <CardHeader className="cursor-pointer" onClick={() => toggleQuestion(questionId)}>
                          <CardTitle className="flex items-center justify-between text-base sm:text-lg">
                            <span>{faq.question}</span>
                            {isOpen ? (
                              <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" />
                            )}
                          </CardTitle>
                        </CardHeader>
                        {isOpen && (
                          <CardContent className="pt-0">
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                          </CardContent>
                        )}
                      </Card>
                    )
                  })}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* Contact Support Section */}
        <section className="mt-12 sm:mt-16 text-center bg-white rounded-2xl p-6 sm:p-12 shadow-lg">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Still Have Questions?</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our customer support team is here to help!
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
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
