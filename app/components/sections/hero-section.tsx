"use client";

import { Button } from "../ui/button";
import { createCheckoutSession } from "@/app/actions/stripe/create-checkout-session";
import { useAuth } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";

export function HeroSection() {
  const { isSignedIn } = useAuth();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="md:text-7xl text-6xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--gradient-text-start))] to-[hsl(var(--gradient-text-end))] bg-clip-text text-transparent py-2">
          Fader Keys
        </h1>
        <p className="md:text-xl text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          A Virtual MIDI Fader Controller
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {isSignedIn ? (
            <form action={createCheckoutSession}>
              <Button
                type="submit"
                size="lg"
                className="min-w-[200px] bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white border-0"
              >
                {"Download for macOS — $24.99"}
              </Button>
            </form>
          ) : (
            <SignInButton mode="modal">
              <Button
                size="lg"
                className="min-w-[200px] bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white border-0"
              >
                {"Download for macOS — $24.99"}
              </Button>
            </SignInButton>
          )}
        </div>
        <div className="mt-16 text-sm text-muted-foreground">
          <p className="mb-2">Supported Applications</p>
          <div className="flex justify-center gap-8 mt-4 text-muted-foreground/40">
            <span>ProTools</span>
            <span>Logic</span>
            <span>Ableton</span>
            <span>And many more...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
