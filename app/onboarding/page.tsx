"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, Upload, ArrowRight, Sparkles, Loader2 } from "lucide-react"
import Link from "next/link"

export default function OnboardingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [formData, setFormData] = useState({
    businessName: "",
    businessEmail: "",
    businessPhone: "",
    industry: "",
    preferredDomain: "",
    websiteGoal: "",
    hasWebsite: "",
    aiAssistance: [] as string[],
    followUpChannel: "",
    brandColors: "",
    referenceWebsites: "",
    additionalNotes: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleAiAssistanceChange = (value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      aiAssistance: checked ? [...prev.aiAssistance, value] : prev.aiAssistance.filter((item) => item !== value),
    }))
  }

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const submissionData = {
        ...formData,
        hasLogo: logoFile !== null,
        logoFileName: logoFile?.name || null,
      }

      const response = await fetch("/api/submit-onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your form. Please try again or contact support.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">You're All Set!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Thank you for completing your onboarding. Our team will review your information and start building your
            AI-powered website right away. You'll hear from us within 24-48 hours.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-primary font-semibold">DCYPHERNET</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Build Your Website</h1>
          <p className="text-muted-foreground text-lg">
            Complete this quick form so we can create the perfect AI-powered website for your business.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Section 1: Business Information */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                1
              </span>
              Business Information
            </h2>
            <div className="space-y-5">
              <div>
                <Label htmlFor="businessName">Business Name *</Label>
                <Input
                  id="businessName"
                  required
                  value={formData.businessName}
                  onChange={(e) => handleInputChange("businessName", e.target.value)}
                  placeholder="Enter your business name"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="businessEmail">Business Email Address *</Label>
                <Input
                  id="businessEmail"
                  type="email"
                  required
                  value={formData.businessEmail}
                  onChange={(e) => handleInputChange("businessEmail", e.target.value)}
                  placeholder="you@yourbusiness.com"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="businessPhone">Business Phone Number *</Label>
                <Input
                  id="businessPhone"
                  type="tel"
                  required
                  value={formData.businessPhone}
                  onChange={(e) => handleInputChange("businessPhone", e.target.value)}
                  placeholder="+234 800 000 0000"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="industry">Industry / Service Type *</Label>
                <Input
                  id="industry"
                  required
                  value={formData.industry}
                  onChange={(e) => handleInputChange("industry", e.target.value)}
                  placeholder="e.g. Real Estate, Healthcare, Consulting"
                  className="mt-2"
                />
              </div>
              {/* Preferred Domain Name */}
              <div>
                <Label htmlFor="preferredDomain">Preferred Domain Name</Label>
                <Input
                  id="preferredDomain"
                  value={formData.preferredDomain}
                  onChange={(e) => handleInputChange("preferredDomain", e.target.value)}
                  placeholder="e.g. yourcompany.com (we'll help you register if needed)"
                  className="mt-2"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Website Goals */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                2
              </span>
              Website Goals
            </h2>
            <div className="space-y-6">
              <div>
                <Label className="text-base">What is the primary goal of your website? *</Label>
                <RadioGroup
                  value={formData.websiteGoal}
                  onValueChange={(value) => handleInputChange("websiteGoal", value)}
                  className="mt-3 space-y-3"
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="generate-leads" id="generate-leads" />
                    <Label htmlFor="generate-leads" className="font-normal cursor-pointer">
                      Generate leads
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="sell-services" id="sell-services" />
                    <Label htmlFor="sell-services" className="font-normal cursor-pointer">
                      Sell services
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="brand-credibility" id="brand-credibility" />
                    <Label htmlFor="brand-credibility" className="font-normal cursor-pointer">
                      Build brand credibility
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label className="text-base">Do you currently have a website? *</Label>
                <RadioGroup
                  value={formData.hasWebsite}
                  onValueChange={(value) => handleInputChange("hasWebsite", value)}
                  className="mt-3 space-y-3"
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="yes" id="has-website-yes" />
                    <Label htmlFor="has-website-yes" className="font-normal cursor-pointer">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="no" id="has-website-no" />
                    <Label htmlFor="has-website-no" className="font-normal cursor-pointer">
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          {/* Section 3: AI & Automation Preferences */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                3
              </span>
              AI & Automation Preferences
            </h2>
            <div className="space-y-6">
              <div>
                <Label className="text-base">How would you like AI to assist your business? *</Label>
                <div className="mt-3 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="lead-capture"
                      checked={formData.aiAssistance.includes("lead-capture")}
                      onCheckedChange={(checked) => handleAiAssistanceChange("lead-capture", checked as boolean)}
                    />
                    <Label htmlFor="lead-capture" className="font-normal cursor-pointer">
                      Lead capture
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="instant-responses"
                      checked={formData.aiAssistance.includes("instant-responses")}
                      onCheckedChange={(checked) => handleAiAssistanceChange("instant-responses", checked as boolean)}
                    />
                    <Label htmlFor="instant-responses" className="font-normal cursor-pointer">
                      Instant responses
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="follow-ups"
                      checked={formData.aiAssistance.includes("follow-ups")}
                      onCheckedChange={(checked) => handleAiAssistanceChange("follow-ups", checked as boolean)}
                    />
                    <Label htmlFor="follow-ups" className="font-normal cursor-pointer">
                      Follow-ups
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="all-above"
                      checked={formData.aiAssistance.includes("all-above")}
                      onCheckedChange={(checked) => handleAiAssistanceChange("all-above", checked as boolean)}
                    />
                    <Label htmlFor="all-above" className="font-normal cursor-pointer">
                      All of the above
                    </Label>
                  </div>
                </div>
              </div>
              <div>
                <Label className="text-base">Preferred follow-up channel *</Label>
                <RadioGroup
                  value={formData.followUpChannel}
                  onValueChange={(value) => handleInputChange("followUpChannel", value)}
                  className="mt-3 space-y-3"
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="email" id="channel-email" />
                    <Label htmlFor="channel-email" className="font-normal cursor-pointer">
                      Email
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="whatsapp" id="channel-whatsapp" />
                    <Label htmlFor="channel-whatsapp" className="font-normal cursor-pointer">
                      WhatsApp
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="both" id="channel-both" />
                    <Label htmlFor="channel-both" className="font-normal cursor-pointer">
                      Both
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          {/* Section 4: Branding & Content */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                4
              </span>
              Branding & Content
            </h2>
            <div className="space-y-5">
              <div>
                <Label htmlFor="logo">Do you have a logo? (Upload)</Label>
                <div className="mt-2">
                  <label
                    htmlFor="logo"
                    className="flex items-center justify-center gap-2 border-2 border-dashed border-border rounded-xl p-6 cursor-pointer hover:border-primary/50 transition-colors"
                  >
                    <Upload className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {logoFile ? logoFile.name : "Click to upload your logo"}
                    </span>
                  </label>
                  <input type="file" id="logo" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                </div>
              </div>
              <div>
                <Label htmlFor="brandColors">Brand Colors (if any)</Label>
                <Input
                  id="brandColors"
                  value={formData.brandColors}
                  onChange={(e) => handleInputChange("brandColors", e.target.value)}
                  placeholder="e.g. Navy blue, Gold, White"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="referenceWebsites">Any reference websites you like?</Label>
                <Textarea
                  id="referenceWebsites"
                  value={formData.referenceWebsites}
                  onChange={(e) => handleInputChange("referenceWebsites", e.target.value)}
                  placeholder="Paste URLs of websites you admire or want yours to look like"
                  className="mt-2"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Final Confirmation */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-6">Final Confirmation</h2>
            <div>
              <Label htmlFor="additionalNotes">Any additional notes or special requests?</Label>
              <Textarea
                id="additionalNotes"
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                placeholder="Tell us anything else we should know about your project"
                className="mt-2"
                rows={4}
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit & Begin My Website Build
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}
