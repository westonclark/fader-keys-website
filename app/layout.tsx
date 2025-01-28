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
  openGraph: {
    title: "Fader Keys",
    description: "Control your DAW faders with ease",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Fader Keys - DAW Controller",
      },
    ],
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
