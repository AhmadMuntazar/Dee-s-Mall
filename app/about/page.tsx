import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Users, Award, Globe, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <Link href="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Store</span>
          </Link>
        </div>
      </header>

      <div className="container px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">About Shop with Dee's</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're passionate about bringing you the finest selection of daily essentials, home appliances, bags, shoes,
            and more, combining quality, convenience, and exceptional customer service.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded by Dee as a small business, Shop with Dee's began with a simple mission: to provide high-quality
                products that enhance people's daily lives. What started as a local venture has grown into a trusted
                online destination for customers.
              </p>
              <p>
                Our journey has been driven by our commitment to excellence, convenience, and customer satisfaction. We
                carefully curate every product in our catalog, ensuring that each item meets our standards for quality
                and value.
              </p>
              <p>
                Today, we're proud to serve many satisfied customers, offering everything from daily essentials to home
                appliances, all backed by our exceptional customer service and support.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Our team at work"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Quality First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We never compromise on quality. Every product is carefully selected and tested to ensure it meets our
                  high standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Customer Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our customers are at the heart of everything we do. We're committed to providing exceptional service
                  and support.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We stay ahead of the curve, constantly seeking out the latest innovations and technologies to offer
                  our customers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe in building lasting relationships with our customers and contributing positively to our
                  community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Meet Our Team</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <Image
                  src="/images/khadija-founder.jpg"
                  alt="Khadija Muhammad Ahmad"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle>Khadija Muhammad Ahmad</CardTitle>
                <p className="text-muted-foreground">Founder & CEO</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Khadija founded Shop with Dee's with a vision to make quality products accessible to everyone. She
                  leads our team with passion and dedication.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Chukwuemeka Okeke"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle>Buhari Tanko</CardTitle>
                <p className="text-muted-foreground">Head of Operations</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Buhari ensures our operations run smoothly, from inventory management to customer fulfillment,
                  maintaining our high service standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Ngozi Obi"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle>Ahmad Muhammad</CardTitle>
                <p className="text-muted-foreground">Customer Success Manager</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ahmad leads our customer support team, ensuring every customer receives the personalized attention and
                  support they deserve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-muted/50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Our Impact</h2>
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1,000+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <p className="text-muted-foreground">Products Available</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.5/5</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Shop with Dee's for their essential needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="text-lg px-8">
                Shop Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
