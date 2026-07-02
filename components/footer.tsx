export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-4">
            <p className="font-serif text-2xl tracking-wide text-foreground mb-4">Stillpoint</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Where Japanese minimalism meets Scandinavian warmth.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-7">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Navigate</p>
            <nav className="flex flex-col gap-3">
              <a href="#philosophy" className="text-sm text-foreground hover:text-sage transition-colors">
                Philosophy
              </a>
              <a href="#services" className="text-sm text-foreground hover:text-sage transition-colors">
                Services
              </a>
              <a href="#process" className="text-sm text-foreground hover:text-sage transition-colors">
                Process
              </a>
              <a href="#contact" className="text-sm text-foreground hover:text-sage transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Connect</p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                Instagram
              </a>
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                Pinterest
              </a>
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                LinkedIn
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Legal</p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                Terms
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Stillpoint Studio. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Crafted with intention</p>
        </div>
      </div>
    </footer>
  )
}
