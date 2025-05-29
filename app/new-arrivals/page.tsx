"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const newProducts = [
  {
    id: 5,
    name: "Ladies Handbag",
    price: 12000,
    image: "/images/handbag.png",
    rating: 4.7,
    reviews: 32,
    dateAdded: "2024-01-15",
  },
  {
    id: 6,
    name: "Men's Sneakers",
    price: 18000,
    image: "/images/sneakers.png",
    rating: 4.9,
    reviews: 61,
    dateAdded: "2024-01-12",
  },
  {
    id: 7,
    name: "Kitchen Blender",
    price: 9000,
    image: "/images/blender.png",
    rating: 4.4,
    reviews: 28,
    dateAdded: "2024-01-10",
  },
  {
    id: 8,
    name: "Wireless Mouse",
    price: 3500,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.2,
    reviews: 45,
    dateAdded: "2024-01-08",
  },
  {
    id: 9,
    name: "Phone Stand",
    price: 1500,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 23,
    dateAdded: "2024-01-05",
  },
  {
    id: 10,
    name: "Desk Lamp",
    price: 5500,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.3,
    reviews: 18,
    dateAdded: "2024-01-03",
  },
]

export default function NewArrivalsPage() {
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
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">New Arrivals</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our latest products, fresh from our suppliers and ready to enhance your daily life.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {newProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Link href={`/products/${product.id}`}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <Badge className="absolute top-2 left-2" variant="secondary">
                    New
                  </Badge>
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs">
                    {product.dateAdded}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <Link href={`/products/${product.id}`}>
                  <CardTitle className="text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                </Link>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                </div>
                <span className="text-2xl font-bold">₦{product.price.toLocaleString()}</span>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-purple-500">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Stay Updated on New Arrivals</h2>
          <p className="text-gray-600 mb-6">Be the first to know when we add new products to our collection.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 border rounded-md" />
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
