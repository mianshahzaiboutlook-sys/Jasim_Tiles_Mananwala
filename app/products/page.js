import { Suspense } from "react";
import ProductListing, { ProductGridSkeleton } from "@/components/ProductListing";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "Browse our complete collection of premium tiles, wash basins, washroom seats, and sanitary products at Jasim Tiles Center.",
  path: "/products",
  keywords: ["tiles catalog", "sanitary products", "buy tiles Sheikhupura"],
});

export default function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-24 bg-slate-brand overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-brand via-slate-light to-sky-dark opacity-90" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Our Products</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Explore our complete collection of premium tiles and sanitary products.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<ProductGridSkeleton />}>
            <ProductListing initialProducts={products} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
