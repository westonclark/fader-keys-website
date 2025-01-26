"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createCheckoutSession } from "../actions/create-checkout-session";
import { Sliders } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function Navbar() {
  return (
    <header className="border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Sliders className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">Fader Keys</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link
            href="#about"
            className="text-md text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="#setup"
            className="text-md text-muted-foreground hover:text-foreground transition-colors"
          >
            Setup
          </Link>
          <form action={createCheckoutSession} className="hidden md:flex">
            <Button
              type="submit"
              variant="outline"
              size="sm"
              className="border-white/10 hover:border-white/20"
            >
              Download
            </Button>
          </form>
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </nav>
      </div>
    </header>
  );
}
