import { ProductGridSkeleton } from "@/components/ProductListing";

export default function ProductsLoading() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8">
          <div className="h-12 w-full skeleton rounded-xl" />
          <div className="flex gap-4">
            <div className="h-12 flex-1 skeleton rounded-xl" />
            <div className="h-12 w-56 skeleton rounded-xl" />
          </div>
        </div>
        <ProductGridSkeleton />
      </div>
    </section>
  );
}
