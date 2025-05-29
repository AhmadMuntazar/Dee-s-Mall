"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Eye, EyeOff, Lock, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AdminLogin() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [setupComplete, setSetupComplete] = useState(false)

  useEffect(() => {
    // Check if admin setup is complete
    const adminSetupComplete = localStorage.getItem("adminSetupComplete")
    setSetupComplete(adminSetupComplete === "true")
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Check if admin setup is complete
      if (setupComplete) {
        // Get admin user from localStorage
        const adminUserStr = localStorage.getItem("adminUser")
        if (!adminUserStr) {
          setError("Admin account not found. Please complete setup first.")
          setIsLoading(false)
          return
        }

        const adminUser = JSON.parse(adminUserStr)

        // Simple authentication check
        if (email === adminUser.email && btoa(password) === adminUser.passwordHash) {
          localStorage.setItem("adminAuth", "true")
          router.push("/admin")
        } else {
          setError("Invalid email or password")
        }
      } else {
        // If setup is not complete, use default credentials
        if (email === "admin@shopwithdees.com" && password === "admin123") {
          localStorage.setItem("adminAuth", "true")
          router.push("/admin")
        } else {
          setError("Invalid email or password")
        }
      }
    } catch (error) {
      setError("An error occurred. Please try again.")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="flex justify-center">
            <Image
              src="/images/shop-with-dees-logo.png"
              alt="Shop with Dee's"
              width={80}
              height={80}
              className="mx-auto"
            />
          </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Admin Login</h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to access the admin dashboard</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>Enter your credentials to access the admin panel</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative mt-1">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={setupComplete ? "Enter your email" : "admin@shopwithdees.com"}
                      className="pl-10"
                    />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative mt-1">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="pl-10 pr-10"
                    />
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <Link href="/admin/forgot-password" className="font-medium text-purple-600 hover:text-purple-500">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>

            {!setupComplete && (
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Demo Credentials</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-gray-50 rounded-md">
                  <p className="text-sm text-gray-600 text-center">
                    <strong>Email:</strong> admin@shopwithdees.com
                    <br />
                    <strong>Password:</strong> admin123
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                First time setup?{" "}
                <Link href="/admin/setup" className="font-medium text-purple-600 hover:text-purple-500">
                  Create Admin Account
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/" className="text-sm text-purple-600 hover:text-purple-500">
            ← Back to Store
          </Link>
        </div>
      </div>
    </div>
  )
}
