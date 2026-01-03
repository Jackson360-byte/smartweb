"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, Check, Clock, ArrowLeft, Sparkles, MessageSquare, Mail, Zap } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  const [includeOrderBump, setIncludeOrderBump] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  })

  const isTestMode = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY?.startsWith("pk_test_")

  const basePrice = 300000
  const orderBumpPrice = 50000
  const totalPrice = includeOrderBump ? basePrice + orderBumpPrice : basePrice

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlePayment = async () => {
    if (!formData.email || !formData.firstName || !formData.lastName) {
      alert("Please fill in all required fields")
      return
    }

    setIsLoading(true)

    // Load Paystack inline script
    const script = document.createElement("script")
    script.src = "https://js.paystack.co/v1/inline.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      const handler = (window as any).PaystackPop.setup({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "pk_test_xxxxxxxxxxxxx",
        email: formData.email,
        amount: totalPrice * 100, // Paystack uses kobo
        currency: "NGN",
        ref: `DCYPHER_${Date.now()}_${Math.floor(Math.random() * 1000000)}`,
        metadata: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          includeOrderBump: includeOrderBump,
          custom_fields: [
            {
              display_name: "Customer Name",
              variable_name: "customer_name",
              value: `${formData.firstName} ${formData.lastName}`,
            },
            {
              display_name: "Order Bump",
              variable_name: "order_bump",
              value: includeOrderBump ? "AI Lead Follow-Up Automation" : "None",
            },
          ],
        },
        callback: (response: any) => {
          console.log("[v0] Payment successful:", response)
          // Payment successful - redirect to success/onboarding page
          window.location.href = `/checkout/success?reference=${response.reference}`
        },
        onClose: () => {
          console.log("[v0] Payment modal closed")
          setIsLoading(false)
        },
      })
      handler.openIframe()
    }
  }

  const includedFeatures = [
    "High-converting website design",
    "AI chat assistant (24/7 visitor response)",
    "Automated lead capture system",
    "Email & WhatsApp follow-ups",
    "Secure hosting & .com domain included",
    "Up to 10 custom emails with your domain",
    "Mobile-first, fast, SEO-ready build",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            <span className="text-xl font-bold text-foreground">DCYPHERNET</span>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </header>

      {isTestMode && (
        <div className="bg-yellow-500/10 border-b border-yellow-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <p className="text-center text-sm text-yellow-600 dark:text-yellow-400 font-medium">
              🧪 Test Mode Active - Use Paystack test cards to simulate payment
            </p>
          </div>
        </div>
      )}

      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Secure Your AI-Powered Website Today
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A done-for-you corporate or service website designed to generate leads, respond instantly, and automate
              follow-ups — without manual effort.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Order Summary */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-foreground">Order Summary</h2>
                  <div className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">50% OFF</div>
                </div>

                {/* Pricing */}
                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl text-muted-foreground line-through">₦600,000</span>
                    <span className="text-4xl font-bold text-foreground">₦300,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground">One-time payment. No hidden fees. No subscriptions.</p>
                </div>

                {/* What's Included */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
                    What You're Getting
                  </h3>
                  <ul className="space-y-3">
                    {includedFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm text-muted-foreground italic">
                  Everything you need to launch a smart, lead-generating website.
                </p>
              </div>

              {/* Order Bump */}
              <div
                className={`relative bg-card border-2 rounded-2xl p-6 transition-all cursor-pointer ${
                  includeOrderBump ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                }`}
                onClick={() => setIncludeOrderBump(!includeOrderBump)}
              >
                <div className="absolute -top-3 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  HIGHLY RECOMMENDED
                </div>

                <div className="flex items-start gap-4 pt-2">
                  <Checkbox
                    id="order-bump"
                    checked={includeOrderBump}
                    onCheckedChange={(checked) => setIncludeOrderBump(checked as boolean)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <Label htmlFor="order-bump" className="text-lg font-semibold text-foreground cursor-pointer">
                      Add AI Lead Follow-Up Automation
                    </Label>
                    <p className="text-muted-foreground mt-2 mb-4">
                      Automatically follow up with new leads via WhatsApp & Email the moment they submit a form — even
                      when you're offline.
                    </p>

                    <div className="grid sm:grid-cols-3 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <Zap className="h-4 w-4 text-primary" />
                        <span>Instant lead response</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        <span>Reduced lead drop-off</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <Mail className="h-4 w-4 text-primary" />
                        <span>Fully set up for you</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-foreground">₦50,000</span>
                      <span className="text-sm text-muted-foreground line-through">₦100,000</span>
                      <span className="text-xs text-primary font-medium">(50% OFF - only with this order)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-sm text-foreground">Secure payment processing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-sm text-foreground">Professional delivery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="text-sm text-foreground">Clear onboarding process</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span className="text-sm text-foreground">Built for business growth</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Payment Form */}
            <div>
              <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 sticky top-24">
                <h2 className="text-xl font-semibold text-foreground mb-6">Payment Details</h2>

                <div className="space-y-4 mb-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-foreground">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="mt-1.5 bg-background"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-foreground">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="mt-1.5 bg-background"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1.5 bg-background"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-foreground">
                      Phone Number (WhatsApp)
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1.5 bg-background"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                </div>

                {/* Order Total */}
                <div className="border-t border-border pt-6 mb-6">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">AI-Powered Website</span>
                      <span className="text-foreground">₦300,000</span>
                    </div>
                    {includeOrderBump && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">AI Lead Follow-Up Automation</span>
                        <span className="text-foreground">₦50,000</span>
                      </div>
                    )}
                  </div>
                  <div className="mb-4 p-3 bg-muted rounded-lg border border-border">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">Note:</span> Domain & hosting renewal:
                      ₦50,000/year after the first year
                    </p>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <span className="text-lg font-semibold text-foreground">Total</span>
                    <span className="text-2xl font-bold text-primary">{formatPrice(totalPrice)}</span>
                  </div>
                </div>

                <Button
                  onClick={handlePayment}
                  disabled={isLoading}
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
                >
                  {isLoading ? "Processing..." : "Complete Payment & Get Started"}
                </Button>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  You'll be redirected to a short onboarding form after payment.
                </p>

                {isTestMode && (
                  <div className="mt-6 p-4 bg-muted rounded-lg border border-border">
                    <p className="text-xs font-medium text-foreground mb-2">Test Cards:</p>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <p>
                        • <span className="font-mono">5531886652142950</span> (Mastercard - Success)
                      </p>
                      <p>
                        • <span className="font-mono">4084084084084081</span> (Visa - Success)
                      </p>
                      <p>• CVV: Any 3 digits | Expiry: Any future date | PIN: 1234</p>
                    </div>
                  </div>
                )}

                {/* Urgency Strip */}
                <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-xl">
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      Limited slots available to maintain quality delivery. Once slots are filled, this offer closes.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
