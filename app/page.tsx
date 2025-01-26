import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import { HeroSection } from "./components/hero-section"
import { AboutSection } from "./components/about"

export default function Home({ searchParams }: { searchParams: { success?: string } }) {
  const success = searchParams.success === "true"

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {success && (
          <div className="bg-green-50 border-l-4 border-green-400 p-4 fixed top-20 right-4 z-50 shadow-lg rounded-r">
            <p className="font-medium">Thank you for your purchase!</p>
            <p className="text-sm text-green-700">Check your dashboard to download Fader Keys.</p>
          </div>
        )}
        <HeroSection />
        <AboutSection />
      </main>
      <Footer />
    </>
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
      </div>
    </div>
  )
}
