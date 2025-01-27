import { Card, CardHeader, CardTitle } from "../components/ui/card";
import { getUserProducts } from "../actions/db";

export async function ProductList({ userId }: { userId: string }) {
  const products = await getUserProducts(userId);

  if (!products?.length) {
    return (
      <Card>
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
        <Card key={product.id}>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Fader Keys</CardTitle>
              <div className="text-sm text-muted-foreground">
                Serial: {product.serial_number}
              </div>
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              Order #{product.order_number}
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
