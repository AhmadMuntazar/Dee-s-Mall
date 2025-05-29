"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Shield, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AdminSetup() {
  const router = useRouter()
  const [isSetupComplete, setIsSetupComplete] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "Shop with Dee's",
    securityQuestion: "",
    securityAnswer: "",
  })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Check if admin setup is already complete
    const setupComplete = localStorage.getItem("adminSetupComplete")
    if (setupComplete === "true") {
      setIsSetupComplete(true)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long")
      setIsLoading(false)
      return
    }

    try {
      // In a real app, this would be an API call to create the admin user
      const adminData = {
        id: 1,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        role: "Super Admin",
        businessName: formData.businessName,
        createdAt: new Date().toISOString(),
        securityQuestion: formData.securityQuestion,
        // In production, never store passwords in localStorage - use secure backend
        passwordHash: btoa(formData.password), // This is just for demo
        securityAnswerHash: btoa(formData.securityAnswer.toLowerCase()),
      }

      // Store admin data (in production, this would be in a secure database)
      localStorage.setItem("adminUser", JSON.stringify(adminData))
      localStorage.setItem("adminSetupComplete", "true")

      // Set authentication
      localStorage.setItem("adminAuth", "true")

      setIsSetupComplete(true)

      // Redirect to admin dashboard after 2 seconds
      setTimeout(() => {
        router.push("/admin")
      }, 2000)
    } catch (error) {
      setError("Failed to create admin account. Please try again.")
    }

    setIsLoading(false)
  }

  if (isSetupComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Setup Complete!</h2>
            <p className="text-gray-600 mb-4">Your admin account has been created successfully.</p>
            <div className="space-y-2">
              <Button asChild className="w-full">
                <Link href="/admin">Go to Admin Dashboard</Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/">Back to Store</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto space-y-8">
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
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Admin Setup</h2>
          <p className="mt-2 text-sm text-gray-600">Create your admin account to manage your store</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-5 w-5" />
              Create Admin Account
            </CardTitle>
            <CardDescription>This will be the main administrator account for your store</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Khadija"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Muhammad"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Admin Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="admin@shopwithdees.com"
                />
              </div>

              <div>
                <Label htmlFor="businessName">Business Name</Label>
                <Input
                  id="businessName"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Minimum 8 characters"
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="Confirm your password"
                />
              </div>

              <div>
                <Label htmlFor="securityQuestion">Security Question</Label>
                <Input
                  id="securityQuestion"
                  required
                  value={formData.securityQuestion}
                  onChange={(e) => setFormData({ ...formData, securityQuestion: e.target.value })}
                  placeholder="What is your mother's maiden name?"
                />
              </div>

              <div>
                <Label htmlFor="securityAnswer">Security Answer</Label>
                <Input
                  id="securityAnswer"
                  required
                  value={formData.securityAnswer}
                  onChange={(e) => setFormData({ ...formData, securityAnswer: e.target.value })}
                  placeholder="Your answer"
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating Account..." : "Create Admin Account"}
              </Button>
            </form>
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
