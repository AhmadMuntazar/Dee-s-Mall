"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    category: "Orders & Payment",
    questions: [
      {
        question: "How do I place an order?",
        answer:
          "You can place an order by browsing our products, adding items to your cart, and proceeding to checkout. You'll need to create an account or sign in to complete your purchase.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We currently accept bank transfers to our First Bank Nigeria account. Payment details are provided during checkout, and you'll need to upload proof of payment for order confirmation.",
      },
      {
        question: "How long does it take to confirm my payment?",
        answer:
          "Payment confirmations are typically processed within 2-4 hours during business hours (9AM-6PM, Monday-Friday). You'll receive an email confirmation once your payment is verified.",
      },
      {
        question: "Can I cancel my order?",
        answer:
          "You can cancel your order within 2 hours of placing it, provided it hasn't been processed yet. Contact our customer service team immediately if you need to cancel.",
      },
    ],
  },
  {
    category: "Shipping & Delivery",
    questions: [
      {
        question: "How much does shipping cost?",
        answer:
          "Shipping costs vary by location and speed: Standard delivery (₦2,500), Express delivery (₦4,000), and Same-day delivery in Lagos (₦6,500). Free shipping on orders above ₦50,000 within Lagos and Abuja.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Standard delivery takes 5-7 business days, Express delivery takes 2-3 business days, and Same-day delivery is available within Lagos only.",
      },
      {
        question: "Do you deliver nationwide?",
        answer: "Yes, we deliver to all 36 states in Nigeria. Delivery times may vary depending on your location.",
      },
      {
        question: "How can I track my order?",
        answer:
          "Once your order is shipped, you'll receive a tracking number via email and SMS. You can also check your order status in your account dashboard.",
      },
    ],
  },
  {
    category: "Returns & Exchanges",
    questions: [
      {
        question: "What is your return policy?",
        answer:
          "We offer a 30-day return policy from the delivery date. Items must be unused, in original packaging, and in the same condition as received.",
      },
      {
        question: "How do I return an item?",
        answer:
          "Contact our customer service team to initiate a return. We'll provide a prepaid return shipping label, and you can ship the item back to us.",
      },
      {
        question: "When will I receive my refund?",
        answer: "Refunds are processed within 5-7 business days after we receive and inspect the returned item.",
      },
      {
        question: "Can I exchange an item instead of returning it?",
        answer:
          "Yes, we offer exchanges for different sizes or colors (where available). Contact us to arrange an exchange.",
      },
    ],
  },
  {
    category: "Account & Technical",
    questions: [
      {
        question: "How do I create an account?",
        answer:
          "Click on 'Sign Up' in the top menu, fill in your details, and verify your email address. Having an account allows you to track orders and save your cart for future purchases.",
      },
      {
        question: "I forgot my password. How do I reset it?",
        answer:
          "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a password reset link.",
      },
      {
        question: "How do I update my account information?",
        answer:
          "Log into your account and go to the Profile section where you can update your personal information, address, and preferences.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Yes, we use industry-standard security measures to protect your personal information. We never share your data with third parties without your consent.",
      },
    ],
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600">Find answers to common questions about shopping with us</p>
          </div>

          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const itemId = `${categoryIndex}-${questionIndex}`
                      const isOpen = openItems.includes(itemId)

                      return (
                        <div key={questionIndex} className="border rounded-lg">
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-medium">{faq.question}</span>
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500" />
                            )}
                          </button>
                          {isOpen && <div className="px-4 pb-3 text-gray-600">{faq.answer}</div>}
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Section */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Still Have Questions?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Can't find the answer you're looking for? Our customer service team is here to help.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-sm text-gray-600 mb-2">support@shopwithdees.com</p>
                  <p className="text-xs text-gray-500">Response within 24 hours</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Phone Support</h3>
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
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">Contact Us</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
