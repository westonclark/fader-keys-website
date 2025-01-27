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
        <div className="container max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-8">Your Products</h1>
          <ProductList userId={userId} />
        </div>
      </div>
      <Footer />
    </>
  );
}
