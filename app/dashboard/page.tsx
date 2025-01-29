import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ProductList } from "../components/product-list";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

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
