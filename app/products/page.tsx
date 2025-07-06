import { Suspense } from "react"
import ProductGrid from "@/components/product-grid"
import ProductFilters from "@/components/product-filters"
import { AnimatedSection } from "@/components/animated-section"

export const metadata = {
  title: "Premium Dim Sum Products - Wing's Dingsum Mentai Tobiko",
  description:
    "Browse our complete collection of premium dim sum featuring mentai and tobiko. Fresh, handcrafted, and delivered to your door.",
}

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <AnimatedSection animation="fade-up" className="mb-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 hover:text-red-600 transition-colors duration-300 cursor-default">
            Produk Kami
          </h1>
          <p className="text-lg text-gray-600 hover:text-gray-800 transition-colors duration-300">
            Semua varian dimsum premium ada di sini — full mentai & tobiko kualitas juara!
          </p>
        </div>
      </AnimatedSection>

      <div className="grid lg:grid-cols-4 gap-8">
        <AnimatedSection animation="fade-right" delay={200} className="lg:col-span-1">
          <ProductFilters />
        </AnimatedSection>

        <div className="lg:col-span-3">
          <Suspense
            fallback={
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-shimmer h-96 rounded-lg"></div>
                ))}
              </div>
            }
          >
            <AnimatedSection animation="fade-left" delay={400}>
              <ProductGrid />
            </AnimatedSection>
          </Suspense>
        </div>
      </div>
    </div>
  )
}
