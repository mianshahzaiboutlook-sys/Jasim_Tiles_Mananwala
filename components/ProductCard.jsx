import Link from "next/link";
import Image from "next/image";
import { getCategoryName, getAvailabilityColor } from "@/lib/utils";

export default function ProductCard({ product }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md shadow-slate-200/50 transition-all duration-500 hover:shadow-xl hover:shadow-sky-brand/10 hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <span
          className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold ${getAvailabilityColor(product.availability)}`}
        >
          {product.availability}
        </span>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-medium uppercase tracking-wider text-sky-brand">
          {getCategoryName(product.category)}
        </span>
        <h3 className="mt-1 text-lg font-bold text-slate-brand line-clamp-1">
          {product.name}
        </h3>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
          <span>{product.company}</span>
          <span>Size: {product.size}</span>
        </div>

        <Link
          href={`/products/${product.slug}`}
          className="mt-auto pt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-brand px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-sky-brand group-hover:shadow-lg"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
