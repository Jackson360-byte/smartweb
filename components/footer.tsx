export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-secondary/20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-4">
          <span className="text-xl font-bold text-foreground">DCYPHERNET</span>
        </div>
        <p className="text-muted-foreground text-sm mb-2">AI-Powered Web Design & Automation</p>
        <a
          href="https://www.dcyphernet.com"
          className="text-primary hover:text-primary/80 text-sm transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.dcyphernet.com
        </a>
        <p className="mt-6 text-muted-foreground text-xs">
          © {new Date().getFullYear()} DCYPHERNET. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
