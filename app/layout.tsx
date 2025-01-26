import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fader Keys',
  description: 'Control your DAW faders with ease',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-background dark:text-foreground bg-background text-foreground">{children}</body>
    </html>
  )
}
