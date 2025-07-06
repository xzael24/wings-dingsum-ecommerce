"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { User, Package, MapPin, CreditCard } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const orderHistory = [
  {
    id: "#12345",
    date: "2024-01-15",
    status: "Delivered",
    total: 45.99,
    items: ["Signature Mentai Shumai", "Tobiko Har Gow"],
  },
  {
    id: "#12344",
    date: "2024-01-10",
    status: "Processing",
    total: 32.5,
    items: ["Dragon Roll Dumpling", "Mentai Tobiko Bao"],
  },
  {
    id: "#12343",
    date: "2024-01-05",
    status: "Delivered",
    total: 67.25,
    items: ["Spicy Mentai Gyoza", "Tobiko Xiao Long Bao", "Signature Mentai Shumai"],
  },
]

export default function AccountPage() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
  })

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Home",
      address: "123 Main St, Apt 4B",
      city: "New York, NY 10001",
      isDefault: true,
    },
    {
      id: 2,
      type: "Work",
      address: "456 Business Ave, Suite 200",
      city: "New York, NY 10002",
      isDefault: false,
    },
  ])

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <AnimatedSection animation="fade-up" className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 hover:text-red-600 transition-colors duration-300 cursor-default">
          My Account
        </h1>
        <p className="text-gray-600 hover:text-gray-800 transition-colors">
          Manage your account settings and order history
        </p>
      </AnimatedSection>

      <AnimatedSection animation="scale-in" delay={200}>
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-gray-100 hover:bg-gray-200 transition-colors">
            <TabsTrigger
              value="profile"
              className="flex items-center space-x-2 hover:text-red-600 transition-colors data-[state=active]:bg-red-600 data-[state=active]:text-white"
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </TabsTrigger>
            <TabsTrigger
              value="orders"
              className="flex items-center space-x-2 hover:text-red-600 transition-colors data-[state=active]:bg-red-600 data-[state=active]:text-white"
            >
              <Package className="w-4 h-4" />
              <span>Orders</span>
            </TabsTrigger>
            <TabsTrigger
              value="addresses"
              className="flex items-center space-x-2 hover:text-red-600 transition-colors data-[state=active]:bg-red-600 data-[state=active]:text-white"
            >
              <MapPin className="w-4 h-4" />
              <span>Addresses</span>
            </TabsTrigger>
            <TabsTrigger
              value="payment"
              className="flex items-center space-x-2 hover:text-red-600 transition-colors data-[state=active]:bg-red-600 data-[state=active]:text-white"
            >
              <CreditCard className="w-4 h-4" />
              <span>Payment</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="hover:shadow-lg transition-all duration-300 hover-lift">
                <CardHeader>
                  <CardTitle className="hover:text-red-600 transition-colors duration-300">
                    Profile Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group">
                      <Label htmlFor="name" className="group-hover:text-red-600 transition-colors">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        className="focus:border-red-500 transition-colors"
                      />
                    </div>
                    <div className="group">
                      <Label htmlFor="email" className="group-hover:text-red-600 transition-colors">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        className="focus:border-red-500 transition-colors"
                      />
                    </div>
                    <div className="group">
                      <Label htmlFor="phone" className="group-hover:text-red-600 transition-colors">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        value={profile.phone}
                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        className="focus:border-red-500 transition-colors"
                      />
                    </div>
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700 w-full sm:w-auto px-6 py-2 text-sm sm:text-base btn-animated hover-lift hover-glow">
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </TabsContent>

          <TabsContent value="orders">
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="hover:shadow-lg transition-all duration-300 hover-lift">
                <CardHeader>
                  <CardTitle className="hover:text-red-600 transition-colors duration-300">Order History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orderHistory.map((order, index) => (
                      <AnimatedSection key={order.id} animation="fade-up" delay={index * 100}>
                        <div className="border rounded-lg p-4 hover:border-red-500 hover:bg-red-50 transition-all duration-300 group">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-semibold group-hover:text-red-600 transition-colors">{order.id}</h3>
                              <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                                {order.date}
                              </p>
                            </div>
                            <div className="text-right">
                              <Badge
                                variant={order.status === "Delivered" ? "default" : "secondary"}
                                className="group-hover:scale-105 transition-transform"
                              >
                                {order.status}
                              </Badge>
                              <p className="font-semibold mt-1 group-hover:text-red-600 transition-colors">
                                ${order.total}
                              </p>
                            </div>
                          </div>
                          <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors mb-2">
                            {order.items.join(", ")}
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="hover:bg-red-50 hover:border-red-500 hover:text-red-600 transition-all duration-300"
                          >
                            View Details
                          </Button>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </TabsContent>

          <TabsContent value="addresses">
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="hover:shadow-lg transition-all duration-300 hover-lift">
                <CardHeader>
                  <CardTitle className="hover:text-red-600 transition-colors duration-300">Saved Addresses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {addresses.map((address, index) => (
                      <AnimatedSection key={address.id} animation="fade-up" delay={index * 100}>
                        <div className="border rounded-lg p-4 hover:border-red-500 hover:bg-red-50 transition-all duration-300 group">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center space-x-2 mb-1">
                                <h3 className="font-semibold group-hover:text-red-600 transition-colors">
                                  {address.type}
                                </h3>
                                {address.isDefault && (
                                  <Badge variant="secondary" className="group-hover:scale-105 transition-transform">
                                    Default
                                  </Badge>
                                )}
                              </div>
                              <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                                {address.address}
                              </p>
                              <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                                {address.city}
                              </p>
                            </div>
                            <div className="space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="hover:bg-red-50 hover:border-red-500 hover:text-red-600 transition-all duration-300"
                              >
                                Edit
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="hover:bg-red-50 hover:border-red-500 hover:text-red-600 transition-all duration-300"
                              >
                                Delete
                              </Button>
                            </div>
                          </div>
                        </div>
                      </AnimatedSection>
                    ))}
                    <Button className="bg-red-600 hover:bg-red-700 w-full sm:w-auto px-6 py-2 text-sm sm:text-base btn-animated hover-lift hover-glow">
                      Add New Address
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </TabsContent>

          <TabsContent value="payment">
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="hover:shadow-lg transition-all duration-300 hover-lift">
                <CardHeader>
                  <CardTitle className="hover:text-red-600 transition-colors duration-300">Payment Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 hover:border-red-500 hover:bg-red-50 transition-all duration-300 group">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold group-hover:scale-105 transition-transform">
                            VISA
                          </div>
                          <div>
                            <p className="font-semibold group-hover:text-red-600 transition-colors">
                              •••• •••• •••• 1234
                            </p>
                            <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                              Expires 12/25
                            </p>
                          </div>
                        </div>
                        <div className="space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="hover:bg-red-50 hover:border-red-500 hover:text-red-600 transition-all duration-300"
                          >
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="hover:bg-red-50 hover:border-red-500 hover:text-red-600 transition-all duration-300"
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700 w-full sm:w-auto px-6 py-2 text-sm sm:text-base btn-animated hover-lift hover-glow">
                      Add New Payment Method
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </TabsContent>
        </Tabs>
      </AnimatedSection>
    </div>
  )
}
