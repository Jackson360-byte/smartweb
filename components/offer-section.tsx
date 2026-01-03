import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function OfferSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background with glow */}
          <div className="absolute inset-0 bg-card border border-border" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-sm text-primary font-medium">Limited Availability</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                Limited-Time AI Website Offer
              </h2>

              <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto text-pretty">
                For a limited time, you can get a fully built AI-powered website at a discounted price.
              </p>

              <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
                This offer is limited to a small number of businesses to maintain quality and results.
              </p>

              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              >
                <Link href="/checkout">
                  Secure This Offer Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <p className="mt-4 text-sm text-muted-foreground">One-time payment • No hidden fees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
