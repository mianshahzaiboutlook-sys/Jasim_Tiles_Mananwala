import Link from "next/link";
import Image from "next/image";

export default function CategoryCard({ category }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md shadow-slate-200/50 transition-all duration-500 hover:shadow-xl hover:shadow-sky-brand/10 hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-brand/80 via-slate-brand/20 to-transparent" />
        <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
          {category.name}
        </h3>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
          {category.description}
        </p>
        <Link
          href={`/products/${category.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-brand transition-all group-hover:gap-3"
        >
          View Products
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
