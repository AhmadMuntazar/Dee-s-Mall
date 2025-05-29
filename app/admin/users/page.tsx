"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Plus, Edit, Trash2, Shield, User, Crown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"

const adminUsers = [
  {
    id: 1,
    name: "Khadija Muhammad",
    email: "khadija@shopwithdees.com",
    role: "Super Admin",
    status: "Active",
    permissions: ["All"],
    lastLogin: "2024-01-16",
    createdBy: "System",
  },
  {
    id: 2,
    name: "Fatima Abdullahi",
    email: "fatima@shopwithdees.com",
    role: "Admin",
    status: "Active",
    permissions: ["Products", "Orders", "Customers"],
    lastLogin: "2024-01-15",
    createdBy: "Khadija Muhammad",
  },
  {
    id: 3,
    name: "Amina Hassan",
    email: "amina@shopwithdees.com",
    role: "Staff",
    status: "Active",
    permissions: ["Orders", "Customer Support"],
    lastLogin: "2024-01-14",
    createdBy: "Khadija Muhammad",
  },
]

const rolePermissions = {
  "Super Admin": ["All Permissions"],
  Admin: ["Products", "Orders", "Customers", "Reports", "Settings"],
  Staff: ["Orders", "Customer Support", "Basic Reports"],
  Viewer: ["View Only Access"],
}

export default function AdminUsersPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [isAddUserOpen, setIsAddUserOpen] = useState(false)
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")

  useEffect(() => {
    // Check admin authentication
    const adminAuth = localStorage.getItem("adminAuth")
    const adminUser = localStorage.getItem("adminUser")

    if (adminAuth === "true" && adminUser) {
      setIsAuthenticated(true)
      setCurrentUser(JSON.parse(adminUser))
    } else {
      router.push("/admin/login")
    }
  }, [router])

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validation
    if (newUser.password !== newUser.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (newUser.password.length < 8) {
      setError("Password must be at least 8 characters long")
      return
    }

    // In a real app, this would be an API call
    console.log("Creating new admin user:", newUser)

    // Reset form
    setNewUser({
      name: "",
      email: "",
      role: "",
      password: "",
      confirmPassword: "",
    })
    setIsAddUserOpen(false)
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Admin User Management</h1>
          <p className="text-muted-foreground">Manage admin users and their permissions</p>
        </div>
        <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Admin User
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Admin User</DialogTitle>
              <DialogDescription>Create a new admin user with specific permissions</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateUser}>
              <div className="grid gap-4 py-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    required
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    placeholder="Enter full name"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    placeholder="admin@shopwithdees.com"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="role">Role</Label>
                  <Select value={newUser.role} onValueChange={(value) => setNewUser({ ...newUser, role: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="Staff">Staff</SelectItem>
                      <SelectItem value="Viewer">Viewer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={newUser.password}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                    placeholder="Minimum 8 characters"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    required
                    value={newUser.confirmPassword}
                    onChange={(e) => setNewUser({ ...newUser, confirmPassword: e.target.value })}
                    placeholder="Confirm password"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Create Admin User</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Current User Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Crown className="mr-2 h-5 w-5 text-yellow-500" />
            Your Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">
                {currentUser?.firstName?.[0]}
                {currentUser?.lastName?.[0]}
              </span>
            </div>
            <div>
              <p className="font-medium">
                {currentUser?.firstName} {currentUser?.lastName}
              </p>
              <p className="text-sm text-muted-foreground">{currentUser?.email}</p>
              <Badge variant="outline" className="mt-1">
                {currentUser?.role}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Admin Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Admin Users</CardTitle>
          <CardDescription>Manage admin users and their access levels</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Permissions</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead>Created By</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {adminUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={user.role === "Super Admin" ? "default" : "secondary"}>
                      {user.role === "Super Admin" && <Crown className="mr-1 h-3 w-3" />}
                      {user.role === "Admin" && <Shield className="mr-1 h-3 w-3" />}
                      {user.role === "Staff" && <User className="mr-1 h-3 w-3" />}
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={user.status === "Active" ? "outline" : "destructive"}>{user.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {user.permissions.slice(0, 2).map((permission) => (
                        <Badge key={permission} variant="outline" className="text-xs">
                          {permission}
                        </Badge>
                      ))}
                      {user.permissions.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{user.permissions.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
                  <TableCell>{user.createdBy}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon" disabled={user.role === "Super Admin"}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" disabled={user.role === "Super Admin"}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Role Permissions */}
      <Card>
        <CardHeader>
          <CardTitle>Role Permissions</CardTitle>
          <CardDescription>Overview of permissions for each role</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(rolePermissions).map(([role, permissions]) => (
              <Card key={role}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center">
                    {role === "Super Admin" && <Crown className="mr-2 h-4 w-4 text-yellow-500" />}
                    {role === "Admin" && <Shield className="mr-2 h-4 w-4 text-blue-500" />}
                    {role === "Staff" && <User className="mr-2 h-4 w-4 text-green-500" />}
                    {role === "Viewer" && <User className="mr-2 h-4 w-4 text-gray-500" />}
                    {role}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-1">
                    {permissions.map((permission) => (
                      <Badge key={permission} variant="outline" className="text-xs">
                        {permission}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
