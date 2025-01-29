import { Card, CardHeader, CardTitle } from "../components/ui/card";
import { getUserProducts } from "../actions/db";
import { CopyButton } from "../components/copy-button";
import { Download } from "lucide-react";

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
          className="border-white/10 border bg-background relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_30px_-5px_rgba(244,114,182,0.2)]"
        >
          {/* Gradient background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <CardHeader className="relative">
            <div className="flex flex-col gap-4">
              <CardTitle className="text-2xl bg-gradient-to-r from-rose-200 to-rose-300 bg-clip-text text-transparent">
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
                    href="/Fader Keys v0.3.0.zip"
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
