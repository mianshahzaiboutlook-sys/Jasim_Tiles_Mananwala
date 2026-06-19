import Link from "next/link";

export default function ProductNotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-sky-brand">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-slate-brand">Product Not Found</h2>
      <p className="mt-2 max-w-md text-sm text-slate-500">
        The product or category you&apos;re looking for doesn&apos;t exist or has been removed.
      </p>
      <div className="mt-6 flex gap-4">
        <Link
          href="/products"
          className="rounded-full bg-sky-brand px-6 py-2.5 text-sm font-semibold text-white hover:bg-sky-dark transition-colors"
        >
          Browse Products
        </Link>
        <Link
          href="/"
          className="rounded-full border border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
