"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  Plus,
  Edit,
  Trash2,
  Package,
  Users,
  DollarSign,
  TrendingUp,
  Eye,
  Check,
  X,
  MessageSquare,
  Settings,
  Home,
  ShoppingBag,
  CreditCard,
  BarChart2,
  Bell,
  Search,
  LogOut,
  Menu,
  Download,
  ChevronRight,
  Printer,
  User,
  Crown,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

// Sample data
const products = [
  {
    id: 1,
    name: "Bluetooth Wireless Headphones",
    price: 45000,
    stock: 45,
    category: "Home Appliances",
    status: "Active",
    image: "/images/headphones.png",
  },
  {
    id: 2,
    name: "Digital Sports Watch",
    price: 25000,
    stock: 23,
    category: "Bags & Accessories",
    status: "Active",
    image: "/images/watch.png",
  },
  {
    id: 3,
    name: "Kids School Backpack",
    price: 8500,
    stock: 0,
    category: "Bags & Accessories",
    status: "Out of Stock",
    image: "/images/backpack.png",
  },
  {
    id: 4,
    name: "Ladies Handbag",
    price: 15000,
    stock: 15,
    category: "Bags & Accessories",
    status: "Active",
    image: "/images/handbag.png",
  },
  {
    id: 5,
    name: "Men's Sneakers",
    price: 22000,
    stock: 30,
    category: "Footwear",
    status: "Active",
    image: "/images/sneakers.png",
  },
  {
    id: 6,
    name: "Kitchen Blender",
    price: 35000,
    stock: 10,
    category: "Home Appliances",
    status: "Active",
    image: "/images/blender.png",
  },
]

const orders = [
  {
    id: "ORD-001",
    customer: "Aisha Musa",
    email: "aisha@example.com",
    total: 45000,
    status: "Payment Pending",
    paymentProof: "transfer_receipt_001.jpg",
    date: "2024-01-15",
    items: ["Bluetooth Wireless Headphones"],
  },
  {
    id: "ORD-002",
    customer: "Chinedu Okoro",
    email: "chinedu@example.com",
    total: 33500,
    status: "Payment Confirmed",
    paymentProof: "bank_transfer_002.jpg",
    date: "2024-01-14",
    items: ["Digital Sports Watch", "Kids School Backpack"],
  },
  {
    id: "ORD-003",
    customer: "Ngozi Adebayo",
    email: "ngozi@example.com",
    total: 8500,
    status: "Shipped",
    paymentProof: "payment_003.jpg",
    date: "2024-01-13",
    items: ["Kids School Backpack"],
  },
]

const users = [
  {
    id: 1,
    name: "Aisha Musa",
    email: "aisha@example.com",
    role: "Customer",
    status: "Active",
    orders: 3,
    joined: "2023-12-10",
  },
  {
    id: 2,
    name: "Chinedu Okoro",
    email: "chinedu@example.com",
    role: "Customer",
    status: "Active",
    orders: 5,
    joined: "2023-11-22",
  },
  {
    id: 3,
    name: "Ngozi Adebayo",
    email: "ngozi@example.com",
    role: "Customer",
    status: "Active",
    orders: 1,
    joined: "2024-01-05",
  },
  {
    id: 4,
    name: "Khadija Muhammad",
    email: "khadija@shopwithdees.com",
    role: "Admin",
    status: "Active",
    orders: 0,
    joined: "2023-01-01",
  },
]

const supportTickets = [
  {
    id: "TKT-001",
    customer: "Aisha Musa",
    email: "aisha@example.com",
    subject: "Order Delivery Delay",
    status: "Open",
    priority: "High",
    date: "2024-01-16",
    lastUpdate: "2024-01-16",
  },
  {
    id: "TKT-002",
    customer: "Chinedu Okoro",
    email: "chinedu@example.com",
    subject: "Product Return Request",
    status: "In Progress",
    priority: "Medium",
    date: "2024-01-15",
    lastUpdate: "2024-01-16",
  },
  {
    id: "TKT-003",
    customer: "Ngozi Adebayo",
    email: "ngozi@example.com",
    subject: "Payment Confirmation Issue",
    status: "Closed",
    priority: "Low",
    date: "2024-01-14",
    lastUpdate: "2024-01-15",
  },
]

const categories = [
  "Home Appliances",
  "Bags & Accessories",
  "Daily Essentials",
  "Footwear",
  "Electronics",
  "Kitchen & Dining",
  "Beauty & Personal Care",
]

const nigerianStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT - Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
]

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isAddProductOpen, setIsAddProductOpen] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [isAddUserOpen, setIsAddUserOpen] = useState(false)
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false)
  const [newProductImage, setNewProductImage] = useState(null)
  const [activeTab, setActiveTab] = useState("dashboard")

  useEffect(() => {
    // Check admin authentication
    const adminAuth = localStorage.getItem("adminAuth")
    if (adminAuth === "true") {
      setIsAuthenticated(true)
    } else {
      router.push("/admin/login")
    }
    setIsLoading(false)
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p>Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  const handleConfirmPayment = (orderId) => {
    // Logic to confirm payment
    console.log("Payment confirmed for order:", orderId)
  }

  const handleRejectPayment = (orderId) => {
    // Logic to reject payment
    console.log("Payment rejected for order:", orderId)
  }

  const handleShipOrder = (orderId) => {
    // Logic to mark order as shipped
    console.log("Order shipped:", orderId)
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setNewProductImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Dashboard Layout */}
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 flex-col bg-white border-r">
          <div className="p-4 border-b">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/shop-with-dees-logo.png" alt="Shop with Dee's" width={40} height={40} />
              <div>
                <h1 className="font-bold text-lg">Shop with Dee's</h1>
                <p className="text-xs text-muted-foreground">Admin Dashboard</p>
              </div>
            </Link>
          </div>
          <nav className="flex-1 p-4 space-y-1">
            <Button
              variant={activeTab === "dashboard" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("dashboard")}
            >
              <BarChart2 className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button
              variant={activeTab === "products" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("products")}
            >
              <Package className="mr-2 h-4 w-4" />
              Products
            </Button>
            <Button
              variant={activeTab === "orders" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("orders")}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Orders
            </Button>
            <Button
              variant={activeTab === "payments" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("payments")}
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Payments
            </Button>
            <Button
              variant={activeTab === "users" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("users")}
            >
              <Users className="mr-2 h-4 w-4" />
              Users
            </Button>
            <Button
              variant={activeTab === "support" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("support")}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Support
            </Button>
            <Button
              variant={activeTab === "settings" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("settings")}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button
              variant={activeTab === "admin-users" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("admin-users")}
            >
              <Crown className="mr-2 h-4 w-4" />
              Admin Users
            </Button>
          </nav>
          <div className="p-4 border-t">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-600"
              onClick={() => {
                localStorage.removeItem("adminAuth")
                router.push("/admin/login")
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="border-b bg-white">
            <div className="flex h-16 items-center justify-between px-4">
              <div className="flex items-center md:hidden">
                <Button variant="outline" size="icon" className="mr-2">
                  <Menu className="h-4 w-4" />
                </Button>
                <Link href="/" className="flex items-center space-x-2">
                  <Image src="/images/shop-with-dees-logo.png" alt="Shop with Dee's" width={32} height={32} />
                  <span className="font-bold">Shop with Dee's</span>
                </Link>
              </div>
              <div className="hidden md:flex md:flex-1 md:items-center md:justify-start">
                <div className="relative w-full max-w-md">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input type="search" placeholder="Search..." className="w-full pl-8" />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-4 w-4" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                    3
                  </span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" alt="Admin" />
                        <AvatarFallback>AD</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">Khadija Muhammad</p>
                        <p className="text-xs leading-none text-muted-foreground">khadija@shopwithdees.com</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline" asChild>
                  <a href="/" target="_blank" rel="noreferrer">
                    <Home className="mr-2 h-4 w-4" />
                    View Store
                  </a>
                </Button>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
            {/* Dashboard Tab */}
            {activeTab === "dashboard" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                  <div className="flex items-center space-x-2">
                    <Select defaultValue="today">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="yesterday">Yesterday</SelectItem>
                        <SelectItem value="week">This Week</SelectItem>
                        <SelectItem value="month">This Month</SelectItem>
                        <SelectItem value="year">This Year</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">₦1,245,600</div>
                      <p className="text-xs text-muted-foreground">+18% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                      <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">89</div>
                      <p className="text-xs text-muted-foreground">+23% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">156</div>
                      <p className="text-xs text-muted-foreground">+12 new registrations</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">7</div>
                      <p className="text-xs text-muted-foreground">Awaiting confirmation</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="lg:col-span-4">
                    <CardHeader>
                      <CardTitle>Recent Orders</CardTitle>
                      <CardDescription>Latest 5 orders placed on your store</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {orders.slice(0, 5).map((order) => (
                            <TableRow key={order.id}>
                              <TableCell className="font-medium">{order.id}</TableCell>
                              <TableCell>{order.customer}</TableCell>
                              <TableCell>
                                <Badge
                                  variant={
                                    order.status === "Payment Confirmed"
                                      ? "default"
                                      : order.status === "Shipped"
                                        ? "secondary"
                                        : "destructive"
                                  }
                                >
                                  {order.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">₦{order.total.toLocaleString()}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                      <Button variant="ghost" size="sm" onClick={() => setActiveTab("orders")}>
                        View all orders
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Support Tickets</CardTitle>
                      <CardDescription>Latest customer support requests</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {supportTickets.slice(0, 3).map((ticket) => (
                          <div key={ticket.id} className="flex items-start space-x-4">
                            <Badge
                              variant={
                                ticket.status === "Open"
                                  ? "destructive"
                                  : ticket.status === "In Progress"
                                    ? "default"
                                    : "secondary"
                              }
                              className="mt-0.5"
                            >
                              {ticket.status}
                            </Badge>
                            <div className="space-y-1">
                              <p className="text-sm font-medium leading-none">{ticket.subject}</p>
                              <p className="text-sm text-muted-foreground">
                                {ticket.customer} • {ticket.date}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                      <Button variant="ghost" size="sm" onClick={() => setActiveTab("support")}>
                        View all tickets
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                {/* Low Stock Alert */}
                <Card>
                  <CardHeader>
                    <CardTitle>Low Stock Alert</CardTitle>
                    <CardDescription>Products that need to be restocked soon</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Product</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Current Stock</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {products
                          .filter((product) => product.stock < 15)
                          .map((product) => (
                            <TableRow key={product.id}>
                              <TableCell className="font-medium">{product.name}</TableCell>
                              <TableCell>{product.category}</TableCell>
                              <TableCell>{product.stock}</TableCell>
                              <TableCell>
                                <Badge variant={product.stock === 0 ? "destructive" : "default"}>
                                  {product.stock === 0 ? "Out of Stock" : "Low Stock"}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <Button variant="outline" size="sm">
                                  Restock
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Products Tab */}
            {activeTab === "products" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold tracking-tight">Products</h1>
                  <div className="flex items-center space-x-2">
                    <Dialog open={isAddCategoryOpen} onOpenChange={setIsAddCategoryOpen}>
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          <Plus className="mr-2 h-4 w-4" />
                          Add Category
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Add New Category</DialogTitle>
                          <DialogDescription>Create a new product category for your store.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="categoryName">Category Name</Label>
                            <Input id="categoryName" placeholder="Enter category name" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="categoryDescription">Description (Optional)</Label>
                            <Textarea id="categoryDescription" placeholder="Brief description of this category" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="parentCategory">Parent Category (Optional)</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select parent category" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="none">None (Top Level)</SelectItem>
                                {categories.map((category) => (
                                  <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, "-")}>
                                    {category}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Add Category</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <Dialog open={isAddProductOpen} onOpenChange={setIsAddProductOpen}>
                      <DialogTrigger asChild>
                        <Button>
                          <Plus className="mr-2 h-4 w-4" />
                          Add Product
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[700px]">
                        <DialogHeader>
                          <DialogTitle>Add New Product</DialogTitle>
                          <DialogDescription>Add a new product to your store inventory.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="name">Product Name</Label>
                              <Input id="name" placeholder="Enter product name" />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="price">Price (₦)</Label>
                              <Input id="price" type="number" placeholder="0.00" />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="stock">Stock Quantity</Label>
                              <Input id="stock" type="number" placeholder="0" />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="category">Category</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                  {categories.map((category) => (
                                    <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, "-")}>
                                      {category}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" placeholder="Product description" rows={4} />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="image">Product Image</Label>
                              <div className="flex items-center gap-2">
                                <Input
                                  id="image"
                                  type="file"
                                  accept="image/*"
                                  onChange={handleImageUpload}
                                  className="flex-1"
                                />
                              </div>
                            </div>
                            <div className="grid gap-2">
                              <Label>Image Preview</Label>
                              <div className="border rounded-md h-[100px] flex items-center justify-center bg-gray-50">
                                {newProductImage ? (
                                  <img
                                    src={newProductImage || "/placeholder.svg"}
                                    alt="Product preview"
                                    className="h-full object-contain"
                                  />
                                ) : (
                                  <span className="text-gray-400 text-sm">No image selected</span>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="sku">SKU (Optional)</Label>
                              <Input id="sku" placeholder="Stock Keeping Unit" />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="weight">Weight (kg, Optional)</Label>
                              <Input id="weight" type="number" placeholder="0.00" />
                            </div>
                          </div>
                          <div className="grid gap-2">
                            <Label>Product Status</Label>
                            <div className="flex items-center space-x-2">
                              <Switch id="product-status" defaultChecked />
                              <Label htmlFor="product-status">Active (visible in store)</Label>
                            </div>
                          </div>
                          <div className="grid gap-2">
                            <Label>Featured Product</Label>
                            <div className="flex items-center space-x-2">
                              <Switch id="featured-product" />
                              <Label htmlFor="featured-product">Show on homepage</Label>
                            </div>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Add Product</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Product Inventory</CardTitle>
                        <CardDescription>Manage your product catalog</CardDescription>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Input placeholder="Search products..." className="w-[250px]" />
                        <Select defaultValue="all">
                          <SelectTrigger className="w-[150px]">
                            <SelectValue placeholder="Filter by category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, "-")}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Image</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Stock</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {products.map((product) => (
                          <TableRow key={product.id}>
                            <TableCell>
                              <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                width={50}
                                height={50}
                                className="rounded-md object-cover"
                              />
                            </TableCell>
                            <TableCell className="font-medium">{product.name}</TableCell>
                            <TableCell>₦{product.price.toLocaleString()}</TableCell>
                            <TableCell>{product.stock}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>
                              <Badge variant={product.status === "Active" ? "default" : "destructive"}>
                                {product.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="icon">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon">
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Showing <strong>1</strong> to <strong>{products.length}</strong> of{" "}
                      <strong>{products.length}</strong> products
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" disabled>
                        Previous
                      </Button>
                      <Button variant="outline" size="sm" disabled>
                        Next
                      </Button>
                    </div>
                  </CardFooter>
                </Card>

                {/* Product Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle>Product Categories</CardTitle>
                    <CardDescription>Manage your product categories</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Category Name</TableHead>
                          <TableHead>Products</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {categories.map((category, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{category}</TableCell>
                            <TableCell>{products.filter((product) => product.category === category).length}</TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold tracking-tight">Orders</h1>
                  <div className="flex items-center space-x-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Orders</SelectItem>
                        <SelectItem value="pending">Payment Pending</SelectItem>
                        <SelectItem value="confirmed">Payment Confirmed</SelectItem>
                        <SelectItem value="shipped">Shipped</SelectItem>
                        <SelectItem value="delivered">Delivered</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Order Management</CardTitle>
                    <CardDescription>Track and manage customer orders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Order ID</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Total</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {orders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>
                              <div>
                                <div className="font-medium">{order.customer}</div>
                                <div className="text-sm text-muted-foreground">{order.email}</div>
                              </div>
                            </TableCell>
                            <TableCell>₦{order.total.toLocaleString()}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  order.status === "Payment Confirmed"
                                    ? "default"
                                    : order.status === "Shipped"
                                      ? "secondary"
                                      : "destructive"
                                }
                              >
                                {order.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="icon">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                {order.status === "Payment Confirmed" && (
                                  <Button variant="outline" size="sm" onClick={() => handleShipOrder(order.id)}>
                                    Ship Order
                                  </Button>
                                )}
                                {order.status === "Payment Pending" && (
                                  <div className="flex space-x-1">
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="text-green-600"
                                      onClick={() => handleConfirmPayment(order.id)}
                                    >
                                      <Check className="mr-1 h-4 w-4" />
                                      Confirm
                                    </Button>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="text-red-600"
                                      onClick={() => handleRejectPayment(order.id)}
                                    >
                                      <X className="mr-1 h-4 w-4" />
                                      Reject
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Showing <strong>1</strong> to <strong>{orders.length}</strong> of <strong>{orders.length}</strong>{" "}
                      orders
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" disabled>
                        Previous
                      </Button>
                      <Button variant="outline" size="sm" disabled>
                        Next
                      </Button>
                    </div>
                  </CardFooter>
                </Card>

                {/* Order Details Dialog */}
                <Dialog>
                  <DialogContent className="sm:max-w-[700px]">
                    <DialogHeader>
                      <DialogTitle>Order Details - ORD-001</DialogTitle>
                      <DialogDescription>Complete information about this order</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-sm font-medium">Customer Information</h3>
                          <div className="mt-2 space-y-1 text-sm">
                            <p>Aisha Musa</p>
                            <p>aisha@example.com</p>
                            <p>+234 8012345678</p>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">Shipping Address</h3>
                          <div className="mt-2 space-y-1 text-sm">
                            <p>123 Garki Street</p>
                            <p>Abuja, FCT - Abuja</p>
                            <p>Nigeria</p>
                          </div>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <h3 className="text-sm font-medium mb-2">Order Items</h3>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Product</TableHead>
                              <TableHead>Quantity</TableHead>
                              <TableHead>Price</TableHead>
                              <TableHead className="text-right">Total</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>Bluetooth Wireless Headphones</TableCell>
                              <TableCell>1</TableCell>
                              <TableCell>₦45,000</TableCell>
                              <TableCell className="text-right">₦45,000</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                      <Separator />
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-sm font-medium mb-2">Payment Information</h3>
                          <div className="space-y-1 text-sm">
                            <p>
                              <span className="font-medium">Method:</span> Bank Transfer
                            </p>
                            <p>
                              <span className="font-medium">Status:</span> Payment Pending
                            </p>
                            <p>
                              <span className="font-medium">Date:</span> 2024-01-15
                            </p>
                            <div className="mt-2">
                              <Button variant="outline" size="sm">
                                View Payment Proof
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium mb-2">Order Summary</h3>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span>Subtotal:</span>
                              <span>₦45,000</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Shipping:</span>
                              <span>₦2,500</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Tax:</span>
                              <span>₦3,375</span>
                            </div>
                            <Separator className="my-2" />
                            <div className="flex justify-between font-medium">
                              <span>Total:</span>
                              <span>₦50,875</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <DialogFooter className="flex justify-between">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Printer className="mr-2 h-4 w-4" />
                          Print
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="text-red-600">
                          <X className="mr-2 h-4 w-4" />
                          Cancel Order
                        </Button>
                        <Button size="sm">
                          <Check className="mr-2 h-4 w-4" />
                          Confirm Payment
                        </Button>
                      </div>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            )}

            {/* Payments Tab */}
            {activeTab === "payments" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold tracking-tight">Payment Confirmations</h1>
                  <div className="flex items-center space-x-2">
                    <Select defaultValue="pending">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Payments</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="confirmed">Confirmed</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Pending Payment Confirmations</CardTitle>
                    <CardDescription>Review and confirm customer payments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {orders
                        .filter((order) => order.status === "Payment Pending")
                        .map((order) => (
                          <Card key={order.id}>
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between">
                                <div className="space-y-2">
                                  <div className="flex items-center space-x-4">
                                    <h3 className="font-semibold">{order.id}</h3>
                                    <Badge variant="outline">{order.status}</Badge>
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    <p>
                                      Customer: {order.customer} ({order.email})
                                    </p>
                                    <p>Total: ₦{order.total.toLocaleString()}</p>
                                    <p>Date: {order.date}</p>
                                    <p>Items: {order.items.join(", ")}</p>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <span className="text-sm font-medium">Payment Proof:</span>
                                    <Button variant="link" className="p-0 h-auto">
                                      {order.paymentProof}
                                    </Button>
                                  </div>
                                </div>
                                <div className="flex space-x-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleConfirmPayment(order.id)}
                                    className="text-green-600 border-green-600 hover:bg-green-50"
                                  >
                                    <Check className="h-4 w-4 mr-2" />
                                    Confirm
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleRejectPayment(order.id)}
                                    className="text-red-600 border-red-600 hover:bg-red-50"
                                  >
                                    <X className="h-4 w-4 mr-2" />
                                    Reject
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Payment History */}
                <Card>
                  <CardHeader>
                    <CardTitle>Payment History</CardTitle>
                    <CardDescription>Record of all payment transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Order ID</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {orders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>{order.customer}</TableCell>
                            <TableCell>₦{order.total.toLocaleString()}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  order.status === "Payment Confirmed"
                                    ? "default"
                                    : order.status === "Shipped"
                                      ? "secondary"
                                      : "destructive"
                                }
                              >
                                {order.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell>
                              <Button variant="outline" size="sm">
                                <Eye className="mr-2 h-4 w-4" />
                                View
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Payment Information Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                    <CardDescription>Bank account details for customer payments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Bank Name</Label>
                        <p className="text-sm font-medium">First Bank Nigeria</p>
                      </div>
                      <div className="space-y-2">
                        <Label>Account Name</Label>
                        <p className="text-sm font-medium">Shop with Dee's</p>
                      </div>
                      <div className="space-y-2">
                        <Label>Account Number</Label>
                        <p className="text-sm font-medium">2087654321</p>
                      </div>
                      <div className="space-y-2">
                        <Label>Sort Code</Label>
                        <p className="text-sm font-medium">011151003</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline">
                        <Edit className="mr-2 h-4 w-4" />
                        Update Payment Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Users Tab */}
            {activeTab === "users" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold tracking-tight">Users</h1>
                  <div className="flex items-center space-x-2">
                    <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
                      <DialogTrigger asChild>
                        <Button>
                          <Plus className="mr-2 h-4 w-4" />
                          Add User
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Add New User</DialogTitle>
                          <DialogDescription>Create a new user account.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="firstName">First Name</Label>
                              <Input id="firstName" placeholder="John" />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="lastName">Last Name</Label>
                              <Input id="lastName" placeholder="Doe" />
                            </div>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john@example.com" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" placeholder="+234 8012345678" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="role">Role</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select role" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="customer">Customer</SelectItem>
                                <SelectItem value="admin">Admin</SelectItem>
                                <SelectItem value="staff">Staff</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Add User</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>User Management</CardTitle>
                        <CardDescription>Manage user accounts and permissions</CardDescription>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Input placeholder="Search users..." className="w-[250px]" />
                        <Select defaultValue="all">
                          <SelectTrigger className="w-[150px]">
                            <SelectValue placeholder="Filter by role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Roles</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="staff">Staff</SelectItem>
                            <SelectItem value="customer">Customer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Orders</TableHead>
                          <TableHead>Joined</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {users.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell className="font-medium">{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                              <Badge variant={user.role === "Admin" ? "default" : "secondary"}>{user.role}</Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant={user.status === "Active" ? "outline" : "destructive"}>
                                {user.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{user.orders}</TableCell>
                            <TableCell>{user.joined}</TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="icon">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Showing <strong>1</strong> to <strong>{users.length}</strong> of <strong>{users.length}</strong>{" "}
                      users
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" disabled>
                        Previous
                      </Button>
                      <Button variant="outline" size="sm" disabled>
                        Next
                      </Button>
                    </div>
                  </CardFooter>
                </Card>

                {/* User Roles */}
                <Card>
                  <CardHeader>
                    <CardTitle>User Roles & Permissions</CardTitle>
                    <CardDescription>Manage access levels for different user roles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Role</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Users</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Admin</TableCell>
                          <TableCell>Full access to all features and settings</TableCell>
                          <TableCell>1</TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm">
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Permissions
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Staff</TableCell>
                          <TableCell>Limited access to manage orders and products</TableCell>
                          <TableCell>0</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Permissions
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Customer</TableCell>
                          <TableCell>Access to personal account and order history</TableCell>
                          <TableCell>3</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Permissions
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Support Tab */}
            {activeTab === "support" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold tracking-tight">Support Tickets</h1>
                  <div className="flex items-center space-x-2">
                    <Select defaultValue="open">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Tickets</SelectItem>
                        <SelectItem value="open">Open</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="resolved">Resolved</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Support Ticket Management</CardTitle>
                    <CardDescription>Manage customer support requests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Ticket ID</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Subject</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Priority</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {supportTickets.map((ticket) => (
                          <TableRow key={ticket.id}>
                            <TableCell className="font-medium">{ticket.id}</TableCell>
                            <TableCell>
                              <div>
                                <div className="font-medium">{ticket.customer}</div>
                                <div className="text-sm text-muted-foreground">{ticket.email}</div>
                              </div>
                            </TableCell>
                            <TableCell>{ticket.subject}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  ticket.status === "Open"
                                    ? "destructive"
                                    : ticket.status === "In Progress"
                                      ? "default"
                                      : "secondary"
                                }
                              >
                                {ticket.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{ticket.priority}</TableCell>
                            <TableCell>{ticket.date}</TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="icon">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Showing <strong>1</strong> to <strong>{supportTickets.length}</strong> of{" "}
                      <strong>{supportTickets.length}</strong> tickets
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" disabled>
                        Previous
                      </Button>
                      <Button variant="outline" size="sm" disabled>
                        Next
                      </Button>
                    </div>
                  </CardFooter>
                </Card>

                {/* Support Ticket Details Dialog */}
                <Dialog>
                  <DialogContent className="sm:max-w-[700px]">
                    <DialogHeader>
                      <DialogTitle>Support Ticket Details - TKT-001</DialogTitle>
                      <DialogDescription>Complete information about this support ticket</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-sm font-medium">Customer Information</h3>
                          <div className="mt-2 space-y-1 text-sm">
                            <p>Aisha Musa</p>
                            <p>aisha@example.com</p>
                            <p>+234 8012345678</p>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">Ticket Information</h3>
                          <div className="mt-2 space-y-1 text-sm">
                            <p>
                              <span className="font-medium">Status:</span> Open
                            </p>
                            <p>
                              <span className="font-medium">Priority:</span> High
                            </p>
                            <p>
                              <span className="font-medium">Date:</span> 2024-01-16
                            </p>
                          </div>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <h3 className="text-sm font-medium mb-2">Ticket Subject</h3>
                        <p>Order Delivery Delay</p>
                      </div>
                      <Separator />
                      <div>
                        <h3 className="text-sm font-medium mb-2">Conversation</h3>
                        <div className="space-y-4">
                          <div className="bg-gray-50 p-4 rounded-md">
                            <div className="flex items-center justify-between mb-2">
                              <div className="font-medium">Aisha Musa</div>
                              <div className="text-sm text-muted-foreground">2024-01-16 10:30 AM</div>
                            </div>
                            <p>My order has been delayed for over a week. Can you please provide an update?</p>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-md">
                            <div className="flex items-center justify-between mb-2">
                              <div className="font-medium">Admin</div>
                              <div className="text-sm text-muted-foreground">2024-01-16 11:00 AM</div>
                            </div>
                            <p>
                              We apologize for the delay. We are looking into the issue and will get back to you soon.
                            </p>
                          </div>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <h3 className="text-sm font-medium mb-2">Add Reply</h3>
                        <Textarea placeholder="Enter your reply here" rows={4} />
                        <div className="mt-2 flex justify-end">
                          <Button>Send Reply</Button>
                        </div>
                      </div>
                    </div>
                    <DialogFooter className="flex justify-between">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Printer className="mr-2 h-4 w-4" />
                          Print
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="text-red-600">
                          <X className="mr-2 h-4 w-4" />
                          Close Ticket
                        </Button>
                        <Button size="sm">
                          <Check className="mr-2 h-4 w-4" />
                          Resolve Ticket
                        </Button>
                      </div>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
                <Card>
                  <CardHeader>
                    <CardTitle>General Settings</CardTitle>
                    <CardDescription>Configure your store settings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="storeName">Store Name</Label>
                        <Input id="storeName" placeholder="Shop with Dee's" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="storeEmail">Store Email</Label>
                        <Input id="storeEmail" type="email" placeholder="info@shopwithdees.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="storePhone">Store Phone</Label>
                        <Input id="storePhone" placeholder="+234 8012345678" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="storeAddress">Store Address</Label>
                        <Textarea id="storeAddress" placeholder="123 Garki Street, Abuja" rows={3} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="storeCountry">Country</Label>
                        <Select defaultValue="nigeria">
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nigeria">Nigeria</SelectItem>
                            <SelectItem value="ghana">Ghana</SelectItem>
                            <SelectItem value="kenya">Kenya</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="storeState">State</Label>
                        <Select defaultValue="fct-abuja">
                          <SelectTrigger>
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            {nigerianStates.map((state) => (
                              <SelectItem key={state} value={state.toLowerCase().replace(/\s+/g, "-")}>
                                {state}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline">
                        <Edit className="mr-2 h-4 w-4" />
                        Update General Settings
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Settings</CardTitle>
                    <CardDescription>Configure payment methods for your store</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h3 className="text-sm font-medium">Bank Transfer</h3>
                          <p className="text-sm text-muted-foreground">Enable or disable bank transfer payments</p>
                        </div>
                        <Switch id="bankTransfer" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h3 className="text-sm font-medium">Card Payments</h3>
                          <p className="text-sm text-muted-foreground">Enable or disable card payments via Paystack</p>
                        </div>
                        <Switch id="cardPayments" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h3 className="text-sm font-medium">Wallet Payments</h3>
                          <p className="text-sm text-muted-foreground">Enable or disable wallet payments</p>
                        </div>
                        <Switch id="walletPayments" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline">
                        <Edit className="mr-2 h-4 w-4" />
                        Update Payment Settings
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Shipping Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Settings</CardTitle>
                    <CardDescription>Configure shipping options and rates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h3 className="text-sm font-medium">Flat Rate Shipping</h3>
                          <p className="text-sm text-muted-foreground">Set a flat rate for all orders</p>
                        </div>
                        <Input type="number" placeholder="0.00" className="w-24" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h3 className="text-sm font-medium">Free Shipping</h3>
                          <p className="text-sm text-muted-foreground">
                            Enable free shipping for orders above a certain amount
                          </p>
                        </div>
                        <Input type="number" placeholder="0.00" className="w-24" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline">
                        <Edit className="mr-2 h-4 w-4" />
                        Update Shipping Settings
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Notification Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>Configure email and SMS notifications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h3 className="text-sm font-medium">Order Confirmation Emails</h3>
                          <p className="text-sm text-muted-foreground">
                            Send email notifications to customers when their order is confirmed
                          </p>
                        </div>
                        <Switch id="orderConfirmationEmails" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h3 className="text-sm font-medium">Shipping Updates via SMS</h3>
                          <p className="text-sm text-muted-foreground">
                            Send SMS notifications to customers when their order is shipped
                          </p>
                        </div>
                        <Switch id="shippingUpdatesSMS" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline">
                        <Edit className="mr-2 h-4 w-4" />
                        Update Notification Settings
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "admin-users" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold tracking-tight">Admin Users</h1>
                  <Button asChild>
                    <Link href="/admin/users">
                      <Settings className="mr-2 h-4 w-4" />
                      Manage Admin Users
                    </Link>
                  </Button>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Admin Access Control</CardTitle>
                    <CardDescription>Manage who has access to the admin dashboard</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-medium">Super Admin</h3>
                          <p className="text-sm text-muted-foreground">Full access to all features</p>
                        </div>
                        <Badge variant="default">1 User</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-medium">Admin</h3>
                          <p className="text-sm text-muted-foreground">Manage products, orders, and customers</p>
                        </div>
                        <Badge variant="secondary">1 User</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-medium">Staff</h3>
                          <p className="text-sm text-muted-foreground">Limited access to orders and support</p>
                        </div>
                        <Badge variant="outline">1 User</Badge>
                      </div>
                    </div>
                    <div className="mt-6 flex space-x-2">
                      <Button asChild>
                        <Link href="/admin/users">
                          <Plus className="mr-2 h-4 w-4" />
                          Add Admin User
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/admin/setup">
                          <Settings className="mr-2 h-4 w-4" />
                          Admin Setup
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
