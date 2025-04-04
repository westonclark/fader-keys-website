"use client";

import Link from "next/link";
import { Sliders } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function Navbar() {
  return (
    <header className="border-b dark:border-white/10 light:border-black/10">
      <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Sliders className="h-5 w-5 md:h-6 md:w-6 text-primary" />
          <span className="font-bold text-lg md:text-xl">Fader Keys</span>
        </Link>

        <nav className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <span className="px-3 py-2 text-md text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Sign in
              </span>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action label="manageAccount" />
                <UserButton.Link
                  label="My Products"
                  href="/dashboard"
                  labelIcon={<Sliders className="h-4 w-4" />}
                />
                <UserButton.Action label="signOut" />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </nav>
      </div>
    </header>
  );
}
