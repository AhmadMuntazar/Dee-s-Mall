"use client"

import { DialogTrigger } from "@/components/ui/dialog"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ArrowLeft, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample cart data
const initialCartItems = [
  {
    id: 1,
    name: "Bluetooth Wireless Headphones",
    price: 45000,
    quantity: 1,
    image: "/images/headphones.png",
  },
  {
    id: 2,
    name: "Digital Sports Watch",
    price: 25000,
    quantity: 2,
    image: "/images/watch.png",
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [paymentProof, setPaymentProof] = useState<File | null>(null)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id))
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 2500
  const tax = subtotal * 0.075
  const total = subtotal + shipping + tax

  const handleCheckout = () => {
    // Logic to process checkout
    console.log("Order submitted for payment confirmation")
    setIsCheckoutOpen(false)
    // Redirect to order confirmation page
  }

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
        <h1 className="text-3xl font-bold tracking-tight mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Add some products to get started</p>
            <Link href="/">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="rounded-md object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-2xl font-bold">₦{item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button variant="outline" size="icon" onClick={() => removeItem(item.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₦{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>₦{shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>₦{tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>₦{total.toFixed(2)}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full" size="lg">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Proceed to Checkout
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle>Checkout</DialogTitle>
                        <DialogDescription>
                          Complete your order by providing your details and payment information.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        {/* Customer Information */}
                        <div className="space-y-4">
                          <h3 className="font-semibold">Customer Information</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="firstName">First Name</Label>
                              <Input id="firstName" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName">Last Name</Label>
                              <Input id="lastName" placeholder="Doe" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john@example.com" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" placeholder="+1 (555) 123-4567" />
                          </div>
                        </div>

                        {/* Shipping Address */}
                        <div className="space-y-4">
                          <h3 className="font-semibold">Shipping Address</h3>
                          <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <Input id="address" placeholder="123 Main St" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="city">City</Label>
                              <Input id="city" placeholder="New York" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="zipCode">ZIP Code</Label>
                              <Input id="zipCode" placeholder="10001" />
                            </div>
                          </div>
                        </div>

                        {/* Delivery Options */}
                        <div className="space-y-4">
                          <h3 className="font-semibold">Delivery Options</h3>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select delivery option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="standard">Standard Delivery (5-7 days) - ₦2,500</SelectItem>
                              <SelectItem value="express">Express Delivery (2-3 days) - ₦4,000</SelectItem>
                              <SelectItem value="sameday">Same Day Delivery (Lagos only) - ₦6,500</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Payment Information */}
                        <div className="space-y-4">
                          <h3 className="font-semibold">Payment Information</h3>
                          <div className="bg-muted p-4 rounded-lg space-y-2">
                            <p className="font-medium">Bank Transfer Details:</p>
                            <p className="text-sm">Bank: First Bank Nigeria</p>
                            <p className="text-sm">Account Name: Shop with Dee's</p>
                            <p className="text-sm">Account Number: 2087654321</p>
                            <p className="text-sm">Sort Code: 011151003</p>
                            <p className="text-sm font-medium text-primary">Total Amount: ₦{total.toFixed(2)}</p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="paymentProof">Upload Payment Proof</Label>
                            <Input
                              id="paymentProof"
                              type="file"
                              accept="image/*,.pdf"
                              onChange={(e) => setPaymentProof(e.target.files?.[0] || null)}
                            />
                            <p className="text-xs text-muted-foreground">
                              Upload a screenshot or photo of your bank transfer receipt
                            </p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="notes">Additional Notes (Optional)</Label>
                            <Textarea
                              id="notes"
                              placeholder="Any special instructions or notes about your order"
                              rows={3}
                            />
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button onClick={handleCheckout} className="w-full">
                          Submit Order for Confirmation
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>

              {/* Payment Info Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Payment Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>
                    <strong>Bank:</strong> First Bank Nigeria
                  </p>
                  <p>
                    <strong>Account Name:</strong> Shop with Dee's
                  </p>
                  <p>
                    <strong>Account Number:</strong> 2087654321
                  </p>
                  <p>
                    <strong>Sort Code:</strong> 011151003
                  </p>
                  <p className="text-xs text-muted-foreground mt-4">
                    After making your payment, please upload the receipt during checkout for order confirmation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
