import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FinalCta() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
          Get a Website That Works for Your Business
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Stop settling for websites that just sit there. Get an AI-powered website designed to attract, engage, and
          convert customers automatically.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
          <Link href="/checkout">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <p className="mt-4 text-sm text-primary font-medium">Limited slots available</p>
      </div>
    </section>
  )
}
