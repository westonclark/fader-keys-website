export function AboutSection() {
    return (
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
    )
  }
