"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Search, Menu, Star, Truck, Shield, Headphones, ArrowRight, User, Settings } from "lucide-react"
import { AdminAccessButton } from "@/components/admin-access-button"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Sample product data
const featuredProducts = [
  {
    id: 1,
    name: "Bluetooth Wireless Headphones",
    price: 15000,
    originalPrice: 20000,
    image: "/images/headphones.png",
    rating: 4.5,
    reviews: 112,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Digital Sports Watch",
    price: 7500,
    originalPrice: 10000,
    image: "/images/watch.png",
    rating: 4.2,
    reviews: 78,
    badge: "New Arrival",
  },
  {
    id: 3,
    name: "Portable Water Bottle",
    price: 2500,
    originalPrice: 3000,
    image: "/images/water-bottle.png",
    rating: 4.8,
    reviews: 167,
    badge: "Sale",
  },
  {
    id: 4,
    name: "Kids School Backpack",
    price: 6000,
    originalPrice: 8000,
    image: "/images/backpack.png",
    rating: 4.3,
    reviews: 54,
    badge: "Hot Deal",
  },
]

const newArrivals = [
  {
    id: 5,
    name: "Ladies Handbag",
    price: 12000,
    image: "/images/handbag.png",
    rating: 4.7,
    reviews: 32,
  },
  {
    id: 6,
    name: "Men's Sneakers",
    price: 18000,
    image: "/images/sneakers.png",
    rating: 4.9,
    reviews: 61,
  },
  {
    id: 7,
    name: "Kitchen Blender",
    price: 9000,
    image: "/images/blender.png",
    rating: 4.4,
    reviews: 28,
  },
]

export default function HomePage() {
  const [cartItems, setCartItems] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This would come from auth context in real app

  const addToCart = () => {
    setCartItems((prev) => prev + 1)
  }

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SWD</span>
            </div>
            <span className="font-bold text-xl text-gray-800">Shop with Dee's</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        href="/products?category=appliances"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-100 hover:text-purple-900 focus:bg-purple-100 focus:text-purple-900"
                      >
                        <div className="text-sm font-medium leading-none">Home Appliances</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                          Essential appliances for your home
                        </p>
                      </Link>
                      <Link
                        href="/products?category=bags"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-100 hover:text-purple-900 focus:bg-purple-100 focus:text-purple-900"
                      >
                        <div className="text-sm font-medium leading-none">Bags & Accessories</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">Stylish bags and accessories</p>
                      </Link>
                      <Link
                        href="/products?category=essentials"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-100 hover:text-purple-900 focus:bg-purple-100 focus:text-purple-900"
                      >
                        <div className="text-sm font-medium leading-none">Daily Essentials</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">Water bottles and daily needs</p>
                      </Link>
                      <Link
                        href="/products?category=footwear"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-100 hover:text-purple-900 focus:bg-purple-100 focus:text-purple-900"
                      >
                        <div className="text-sm font-medium leading-none">Shoes & Sneakers</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                          Comfortable and trendy footwear
                        </p>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/new-arrivals"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-100 hover:text-purple-900 focus:bg-purple-100 focus:text-purple-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  New Arrivals
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/about"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-100 hover:text-purple-900 focus:bg-purple-100 focus:text-purple-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  About Us
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/contact"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-100 hover:text-purple-900 focus:bg-purple-100 focus:text-purple-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Contact Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input type="search" placeholder="Search products..." className="w-[200px] pl-8" />
              </div>
            </div>

            <Link href="/cart" className="relative">
              <Button variant="outline" size="icon">
                <ShoppingCart className="h-4 w-4" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* User Account */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/profile">My Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile?tab=orders">My Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile?tab=wishlist">Wishlist</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/admin" className="text-purple-600 font-medium">
                      <Settings className="mr-2 h-4 w-4" />
                      Admin Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Link href="/auth/login">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>Navigate through our store</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <Link href="/products" className="text-lg font-medium">
                    Our Products
                  </Link>
                  <Link href="/new-arrivals" className="text-lg font-medium">
                    New Arrivals
                  </Link>
                  <Link href="/about" className="text-lg font-medium">
                    About Us
                  </Link>
                  <Link href="/contact" className="text-lg font-medium">
                    Contact Us
                  </Link>
                  <div className="pt-4 border-t">
                    <Input placeholder="Search products..." />
                  </div>
                  {!isLoggedIn && (
                    <div className="pt-4 space-y-2">
                      <Link href="/auth/login">
                        <Button variant="outline" className="w-full">
                          Sign In
                        </Button>
                      </Link>
                      <Link href="/auth/register">
                        <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                          Sign Up
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-100 via-purple-100 to-orange-100">
        <div className="container px-4 py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                  New Collection Available
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900">
                  Your One-Stop Shop for Daily Essentials
                </h1>
                <p className="text-xl text-gray-600 max-w-[600px]">
                  Explore our wide range of products, from home appliances to fashion accessories, designed to make your
                  life easier and more stylish.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="text-lg px-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-purple-500"
                  >
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/new-arrivals">
                  <Button variant="outline" size="lg" className="text-lg px-8">
                    View New Arrivals
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero-products.png"
                alt="Featured Products"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-orange-50">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex items-center space-x-4">
              <div className="bg-pink-100 p-3 rounded-lg">
                <Truck className="h-6 w-6 text-pink-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Fast Delivery</h3>
                <p className="text-sm text-gray-600">Quick and reliable shipping nationwide</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-pink-100 p-3 rounded-lg">
                <Shield className="h-6 w-6 text-pink-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Secure Payment</h3>
                <p className="text-sm text-gray-600">Safe and secure payment confirmation</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-pink-100 p-3 rounded-lg">
                <Headphones className="h-6 w-6 text-pink-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">24/7 Support</h3>
                <p className="text-sm text-gray-600">Round-the-clock customer assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-gray-900">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-[600px] mx-auto">
              Discover our most popular items, carefully selected for quality and value
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
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
                    <Badge
                      className="absolute top-2 left-2"
                      variant={product.badge === "Sale" ? "destructive" : "secondary"}
                    >
                      {product.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <Link href={`/products/${product.id}`}>
                    <CardTitle className="text-lg mb-2 line-clamp-2 text-gray-800 hover:text-primary transition-colors">
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
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold">₦{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-600 line-through">
                        ₦{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-purple-500"
                    onClick={addToCart}
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/products">
              <Button variant="outline" size="lg">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-purple-50">
        <div className="container px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2 text-gray-900">New Arrivals</h2>
              <p className="text-gray-600">Check out our latest products</p>
            </div>
            <Link href="/new-arrivals">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {newArrivals.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Link href={`/products/${product.id}`}>
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={250}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    <Badge className="absolute top-2 left-2" variant="secondary">
                      New
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <Link href={`/products/${product.id}`}>
                    <CardTitle className="text-lg mb-2 text-gray-800 hover:text-primary transition-colors">
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
                  <Button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-purple-500"
                    onClick={addToCart}
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 text-gray-900">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for the latest products and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-purple-500">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-200 py-12">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-5">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SWD</span>
                </div>
                <span className="font-bold text-xl text-gray-800">Shop with Dee's</span>
              </div>
              <p className="text-gray-600">
                Your trusted partner for premium quality products and exceptional customer service.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-800">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-600 hover:text-gray-800">
                  About Us
                </Link>
                <Link href="/products" className="block text-gray-600 hover:text-gray-800">
                  Our Products
                </Link>
                <Link href="/new-arrivals" className="block text-gray-600 hover:text-gray-800">
                  New Arrivals
                </Link>
                <Link href="/contact" className="block text-gray-600 hover:text-gray-800">
                  Contact
                </Link>
                <Link href="/admin" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Admin Access
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-800">Customer Service</h3>
              <div className="space-y-2">
                <Link href="/shipping" className="block text-gray-600 hover:text-gray-800">
                  Shipping Info
                </Link>
                <Link href="/returns" className="block text-gray-600 hover:text-gray-800">
                  Returns
                </Link>
                <Link href="/faq" className="block text-gray-600 hover:text-gray-800">
                  FAQ
                </Link>
                <Link href="/contact" className="block text-gray-600 hover:text-gray-800">
                  Support
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-800">Contact Info</h3>
              <div className="space-y-2 text-gray-600">
                <p>Email: support@shopwithdees.com</p>
                <p>Phone: +234 8039697289</p>
                <p>Address: ShopWithDee's Abuja, Nigeria</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-800">Admin Access</h3>
              <div className="space-y-2">
                <Link href="/admin" className="block text-gray-600 hover:text-gray-800 font-medium">
                  Admin Dashboard
                </Link>
                <p className="text-xs text-gray-500">For authorized personnel only</p>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Shop with Dee's. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Admin Access Button */}
      <AdminAccessButton />
    </div>
  )
}
