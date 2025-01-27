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
    <div className="grid gap-4">
      {products.map((product) => (
        <Card
          key={product.id}
          className="border-white/10 border shadow-md dark:shadow-black/10"
        >
          <CardHeader className="relative">
            <div className="absolute top-4 right-6 text-xs text-muted-foreground/50">
              Order #{product.order_number}
            </div>
            <div className="flex flex-col gap-4">
              <CardTitle>Fader Keys</CardTitle>
              <div className="flex flex-col gap-3">
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <span>Serial Number:</span>
                  <div className="flex items-center">
                    <span className="mr-1">{product.serial_number}</span>
                    <CopyButton text={product.serial_number} />
                  </div>
                </div>
                <a
                  href="/Fader Keys v0.3.0.zip"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors w-fit"
                >
                  <Download className="h-4 w-4" />
                  Download
                </a>
              </div>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
