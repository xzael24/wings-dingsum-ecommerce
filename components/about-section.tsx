import Image from "next/image"
import { Award, Clock, Heart, Shield } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const features = [
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
]

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-red-100 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute bottom-20 left-10 w-24 h-24 bg-red-200 rounded-full opacity-30 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <AnimatedSection animation="fade-right">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">
                  Totalitas Demi Rasa yang{" "}
                  <span className="text-red-600 hover:text-red-700 transition-colors cursor-default">Maksimal</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed hover:text-gray-800 transition-colors">
                  Di Wing's Dingsum, kami percaya dim sum terbaik lahir dari perpaduan tradisi dan bahan premium khas Jepang. Chef andalan kami gabungkan pengalaman puluhan tahun dengan teknik kekinian — hasilnya? Rasa yang gak bakal kamu lupain.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed hover:text-gray-800 transition-colors">
                  Setiap dim sum dibuat dengan tangan, pakai mentai (telur ikan od pedas) dan tobiko (telur ikan terbang) terbaik. Semua langsung diimpor dari Jepang, biar rasa dan kualitasnya tetap asli dan otentik.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="flex items-start space-x-4 group hover-lift p-4 rounded-lg hover:bg-white transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 group-hover:scale-110 transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection animation="fade-left" delay={200}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="hover-lift hover-rotate group">
                    <Image
                      src="/images/chef-preparing.jpg"
                      alt="Chef preparing dim sum"
                      width={250}
                      height={300}
                      className="rounded-lg shadow-lg transition-all duration-500 group-hover:shadow-2xl"
                    />
                  </div>
                  <div className="hover-lift hover-rotate group">
                    <Image
                      src="/images/fresh-ingredients.jpg"
                      alt="Fresh ingredients"
                      width={250}
                      height={200}
                      className="rounded-lg shadow-lg transition-all duration-500 group-hover:shadow-2xl"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="hover-lift hover-rotate group">
                    <Image
                      src="/images/steaming-dimsum.jpg"
                      alt="Steaming dim sum"
                      width={250}
                      height={200}
                      className="rounded-lg shadow-lg transition-all duration-500 group-hover:shadow-2xl"
                    />
                  </div>
                  <div className="hover-lift hover-rotate group">
                    <Image
                      src="/images/finished-platter.jpg"
                      alt="Finished dim sum platter"
                      width={250}
                      height={300}
                      className="rounded-lg shadow-lg transition-all duration-500 group-hover:shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
