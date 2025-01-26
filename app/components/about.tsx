import Image from "next/image";

export function AboutSection() {
    return (
      <section id="about" className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">What is Fader Keys?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Fader Keys transforms your computer keyboard into a powerful DAW controller,
                  letting you control up to 8 faders simultaneously without external hardware.
                </p>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">✦</div>
                    <p>Control multiple faders at once using just the keys on your keyboard (Q-A, W-S, etc.)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">✦</div>
                    <p>Adjustable fader nudge sensitivity for precise control</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">✦</div>
                    <p>Easily accessable On / Off toggle and bank selection keys provide a seamless workflow</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/keyboard-layout.png"
                  alt="Keyboard Layout showing fader controls"
                  className="w-full h-auto"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
