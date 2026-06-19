import { notFound } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ProductListing, { ProductGridSkeleton } from "@/components/ProductListing";
import ProductGallery from "@/components/ProductGallery";
import ProductCard from "@/components/ProductCard";
import InquiryForm from "@/components/InquiryForm";
import ScrollReveal from "@/components/ScrollReveal";
import { isCategorySlug, getCategoryBySlug } from "@/data/categories";
import {
  getProductBySlug,
  getProductsByCategory,
  getRelatedProducts,
  products,
} from "@/data/products";
import { siteConfig } from "@/data/site";
import {
  buildMetadata,
  buildProductJsonLd,
  buildBreadcrumbJsonLd,
} from "@/lib/seo";
import { getCategoryName, getAvailabilityColor, formatWhatsAppMessage } from "@/lib/utils";

// Generate static params for all categories and products
export function generateStaticParams() {
  const categoryParams = products
    .map((p) => p.category)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((slug) => ({ slug }));

  const productParams = products.map((p) => ({ slug: p.slug }));

  return [...categoryParams, ...productParams];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  if (isCategorySlug(slug)) {
    const category = getCategoryBySlug(slug);
    return buildMetadata({
      title: category.name,
      description: category.description,
      path: `/products/${slug}`,
      keywords: [category.name, category.shortName],
      image: category.bannerImage,
    });
  }

  const product = getProductBySlug(slug);
  if (!product) return {};

  return buildMetadata({
    title: product.name,
    description: product.description,
    path: `/products/${slug}`,
    keywords: [product.name, product.company, product.material],
    image: product.images[0],
    type: "website",
  });
}

export default async function ProductSlugPage({ params }) {
  const { slug } = await params;

  // Category page
  if (isCategorySlug(slug)) {
    return <CategoryPage slug={slug} />;
  }

  // Product detail page
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return <ProductDetailPage product={product} />;
}

function CategoryPage({ slug }) {
  const category = getCategoryBySlug(slug);
  const categoryProducts = getProductsByCategory(slug);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: category.name, href: `/products/${slug}` },
  ];

  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Category Banner */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src={category.bannerImage}
          alt={category.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-brand/90 via-slate-brand/70 to-slate-brand/40" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            {category.name}
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            {category.description}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<ProductGridSkeleton />}>
            <ProductListing
              initialProducts={categoryProducts}
              defaultCategory={slug}
              showCategoryFilter={false}
            />
          </Suspense>
        </div>
      </section>
    </>
  );
}

function ProductDetailPage({ product }) {
  const categoryName = getCategoryName(product.category);
  const relatedProducts = getRelatedProducts(product);
  const whatsappMsg = formatWhatsAppMessage(product.name);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: categoryName, href: `/products/${product.category}` },
    { label: product.name, href: `/products/${product.slug}` },
  ];

  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbItems);
  const productJsonLd = buildProductJsonLd(product, categoryName);

  const specs = [
    { label: "Category", value: categoryName },
    { label: "Company", value: product.company },
    { label: "Size", value: product.size },
    { label: "Color", value: product.color },
    { label: "Material", value: product.material },
    { label: "Finish", value: product.finish },
    { label: "Usage Area", value: product.usageArea },
    { label: "Availability", value: product.availability },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbJsonLd, productJsonLd]),
        }}
      />

      <section className="py-12 pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <ProductGallery images={product.images} productName={product.name} />

            {/* Details */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-sky-brand">
                {categoryName}
              </span>
              <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-brand">
                {product.name}
              </h1>
              <p className="mt-2 text-lg text-slate-500">{product.company}</p>

              <span
                className={`inline-block mt-4 rounded-full px-4 py-1.5 text-sm font-semibold ${getAvailabilityColor(product.availability)}`}
              >
                {product.availability}
              </span>

              <p className="mt-6 text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* Quick specs */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {specs.slice(0, 4).map((spec) => (
                  <div key={spec.label} className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-400 uppercase tracking-wider">
                      {spec.label}
                    </p>
                    <p className="mt-1 font-semibold text-slate-brand">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-lg"
                >
                  <WhatsAppIcon />
                  WhatsApp Inquiry
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-brand px-8 py-4 text-base font-semibold text-slate-brand transition-all hover:bg-slate-brand hover:text-white"
                >
                  <PhoneIcon />
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Full Specifications */}
          <ScrollReveal>
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-slate-brand mb-6">
                Product Specifications
              </h2>
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <table className="w-full text-sm">
                  <tbody>
                    {specs.map((spec, index) => (
                      <tr
                        key={spec.label}
                        className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}
                      >
                        <td className="px-6 py-4 font-medium text-slate-500 w-1/3">
                          {spec.label}
                        </td>
                        <td className="px-6 py-4 font-semibold text-slate-brand">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <ScrollReveal>
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-slate-brand mb-8">
                  Related Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Inquiry Form */}
          <ScrollReveal>
            <div className="mt-16 rounded-2xl bg-slate-50 p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-slate-brand mb-2">
                Product Inquiry
              </h2>
              <p className="text-slate-500 mb-8">
                Interested in this product? Fill out the form and we&apos;ll get back to you.
              </p>
              <div className="max-w-lg">
                <InquiryForm productName={product.name} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
