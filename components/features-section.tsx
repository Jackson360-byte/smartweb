import { Globe, MessageSquare, Zap, Shield, Smartphone, Target } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "High-Converting Website",
    description: "Professional corporate or service website designed to convert visitors into leads.",
  },
  {
    icon: MessageSquare,
    title: "AI Chat Assistant (24/7)",
    description: "Instant responses to visitors — even outside business hours.",
  },
  {
    icon: Zap,
    title: "Automated Lead Capture & Follow-ups",
    description: "Smart systems that capture leads and follow up automatically via Email or WhatsApp.",
  },
  {
    icon: Shield,
    title: "Secure Hosting & Domain Included",
    description: "Reliable hosting and domain setup included for complete peace of mind.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First, Fast, SEO-Ready",
    description: "Optimized for all devices with fast loading speeds and search engine visibility.",
  },
  {
    icon: Target,
    title: "Conversion-Focused Structure",
    description: "Strategic page layout designed to guide visitors toward taking action.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            What You Get With This Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to turn your website into a lead-generating machine.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
