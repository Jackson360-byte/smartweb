import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    // Prepare email content
    const emailContent = `
New Website Onboarding Form Submission
======================================

BUSINESS INFORMATION
--------------------
Business Name: ${formData.businessName}
Email: ${formData.businessEmail}
Phone: ${formData.businessPhone}
Industry: ${formData.industry}

WEBSITE GOALS
-------------
Primary Goal: ${formData.websiteGoal}
Has Existing Website: ${formData.hasWebsite}

AI & AUTOMATION PREFERENCES
---------------------------
AI Assistance: ${formData.aiAssistance.join(", ")}
Preferred Follow-up Channel: ${formData.followUpChannel}

BRANDING & CONTENT
------------------
Brand Colors: ${formData.brandColors || "Not provided"}
Reference Websites: ${formData.referenceWebsites || "Not provided"}

ADDITIONAL NOTES
----------------
${formData.additionalNotes || "None"}

Logo Uploaded: ${formData.hasLogo ? "Yes" : "No"}
    `.trim()

    console.log("[v0] Submitting onboarding form for:", formData.businessName)
    console.log("[v0] Using RESEND_API_KEY:", process.env.RESEND_API_KEY ? "Present" : "Missing")

    const emailPayload = {
      from: "DCYPHERNET Onboarding <onboarding@resend.dev>",
      to: ["dcyphernet@gmail.com"],
      subject: `New Onboarding: ${formData.businessName}`,
      text: emailContent,
      reply_to: formData.businessEmail,
    }

    console.log("[v0] Email payload:", emailPayload)

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailPayload),
    })

    const responseData = await response.json()
    console.log("[v0] Resend response status:", response.status)
    console.log("[v0] Resend response:", responseData)

    if (!response.ok) {
      console.error("[v0] Resend error:", responseData)
      throw new Error(`Failed to send email: ${JSON.stringify(responseData)}`)
    }

    console.log("[v0] Email sent successfully!")
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error submitting onboarding:", error)
    return NextResponse.json({ success: false, error: "Failed to submit form" }, { status: 500 })
  }
}
