import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";
import { Card, CardHeader, CardTitle } from "../components/ui/card";
import { getUserProducts } from "@/lib/db/users";
import { CopyButton } from "../components/ui/copy-button";
import { Download } from "lucide-react";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <div className="container max-w-6xl mx-auto px-4 pt-12 pb-16">
          <h1 className="text-4xl font-bold mb-6">My Products</h1>
          <ProductList userId={userId} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function ProductList({ userId }: { userId: string }) {
  const products = await getUserProducts(userId);

  if (!products?.length) {
    return (
      <Card className="border-white/10">
        <CardHeader>
          <CardTitle className="text-center text-muted-foreground">
            No products found
          </CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="grid gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          className="border-border/60 border bg-background relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_30px_-5px_rgba(244,114,182,0.3)] dark:border-white/10"
        >
          {/* Gradient background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <CardHeader className="relative">
            <div className="flex flex-col gap-4">
              <CardTitle className="text-2xl bg-gradient-to-r from-[hsl(var(--gradient-text-start))] to-[hsl(var(--gradient-text-end))] bg-clip-text text-transparent">
                Fader Keys
              </CardTitle>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="w-full sm:w-auto">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="text-sm text-muted-foreground whitespace-nowrap mb-2 sm:mb-0">
                        Serial Number:
                      </span>
                      <div className="flex items-center bg-muted/30 rounded-md px-3 py-1.5 w-full sm:w-auto">
                        <span className="mr-2 text-sm font-mono truncate">
                          {product.serial_number}
                        </span>
                        <CopyButton text={product.serial_number} />
                      </div>
                    </div>
                  </div>
                  <a
                    href="/Fader Keys Installer.zip"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-sm font-medium transition-colors w-full sm:w-auto"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
