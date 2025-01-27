"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { createCheckoutSession } from "../actions/create-checkout-session";
import { Menu } from "lucide-react";

export function MobileMenu() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="menu" className="border-none">
        <AccordionTrigger className="text-md text-muted-foreground hover:no-underline">
          <Menu className="h-5 w-5" />
        </AccordionTrigger>
        <AccordionContent className="fixed left-0 right-0 top-[48px] border-t border-white/10 bg-background p-4 z-50">
          <div className="flex flex-col items-center gap-6 py-4">
            <Link
              href="#about"
              className="text-lg text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#setup"
              className="text-lg text-muted-foreground hover:text-foreground transition-colors"
            >
              Setup
            </Link>
            <SignedOut>
              <SignInButton mode="modal">
                <span className="text-lg text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  Sign in
                </span>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" userProfileUrl="/dashboard" />
            </SignedIn>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
