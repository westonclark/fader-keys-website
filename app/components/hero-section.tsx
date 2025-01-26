import { Button } from "@/components/ui/button";
import { createCheckoutSession } from "@/app/actions/create-checkout-session";

export function HeroSection() {
  return (
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
  );
}
