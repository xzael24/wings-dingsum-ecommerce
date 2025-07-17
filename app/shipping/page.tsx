import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Clock, Shield, MapPin, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Informasi Pengiriman - Wing's Dingsum Mentai Tobiko",
  description: "Pelajari tentang opsi pengiriman, area pengantaran, dan kebijakan kami.",
}

const shippingOptions = [
  {
    icon: Truck,
    title: "Pengiriman Reguler",
    time: "5-7 Hari Kerja",
    price: "Gratis untuk pesanan di atas Rp750.000",
    description: "Opsi pengiriman standar untuk sebagian besar pesanan. Cocok untuk yang sudah direncanakan.",
  },
  {
    icon: Clock,
    title: "Pengiriman Ekspres",
    time: "2-3 Hari Kerja",
    price: "Rp200.000",
    description: "Pengiriman lebih cepat jika ingin dimsum segera sampai.",
  },
  {
    icon: Shield,
    title: "Pengiriman Hari yang Sama",
    time: "Dalam 4 Jam",
    price: "Rp300.000",
    description: "Tersedia di area tertentu. Pesan sebelum jam 2 siang untuk pengiriman di hari yang sama.",
  },
]

const deliveryAreas = [
  "Jakarta Pusat",
  "Jakarta Barat",
  "Jakarta Timur",
  "Jakarta Selatan",
  "Jakarta Utara",
  "Tangerang",
  "Bekasi",
  "Depok",
]

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Pengiriman & <span className="text-red-600">Antar</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
              Dimsum segar diantar langsung ke rumah Anda. Pelajari opsi pengiriman dan area layanan kami.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:py-16">
        {/* Shipping Options */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Opsi <span className="text-red-600">Pengiriman</span>
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
                Area <span className="text-red-600">Pengantaran</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Saat ini kami melayani pengantaran ke area berikut. Tidak menemukan lokasi Anda? Hubungi kami untuk pengantaran khusus.
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
                  <span className="text-lg sm:text-xl">Kemasan & Kesegaran</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base text-gray-600">• Kemasan berinsulasi untuk menjaga suhu</p>
                <p className="text-sm sm:text-base text-gray-600">• Bahan ramah lingkungan & dapat didaur ulang</p>
                <p className="text-sm sm:text-base text-gray-600">
                  • Jaminan dimsum tetap hangat maksimal 2 jam setelah dibuat
                </p>
                <p className="text-sm sm:text-base text-gray-600">• Petunjuk pemanasan ulang disertakan</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Shipping Policies */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Kebijakan <span className="text-red-600">Pengiriman</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Proses Pesanan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-gray-600">• Pesanan sebelum jam 2 siang diproses di hari yang sama</p>
                <p className="text-sm sm:text-base text-gray-600">• Pesanan akhir pekan diproses hari Senin</p>
                <p className="text-sm sm:text-base text-gray-600">• Info resi akan dikirimkan via email</p>
                <p className="text-sm sm:text-base text-gray-600">• Pesanan khusus butuh pemberitahuan 1-2 hari sebelumnya</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Panduan Pengantaran</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-gray-600">• Harus ada penerima di lokasi saat pesanan tiba</p>
                <p className="text-sm sm:text-base text-gray-600">• Kami akan menghubungi 15 menit sebelum tiba</p>
                <p className="text-sm sm:text-base text-gray-600">• Pengantaran tanpa kontak fisik tersedia atas permintaan</p>
                <p className="text-sm sm:text-base text-gray-600">• Pengantaran ke lobi apartemen diperbolehkan</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Kontrol Suhu</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-gray-600">• Tas berinsulasi menjaga suhu tetap optimal</p>
                <p className="text-sm sm:text-base text-gray-600">• Es kering digunakan untuk pengiriman jarak jauh</p>
                <p className="text-sm sm:text-base text-gray-600">• Maksimal waktu pengantaran 4 jam</p>
                <p className="text-sm sm:text-base text-gray-600">• Segera simpan di kulkas setelah diterima</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Permintaan Khusus</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-gray-600">• Permintaan diet khusus bisa dilayani</p>
                <p className="text-sm sm:text-base text-gray-600">• Katering perusahaan tersedia</p>
                <p className="text-sm sm:text-base text-gray-600">• Layanan bungkus kado tersedia</p>
                <p className="text-sm sm:text-base text-gray-600">• Pesanan besar diterima dengan pemberitahuan sebelumnya</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-white rounded-2xl p-6 sm:p-12 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Siap Pesan?</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Rasakan dimsum premium kami diantar segar ke rumah Anda. Gratis ongkir untuk pesanan di atas Rp750.000!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-sm sm:text-base">
              <Link href="/products">Lihat Menu</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 text-sm sm:text-base"
            >
              <Link href="/contact">Hubungi Kami</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
