import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Fader Keys",
  description: "Control your DAW faders with ease",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        elements: {
          card: "bg-background",
          navbar: "bg-background",
          footer: "bg-background",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className="bg-background text-foreground">
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
