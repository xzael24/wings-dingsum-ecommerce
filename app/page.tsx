import { Suspense } from "react"
import HeroSection from "@/components/hero-section"
import FeaturedProducts from "@/components/featured-products"
import AboutSection from "@/components/about-section"
import NewsletterSection from "@/components/newsletter-section"

export const metadata = {
  title: "Wings Dingsum Mentai Tobiko",
  description:
    "Dimsum kita gak main-main — ada mentai & tobiko premium yang bikin nagih. Order online aja, tinggal nunggu di rumah, rasa autentik langsung nyampe!",
  keywords: "dimsum, mentai, tobiko, japanese food, dumplings, online ordering",
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <FeaturedProducts />
      </Suspense>
      <AboutSection />
      <NewsletterSection />
    </main>
  )
}
