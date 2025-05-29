import Link from "next/link"
import { ArrowLeft, Truck, Clock, MapPin, Package } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <Link href="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Shop with Dee's</span>
          </Link>
        </div>
      </header>

      <div className="container px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-8">Shipping Information</h1>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Shipping Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Shipping Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Standard Delivery</h3>
                  <p className="text-sm text-gray-600 mb-2">5-7 business days</p>
                  <p className="font-bold">₦2,500</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Express Delivery</h3>
                  <p className="text-sm text-gray-600 mb-2">2-3 business days</p>
                  <p className="font-bold">₦4,000</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Same Day Delivery</h3>
                  <p className="text-sm text-gray-600 mb-2">Within Lagos only</p>
                  <p className="font-bold">₦6,500</p>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Delivery Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Lagos State</h3>
                    <p className="text-sm text-gray-600">All areas including Mainland and Island</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Abuja (FCT)</h3>
                    <p className="text-sm text-gray-600">All districts and satellite towns</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Other States</h3>
                    <p className="text-sm text-gray-600">
                      We deliver to all 36 states in Nigeria. Delivery time may vary by location.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Processing Time */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Processing Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Order Processing</h3>
                    <p className="text-sm text-gray-600">
                      Orders are processed within 1-2 business days after payment confirmation.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Business Days</h3>
                    <p className="text-sm text-gray-600">Monday to Friday (excluding public holidays)</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Cut-off Time</h3>
                    <p className="text-sm text-gray-600">Orders placed before 2:00 PM are processed the same day.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Packaging */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Packaging & Handling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Secure Packaging</h3>
                    <p className="text-sm text-gray-600">
                      All items are carefully packaged to ensure they arrive in perfect condition.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Eco-Friendly Materials</h3>
                    <p className="text-sm text-gray-600">We use recyclable packaging materials whenever possible.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Tracking Information</h3>
                    <p className="text-sm text-gray-600">You'll receive tracking details once your order is shipped.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Important Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Free shipping on orders above ₦50,000 within Lagos and Abuja</li>
                <li>Delivery times may be extended during peak seasons and holidays</li>
                <li>We'll contact you if there are any delays with your order</li>
                <li>Please ensure someone is available to receive the package at the delivery address</li>
                <li>Additional charges may apply for remote locations</li>
                <li>Contact our customer service for any shipping-related questions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
