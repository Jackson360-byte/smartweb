import { Check } from "lucide-react"

export function ValueProposition() {
  const qualifications = [
    "Ideal for corporate brands & service providers",
    "Perfect if you want automated lead generation",
    "Best for businesses ready to scale with AI",
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-balance">Is This Right for You?</h2>

        <div className="flex flex-col items-center gap-4 mb-8">
          {qualifications.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="p-1 rounded-full bg-primary/20">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <span className="text-lg text-foreground">{item}</span>
            </div>
          ))}
        </div>

        <div className="inline-block px-6 py-3 rounded-lg bg-card border border-border">
          <p className="text-muted-foreground text-pretty">
            This is not a basic website — it's a <span className="text-primary font-medium">growth system</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
