"use client";

import Link from "next/link";
import { Button } from "../components/ui/button";
import { createCheckoutSession } from "../actions/create-checkout-session";
import { Sliders } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <header className="border-b border-white/10">
      <div className="container mx-auto px-4 md:py-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Sliders className="h-5 w-5 md:h-6 md:w-6 text-primary" />
          <span className="font-bold text-lg md:text-xl">Fader Keys</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <Link
            href="#about"
            className="px-3 py-2 text-md text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="#setup"
            className="px-3 py-2 text-md text-muted-foreground hover:text-foreground transition-colors"
          >
            Setup
          </Link>
          <SignedOut>
            <SignInButton mode="modal">
              <span className="px-3 py-2 text-md text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Sign in
              </span>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" userProfileUrl="/dashboard" />
          </SignedIn>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
