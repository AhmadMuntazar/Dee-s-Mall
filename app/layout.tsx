import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Shop with Dee's - Quality Products for Every Need",
    template: "%s | Shop with Dee's",
  },
  description:
    "Discover quality products at Shop with Dee's. From home appliances to daily essentials, we have everything you need with fast delivery across Nigeria.",
  keywords: ["online shopping", "Nigeria", "home appliances", "daily essentials", "quality products"],
  authors: [{ name: "Shop with Dee's" }],
  creator: "Shop with Dee's",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://shopwithdees.com",
    title: "Shop with Dee's - Quality Products for Every Need",
    description:
      "Discover quality products at Shop with Dee's. From home appliances to daily essentials, we have everything you need.",
    siteName: "Shop with Dee's",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop with Dee's - Quality Products for Every Need",
    description:
      "Discover quality products at Shop with Dee's. From home appliances to daily essentials, we have everything you need.",
    creator: "@shopwithdees",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
