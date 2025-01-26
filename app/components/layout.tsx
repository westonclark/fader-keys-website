import Link from "next/link"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"
import { createCheckoutSession } from "../actions/create-checkout-session"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <nav className="flex items-center space-x-6">
            <Link href="#about" className="text-md text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#setup" className="text-md text-muted-foreground hover:text-foreground transition-colors">
              Setup
            </Link>
            <form action={createCheckoutSession} className="hidden md:flex">
              <Button type="submit" variant="outline" size="sm" className="border-white/10 hover:border-white/20">
                Download
              </Button>
            </form>
          </nav>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2024 Fader Keys. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
