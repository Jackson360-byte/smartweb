export function ProblemSolution() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Problem Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
            <span className="text-sm text-destructive">The Problem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Most Websites Don't Actually Work
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Most business websites look professional but don't convert visitors. They miss leads, respond too slowly,
            and require constant manual follow-ups.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4 text-pretty">
            A website that doesn't generate leads is costing your business money every day.
          </p>
        </div>

        {/* Solution Section */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-12 rounded-2xl bg-card border border-primary/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5" />
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-sm text-primary">Our Solution</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                We Turn Websites Into Smart Sales Systems
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                DCYPHERNET builds AI-powered websites that work for your business 24/7.
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                Your website becomes an intelligent system that captures leads automatically, responds instantly with AI
                chat, follows up via Email or WhatsApp, and improves performance using real data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
