import Image from "next/image"
import { Award, Clock, Heart, Shield, Users, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCounter } from "@/components/animated-counter"

export const metadata = {
  title: "Tentang Kita - Wings Dingsum Mentai Tobiko",
  description:
    "Yuk, cari tau gimana kami mulai, apa misi kami, dan kenapa dim sum premium kami pakai bahan Jepang yang otentik!",
}

const values = [
  {
    icon: Award,
    title: "Kualitas Premium",
    description: "Mentai & tobiko-nya pilihan, cuma ambil dari yang terpercaya!",
  },
  {
    icon: Clock,
    title: "Fresh Setiap Hari",
    description: "Dimsum-nya dibikin fresh tiap hari sama chef andalan kami!",
  },
  {
    icon: Heart,
    title: "Resep Turun-Temurun",
    description: "Teknik lama, rasa gak pernah bohong. Authentic banget!",
  },
  {
    icon: Shield,
    title: "Aman & Higienis",
    description: "Protokol kebersihan ketat, makan tenang no worrys!",
  },
 {
    icon: Users,
    title: "Pelanggan Nomor Satu",
    description:
      "Semua keputusan kami selalu fokus buat kasih pengalaman terbaik buat kamu.",
  },
  {
    icon: Globe,
    title: "Perpaduan Budaya",
    description:
      "Tradisi dim sum Tiongkok dipadu bahan Jepang — hasilnya? Rasa unik yang gak biasa!",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-12 sm:py-20 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-red-200 rounded-full opacity-20 animate-float"></div>
          <div
            className="absolute top-40 right-20 w-16 h-16 bg-red-300 rounded-full opacity-30 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-red-400 rounded-full opacity-25 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedSection animation="scale-in">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Cerita{" "}
                <span className="text-red-600 hover:text-red-700 transition-colors duration-300 cursor-default">
                  Kita
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 hover:text-gray-800 transition-colors duration-300">
                Wing's Dingsum lahir dari passion kami bikin perpaduan sempurna antara dim sum tradisional Tiongkok dan bahan premium khas Jepang. Perjalanannya dimulai dari satu visi sederhana: nyiptain rasa luar biasa yang tetap menghargai dua tradisi kuliner hebat.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  asChild
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-sm sm:text-base btn-animated hover-lift hover-glow group"
                >
                  <Link href="/products">
                    Eksplor Menu Kita
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 text-sm sm:text-base hover-lift group"
                >
                  <Link href="/contact">
                    Kontak Kita
                    <span className="ml-2 group-hover:scale-110 transition-transform duration-300">📞</span>
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-red-100 rounded-full opacity-20 animate-float"></div>
          <div
            className="absolute bottom-20 left-10 w-24 h-24 bg-red-200 rounded-full opacity-30 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <AnimatedSection animation="fade-right" className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Misi{" "}
                  <span className="text-red-600 hover:text-red-700 transition-colors duration-300 cursor-default">
                    Kita
                  </span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6 hover:text-gray-800 transition-colors duration-300">
                  Buat kami, makanan enak itu cara paling asik buat nyatuin orang. Misi kami simpel: hadirkan dim sum spesial yang gabungin cita rasa tradisi Tiongkok dan bahan Jepang premium.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                  Tiap potong dim sum punya ceritanya sendiri — soal usaha, kualitas, dan rasa yang gak main-main. Dari dapur ke meja kamu, cuma yang terbaik yang kami kirim.
                </p>
              </div>
              <div className="flex items-center space-x-4 sm:space-x-8">
                <div className="text-center group hover-scale cursor-default">
                  <div className="text-2xl sm:text-3xl font-bold text-red-600 group-hover:text-red-700 transition-colors">
                    <AnimatedCounter end={5} suffix="+" />
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-colors">
                    Tahun Pengalaman
                  </div>
                </div>
                <div className="text-center group hover-scale cursor-default">
                  <div className="text-2xl sm:text-3xl font-bold text-red-600 group-hover:text-red-700 transition-colors">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-colors">
                    Resep
                  </div>
                </div>
                <div className="text-center group hover-scale cursor-default">
                  <div className="text-2xl sm:text-3xl font-bold text-red-600 group-hover:text-red-700 transition-colors">
                    <AnimatedCounter end={10} suffix="k+" />
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-colors">
                    Kustomer Senang
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200}>
              <div className="relative group">
                <div className="hover-lift transition-all duration-500">
                  <Image
                    src="/images/hero-dimsum.png"
                    alt="Our signature dim sum"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500"
                  />
                </div>
                {/* Animated background shapes */}
                <div className="absolute -top-4 -right-4 w-full h-full bg-red-200 rounded-2xl -z-10 group-hover:rotate-3 transition-transform duration-500"></div>
                <div className="absolute -bottom-4 -left-4 w-full h-full bg-red-100 rounded-2xl -z-20 group-hover:-rotate-2 transition-transform duration-500"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <AnimatedSection animation="scale-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Nilai{" "}
                <span className="text-red-600 hover:text-red-700 transition-colors duration-300 cursor-default">
                  Kita
                </span>
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto hover:text-gray-800 transition-colors duration-300">
                Prinsip yang jadi panduan kami — dari pilih bahan terbaik sampai layani kamu sebaik mungkin.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                <Card className="text-center hover:shadow-xl transition-all duration-500 hover-lift group h-full">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-red-200 group-hover:scale-110 transition-all duration-300">
                      <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl group-hover:text-red-600 transition-colors duration-300">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-red-600 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-10 w-12 h-12 bg-white/10 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection animation="scale-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
              Siap Coba Dimsum Kami?
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-lg sm:text-xl text-red-100 mb-6 sm:mb-8 max-w-2xl mx-auto hover:text-white transition-colors duration-300">
              Ribuan orang udah jatuh cinta sama dimsum fusion kita — sekarang giliran kamu!
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 text-sm sm:text-base btn-animated hover-lift hover-glow group"
              >
                <Link href="/products">
                  Order Sekarang
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">🥟</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 text-sm sm:text-base hover-lift group"
              >
                <Link href="/contact">
                  Hubungi Kami
                  <span className="ml-2 group-hover:scale-110 transition-transform duration-300">💬</span>
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
