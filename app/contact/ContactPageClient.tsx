"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { AnimatedSection } from "@/components/animated-section"

const contactInfo = [
  {
    icon: MapPin,
    title: "Kunjungi Kami",
    details: ["Sebrang Water Leideng", "Alun-Alun Tegal, Kota Tegal"],
  },
  {
    icon: Phone,
    title: "Hubungi Kami",
    details: ["+62 812-123-4567", "17.30-23.00 WIB"],
  },
  {
    icon: Mail,
    title: "Email Kami",
    details: ["hello@wingsdingsum.com", "orders@wingsdingsum.com"],
  },
  {
    icon: Clock,
    title: "Jam Kerja",
    details: ["Senin - Minggu", "17.30 - 23.00 WIB"],
  },
]

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedSection animation="scale-in">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Hubungi{" "}
                <span className="text-red-600 hover:text-red-700 transition-colors duration-300 cursor-default">
                  Kami
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-base sm:text-xl text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                Mau nanya-nanya dulu? Atau ada order spesial yang kamu pengen? DM aja, Kami siap bantu!
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <AnimatedSection animation="fade-right">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-500 hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl text-gray-900 hover:text-red-600 transition-colors duration-300">
                  Kirim Pesan ke Kami
                </CardTitle>
                <p className="text-sm sm:text-base text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  Tinggal isi form di bawah, nanti kami langsung kabarin balik!
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="group">
                      <Label htmlFor="name" className="text-sm sm:text-base group-hover:text-red-600 transition-colors">
                        Nama Lengkap *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1 focus:border-red-500 focus:ring-red-500 transition-all duration-300 hover:border-red-300"
                        placeholder="Nama lengkap kamu"
                      />
                    </div>
                    <div className="group">
                      <Label
                        htmlFor="phone"
                        className="text-sm sm:text-base group-hover:text-red-600 transition-colors"
                      >
                        Nomor Telepon *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 focus:border-red-500 focus:ring-red-500 transition-all duration-300 hover:border-red-300"
                        placeholder="+62 812-123-4567"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <Label htmlFor="email" className="text-sm sm:text-base group-hover:text-red-600 transition-colors">
                      Alamat Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 focus:border-red-500 focus:ring-red-500 transition-all duration-300 hover:border-red-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="group">
                    <Label
                      htmlFor="subject"
                      className="text-sm sm:text-base group-hover:text-red-600 transition-colors"
                    >
                      Subjek *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-1 focus:border-red-500 focus:ring-red-500 transition-all duration-300 hover:border-red-300"
                      placeholder="Tentang apa yang ingin kamu bicarakan?"
                    />
                  </div>

                  <div className="group">
                    <Label
                      htmlFor="message"
                      className="text-sm sm:text-base group-hover:text-red-600 transition-colors"
                    >
                      Pesan *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-1 min-h-[120px] focus:border-red-500 focus:ring-red-500 transition-all duration-300 hover:border-red-300"
                      placeholder="Tulis detail pertanyaan kamu di sini ya…"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-sm sm:text-base btn-animated hover-lift hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        Kirim Pesan
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <AnimatedSection animation="fade-left" delay={200}>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 hover:text-red-600 transition-colors duration-300 cursor-default">
                  Informasi Kontak
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 hover:text-gray-800 transition-colors duration-300">
                    Kami siap bantu, kok! Mau chat lewat mana aja, tinggal pilih di bawah.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid gap-4 sm:gap-6">
              {contactInfo.map((info, index) => (
                <AnimatedSection key={index} animation="fade-left" delay={300 + index * 100}>
                  <Card className="hover:shadow-lg transition-all duration-500 hover-lift group">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 group-hover:scale-110 transition-all duration-300">
                          <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base group-hover:text-red-600 transition-colors duration-300">
                            {info.title}
                          </h3>
                          {info.details.map((detail, idx) => (
                            <p
                              key={idx}
                              className="text-gray-600 text-sm sm:text-base group-hover:text-gray-800 transition-colors duration-300"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            {/* Map Placeholder */}
            <AnimatedSection animation="scale-in" delay={700}>
  <Card className="overflow-hidden hover:shadow-lg transition-all duration-500 hover-lift group">
    <div className="w-full h-48 sm:h-64">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.0636326894405!2d109.13514420922522!3d-6.867406088925665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb77fd36c004f%3A0x1690aa60b5f0b5d8!2sAlun-Alun%20Kota%20Tegal!5e0!3m2!1sid!2sid!4v1750827842267!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
    </div>
  </Card>
</AnimatedSection>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-white py-12 sm:py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-red-100 rounded-full opacity-20 animate-float"></div>
          <div
            className="absolute bottom-20 left-10 w-24 h-24 bg-red-200 rounded-full opacity-30 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <AnimatedSection animation="scale-in">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                FAQ{" "}
                <span className="text-red-600 hover:text-red-700 transition-colors duration-300 cursor-default">
                  (Pertanyaan Umum)
                </span>
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-sm sm:text-base text-gray-600 hover:text-gray-800 transition-colors duration-300">
                Jawaban cepat untuk pertanyaan umum
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
             {
  question: "Jam berapa kalian melayani pengantaran?",
  answer:
    "Kami melayani pengantaran setiap hari, Senin sampai Minggu, dari jam 11.00 hingga 21.00. Pengantaran cepat tersedia untuk pesanan sebelum jam 19.00.",
},
{
  question: "Apakah kalian menyediakan layanan katering?",
  answer:
    "Ya! Kami melayani katering untuk berbagai jenis acara. Hubungi kami minimal 48 jam sebelumnya untuk pemesanan katering.",
},
{
  question: "Apakah bahan yang kalian gunakan segar?",
  answer:
    "Semua dim sum kami dibuat segar setiap hari dengan mentai dan tobiko premium yang langsung kami impor dari Jepang.",
},
{
  question: "Bisa nggak pesanan saya dikustomisasi?",
  answer:
    "Kami menyediakan opsi kustomisasi terbatas. Silakan cantumkan alergi, pantangan makanan, atau permintaan khusus saat memesan.",
},

            ].map((faq, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
                <Card className="hover:shadow-lg transition-all duration-500 hover-lift group">
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg group-hover:text-red-600 transition-colors duration-300">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
