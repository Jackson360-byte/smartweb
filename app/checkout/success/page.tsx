import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Mail, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-4">Payment Successful!</h1>

        <p className="text-lg text-muted-foreground mb-8">
          Thank you for your purchase. Your AI-powered website project is now confirmed. Please complete the onboarding
          form below so we can start building right away.
        </p>

        <div className="bg-card border border-border rounded-2xl p-6 mb-8 text-left">
          <h2 className="text-lg font-semibold text-foreground mb-4">What Happens Next?</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                1
              </div>
              <div>
                <p className="text-foreground font-medium">Complete Onboarding Form</p>
                <p className="text-sm text-muted-foreground">
                  Fill out a short questionnaire so we can customize your website.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                2
              </div>
              <div>
                <p className="text-foreground font-medium">Check Your Email</p>
                <p className="text-sm text-muted-foreground">
                  You'll receive a confirmation email with your receipt and project details.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                3
              </div>
              <div>
                <p className="text-foreground font-medium">We Start Building</p>
                <p className="text-sm text-muted-foreground">
                  Our team begins crafting your AI-powered website right away.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/onboarding">
              Complete Onboarding Form
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <a
            href="mailto:support@dcyphernet.com"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>support@dcyphernet.com</span>
          </a>
          <a
            href="https://wa.me/2349065710367"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <MessageSquare className="h-4 w-4" />
            <span>WhatsApp Support</span>
          </a>
        </div>
      </div>
    </div>
  )
}
