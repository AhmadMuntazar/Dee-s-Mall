"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Settings, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AdminAccessButton() {
  const [isVisible, setIsVisible] = useState(true)
  const [setupComplete, setSetupComplete] = useState(false)

  useEffect(() => {
    // Check if admin setup is complete
    const adminSetupComplete = localStorage.getItem("adminSetupComplete")
    setSetupComplete(adminSetupComplete === "true")
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-500 hover:bg-red-600 text-white border-0"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-3 w-3" />
        </Button>
        <Link href={setupComplete ? "/admin" : "/admin/setup"}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-purple-500 shadow-lg"
          >
            <Settings className="mr-2 h-5 w-5" />
            {setupComplete ? "Admin" : "Setup Admin"}
          </Button>
        </Link>
      </div>
    </div>
  )
}
