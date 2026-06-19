import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Jasim Tiles Center — your trusted tile and sanitary products showroom in Mananwala, Sheikhupura, Pakistan.",
  path: "/about",
  keywords: ["about Jasim Tiles", "tile showroom Sheikhupura"],
});

const whyChooseUs = [
  {
    title: "Wide Selection",
    description: "Over 500 products across 9 categories from top brands.",
  },
  {
    title: "Expert Guidance",
    description: "Our team helps you choose the right products for your space.",
  },
  {
    title: "Competitive Pricing",
    description: "Premium quality at prices that fit your budget.",
  },
  {
    title: "Trusted Locally",
    description: "Serving Sheikhupura and surrounding areas with pride.",
  },
];

const galleryImages = [
  { src: "/images/gallery/showroom-1.svg", alt: "Showroom interior display" },
  { src: "/images/gallery/showroom-2.svg", alt: "Tile collection wall" },
  { src: "/images/gallery/showroom-3.svg", alt: "Sanitary products section" },
  { src: "/images/gallery/showroom-4.svg", alt: "Customer consultation area" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-24 bg-slate-brand overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-brand via-slate-light to-sky-dark opacity-90" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">About Us</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Your trusted partner for premium tiles and sanitary products in Sheikhupura.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-sky-brand">
                  Our Story
                </span>
                <h2 className="mt-2 text-3xl font-bold text-slate-brand">
                  Building Beautiful Spaces Since Day One
                </h2>
                <p className="mt-4 text-slate-500 leading-relaxed">
                  {siteConfig.name} was founded with a simple mission: to bring
                  premium quality tiles and sanitary products to the people of
                  Sheikhupura at affordable prices. Located in Mananwala, we have
                  grown to become one of the most trusted tile showrooms in the region.
                </p>
                <p className="mt-4 text-slate-500 leading-relaxed">
                  From washroom and kitchen tiles to front elevation designs and
                  complete sanitary solutions, we offer everything you need to
                  transform your home into a masterpiece.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/gallery/showroom-1.svg"
                  alt="Jasim Tiles Center showroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-brand/10 text-sky-brand">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-brand">Our Mission</h3>
                <p className="mt-3 text-slate-500 leading-relaxed">
                  To provide high-quality tiles and sanitary products that combine
                  durability, beauty, and affordability — helping every customer
                  create spaces they love.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-brand/10 text-sky-brand">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-brand">Our Vision</h3>
                <p className="mt-3 text-slate-500 leading-relaxed">
                  To be the leading tile and sanitary products destination in
                  Punjab, known for exceptional product range, expert service, and
                  customer satisfaction.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-brand">
                Why Choose Us
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={item.title} delay={(index % 4) + 1}>
                <div className="text-center p-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky-brand text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-brand">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom Gallery */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-brand">
                Showroom Gallery
              </h2>
              <p className="mt-3 text-slate-500">
                Take a glimpse of our premium showroom in Mananwala.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {galleryImages.map((img, index) => (
              <ScrollReveal key={img.src} delay={(index % 2) + 1}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lg group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-brand px-8 py-4 text-base font-semibold text-white transition-all hover:bg-sky-dark hover:-translate-y-1"
            >
              Visit Our Showroom
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
