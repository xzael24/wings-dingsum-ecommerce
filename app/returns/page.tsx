import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RefreshCw, Shield, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Pengembalian & Refund - Wing's Dingsum Mentai Tobiko",
  description: "Pelajari kebijakan pengembalian, proses refund, dan jaminan kualitas kami.",
}

const returnReasons = [
  {
    icon: XCircle,
    title: "Masalah Kualitas",
    description: "Jika dimsum Anda tidak sesuai standar kualitas kami",
    action: "Refund penuh atau penggantian",
  },
  {
    icon: Clock,
    title: "Pengiriman Terlambat",
    description: "Pesanan datang jauh di luar estimasi waktu",
    action: "Refund sebagian atau kredit toko",
  },
  {
    icon: AlertCircle,
    title: "Pesanan Salah",
    description: "Menerima item yang salah atau ada yang kurang",
    action: "Penggantian langsung",
  },
  {
    icon: RefreshCw,
    title: "Kemasan Rusak",
    description: "Produk rusak saat pengiriman atau antar",
    action: "Refund penuh atau penggantian",
  },
]

const returnProcess = [
  {
    step: "1",
    title: "Hubungi Kami",
    description: "Laporkan dalam 24 jam setelah pesanan diterima via telepon, email, atau form kontak.",
  },
  {
    step: "2",
    title: "Kirim Detail",
    description: "Sertakan nomor pesanan, foto masalah, dan penjelasan singkat.",
  },
  {
    step: "3",
    title: "Proses Review",
    description: "Tim kami akan memeriksa dan merespons dalam 2 jam kerja.",
  },
  {
    step: "4",
    title: "Penyelesaian",
    description: "Refund, penggantian, atau kredit toko akan diberikan sesuai kasus.",
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
              Pengembalian & <span className="text-red-600">Refund</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
              Kepuasan Anda prioritas kami. Pelajari kebijakan pengembalian & jaminan kualitas kami.
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
              <CardTitle className="text-2xl sm:text-3xl text-gray-900">Jaminan Kualitas 100%</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
                Kami menjamin setiap dimsum yang kami buat. Jika Anda tidak puas, kami akan refund penuh atau ganti produk tanpa syarat.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Return Reasons */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Alasan <span className="text-red-600">Pengembalian</span> yang Diterima
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
            Proses <span className="text-red-600">Pengembalian</span>
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
            Detail <span className="text-red-600">Kebijakan</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  <span>Apa yang Dicakup</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-gray-600">• Masalah kualitas pada makanan</p>
                <p className="text-sm sm:text-base text-gray-600">• Item salah atau kurang</p>
                <p className="text-sm sm:text-base text-gray-600">• Kemasan rusak yang mempengaruhi kualitas makanan</p>
                <p className="text-sm sm:text-base text-gray-600">• Keterlambatan pengiriman signifikan</p>
                <p className="text-sm sm:text-base text-gray-600">• Kegagalan kontrol suhu</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl flex items-center space-x-2">
                  <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  <span>Apa yang Tidak Dicakup</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-gray-600">• Preferensi rasa pribadi</p>
                <p className="text-sm sm:text-base text-gray-600">• Pesanan yang sudah dikonsumsi lebih dari 50%</p>
                <p className="text-sm sm:text-base text-gray-600">• Masalah pengiriman akibat alamat salah</p>
                <p className="text-sm sm:text-base text-gray-600">• Klaim setelah 24 jam</p>
                <p className="text-sm sm:text-base text-gray-600">• Penyimpanan tidak sesuai setelah diterima</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Waktu Proses Refund</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-gray-600">• Refund kartu kredit: 3-5 hari kerja</p>
                <p className="text-sm sm:text-base text-gray-600">• Kredit toko: Langsung</p>
                <p className="text-sm sm:text-base text-gray-600">• Pengiriman pengganti: Diproses di hari yang sama</p>
                <p className="text-sm sm:text-base text-gray-600">• Refund PayPal: 1-2 hari kerja</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Kontak Pengembalian</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-gray-600">• Telepon: +62 812-3456-7890</p>
                <p className="text-sm sm:text-base text-gray-600">• Email: returns@wingsdingsum.com</p>
                <p className="text-sm sm:text-base text-gray-600">• Jam operasional: Senin-Minggu 09.00-21.00</p>
                <p className="text-sm sm:text-base text-gray-600">• Waktu respons: Maksimal 2 jam</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-white rounded-2xl p-6 sm:p-12 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Ada yang Mau Dikembalikan?</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Kami siap membantu! Hubungi kami segera jika ada masalah dengan pesanan Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-sm sm:text-base">
              <Link href="/contact">Hubungi Dukungan</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 text-sm sm:text-base"
            >
              <Link href="/products">Lanjut Belanja</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
