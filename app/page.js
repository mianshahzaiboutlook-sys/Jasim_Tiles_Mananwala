import Link from "next/link";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import ScrollReveal from "@/components/ScrollReveal";
import { homeCategories } from "@/data/categories";
import { getFeaturedProducts } from "@/data/products";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 8);

  return (
    <>
      <Hero />
      <Features />

      {/* Categories */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold uppercase tracking-wider text-sky-brand">
                Our Collection
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-brand">
                Browse by Category
              </h2>
              <p className="mt-3 text-slate-500 max-w-xl mx-auto">
                Explore our wide range of premium tiles and sanitary products
                for every space in your home.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeCategories.map((category, index) => (
              <ScrollReveal key={category.slug} delay={(index % 3) + 1}>
                <CategoryCard category={category} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-sky-brand">
                  Handpicked
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-brand">
                  Featured Products
                </h2>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-brand hover:gap-3 transition-all"
              >
                View All Products
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={(index % 4) + 1}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-sky-brand">
                Testimonials
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-brand">
                What Our Customers Say
              </h2>
            </div>
          </ScrollReveal>
          <Testimonials />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl gradient-cta p-10 sm:p-16 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Visit Our Showroom Today
                </h2>
                <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                  Experience our premium tile collection in person at Mananwala,
                  Sheikhupura. Our experts are ready to help you find the perfect
                  products for your project.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-brand transition-all hover:bg-white/90 hover:-translate-y-1"
                  >
                    Get Directions
                  </Link>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full glass-dark px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/20 hover:-translate-y-1"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
