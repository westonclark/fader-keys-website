import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Layout } from "./components/layout"
import { createCheckoutSession } from "./actions/create-checkout-session"

export default function Home({ searchParams }: { searchParams: { success?: string } }) {
  const success = searchParams.success === "true"

  return (
    <Layout>
      {success && (
        <div className="bg-green-50 border-l-4 border-green-400 p-4 fixed top-20 right-4 z-50 shadow-lg rounded-r">
          <p className="font-medium">Thank you for your purchase!</p>
          <p className="text-sm text-green-700">Check your dashboard to download Fader Keys.</p>
        </div>
      )}

      {/* Hero Section - Trae-inspired */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="md:text-7xl text-6xl font-bold mb-6 bg-gradient-to-r from-rose-200 to-rose-300 bg-clip-text text-transparent">
            Fader Keys
          </h1>
          <p className="md:text-xl text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Control your DAW faders with just a computer keyboard
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <form action={createCheckoutSession}>
              <Button
                type="submit"
                size="lg"
                className="min-w-[200px] bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white border-0"
              >
                Download for macOS — $24.99
              </Button>
            </form>
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

      {/* About Section - New */}
      <section id="about" className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6">What is Fader Keys?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Fader Keys transforms your computer keyboard into a powerful DAW controller,
                  letting you control up to 8 faders simultaneously without external hardware.
                </p>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">✦</div>
                    <p>Control multiple faders using simple keyboard shortcuts (Q-A, W-S, etc.)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">✦</div>
                    <p>Adjustable fader sensitivity for precise control</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">✦</div>
                    <p>Compatible with Pro Tools HUI protocol</p>
                  </div>
                </div>
              </div>
              <div className="bg-black/20 rounded-lg p-6">
                <div className="text-sm font-mono">
                  <div className="mb-4">
                    <span className="text-rose-300">Quick Controls</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">CAPS LOCK</span>
                      <span>Toggle On/Off</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Q - A</span>
                      <span>Fader 1 Up/Down</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">W - S</span>
                      <span>Fader 2 Up/Down</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">E - D</span>
                      <span>Fader 3 Up/Down</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">1 - 2</span>
                      <span>Bank Left/Right</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue with Features Section ... */}
    </Layout>
  )
}

function FeatureRow({ title, description }: { title: string; description: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>
      <div className="bg-black/20 rounded-lg aspect-video">
        {/* Placeholder for feature screenshot/demo */}
      </div>
    </div>
  )
}
