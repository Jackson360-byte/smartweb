import { CreditCard, ClipboardList, Paintbrush, Rocket } from "lucide-react"

const steps = [
  {
    icon: CreditCard,
    step: "01",
    title: "Secure the Offer",
    description: "Complete your payment to lock in the discounted price.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Onboarding Form",
    description: "Fill out a short form so we understand your business needs.",
  },
  {
    icon: Paintbrush,
    step: "03",
    title: "Design & AI Integration",
    description: "We design your website and integrate AI automation systems.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Go Live",
    description: "Your AI-powered website launches and starts working for you.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A simple four-step process to get your AI-powered website live.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-px bg-border" />
              )}
              <div className="relative z-10 text-center">
                <div className="w-28 h-28 mx-auto mb-6 rounded-2xl bg-card border border-border flex flex-col items-center justify-center">
                  <span className="text-xs text-primary font-medium mb-2">Step {step.step}</span>
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm max-w-xs mx-auto">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
