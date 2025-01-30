export function Footer() {
  return (
    <footer className="border-t dark:border-white/10 light:border-black/10 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Questions? Email us at{" "}
            <a
              href="mailto:hello@faderkeys.com"
              className="text-primary hover:underline"
            >
              hello@faderkeys.com
            </a>
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          © 2024 Fader Keys. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
