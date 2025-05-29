"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart, User, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function SharedHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/shop-with-dees-logo.png"
            alt="Shop with Dee's"
            width={40}
            height={40}
            className="h-8 w-8 sm:h-10 sm:w-10"
          />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-gray-900 sm:text-xl">Shop with Dee's</h1>
            <p className="text-xs text-gray-600">Quality Products for Every Need</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
            Products
          </Link>
          <Link
            href="/new-arrivals"
            className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
          >
            New Arrivals
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
            Contact
          </Link>
          <Link href="/faq" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex items-center space-x-2 flex-1 max-w-sm mx-4">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input type="search" placeholder="Search products..." className="w-full pl-8" />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Search (Mobile) */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Search className="h-4 w-4" />
          </Button>

          {/* Cart */}
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Shopping cart</span>
            </Link>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-4 w-4" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/cart">Cart</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/shipping">Shipping</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/returns">Returns</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/admin">Admin Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/auth/login">Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/auth/register">Register</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input type="search" placeholder="Search products..." className="w-full pl-8" />
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              <Link
                href="/"
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/new-arrivals"
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                New Arrivals
              </Link>
              <Link
                href="/about"
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/faq"
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </nav>

            {/* Mobile Account Links */}
            <div className="border-t pt-4 space-y-2">
              <Link
                href="/auth/login"
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register
              </Link>
              <Link
                href="/profile"
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Profile
              </Link>
              <Link
                href="/admin"
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Admin Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
