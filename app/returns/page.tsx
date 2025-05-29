import Link from "next/link"
import { ArrowLeft, RotateCcw, Clock, CheckCircle, XCircle } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ReturnsPage() {
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
          <h1 className="text-4xl font-bold tracking-tight mb-8">Returns & Exchanges</h1>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Return Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RotateCcw className="h-5 w-5" />
                  Return Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">30-Day Return Window</h3>
                  <p className="text-sm text-gray-600">
                    You have 30 days from the delivery date to return items for a full refund.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Condition Requirements</h3>
                  <p className="text-sm text-gray-600">
                    Items must be unused, in original packaging, and in the same condition as received.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Original Receipt</h3>
                  <p className="text-sm text-gray-600">Proof of purchase is required for all returns and exchanges.</p>
                </div>
              </CardContent>
            </Card>

            {/* Return Process */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  How to Return
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Contact Us</h4>
                      <p className="text-sm text-gray-600">Email or call our customer service team</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Get Return Label</h4>
                      <p className="text-sm text-gray-600">We'll provide a prepaid return shipping label</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Ship Item</h4>
                      <p className="text-sm text-gray-600">Package and ship the item back to us</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Receive Refund</h4>
                      <p className="text-sm text-gray-600">Refund processed within 5-7 business days</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Eligible Items */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Returnable Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Electronics (within 30 days)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Home appliances
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Bags and accessories
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Footwear (unworn)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Water bottles and containers
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Non-Returnable Items */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-600" />
                  Non-Returnable Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-600" />
                    Personal care items
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-600" />
                    Items damaged by misuse
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-600" />
                    Custom or personalized items
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-600" />
                    Items returned after 30 days
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-600" />
                    Items without original packaging
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Need Help with a Return?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-sm text-gray-600 mb-2">returns@shopwithdees.com</p>
                  <p className="text-xs text-gray-500">Response within 24 hours</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-sm text-gray-600 mb-2">+234 8039697289</p>
                  <p className="text-xs text-gray-500">Mon-Fri 9AM-6PM</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">WhatsApp</h3>
                  <p className="text-sm text-gray-600 mb-2">+234 8039697289</p>
                  <p className="text-xs text-gray-500">Quick response</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  Start Return Process
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
