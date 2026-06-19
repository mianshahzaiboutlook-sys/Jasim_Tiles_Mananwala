export const categories = [
  {
    slug: "washroom-tiles",
    name: "Washroom Tiles",
    shortName: "Washroom",
    description:
      "Premium washroom tiles with water-resistant finishes for modern bathrooms.",
    image: "/images/categories/washroom-tiles.svg",
    bannerImage: "/images/banners/washroom-7.jpeg",
  },
  {
    slug: "kitchen-tiles",
    name: "Kitchen Tiles",
    shortName: "Kitchen",
    description:
      "Durable, stain-resistant kitchen tiles designed for everyday elegance.",
    image: "/images/categories/kitchen-tiles.svg",
    bannerImage: "/images/banners/kitchen-tiles.svg",
  },
  {
    slug: "front-elevation-tiles",
    name: "Front Elevation Tiles",
    shortName: "Front Tiles",
    description: "Stunning facade tiles that elevate your home's curb appeal.",
    image: "/images/categories/front-tiles.svg",
    bannerImage: "/images/banners/front-tiles.svg",
  },
  {
    slug: "compound-tiles",
    name: "Compound Tiles",
    shortName: "Compound",
    description:
      "Heavy-duty outdoor tiles built for driveways, patios, and walkways.",
    image: "/images/categories/compound-tiles.svg",
    bannerImage: "/images/banners/compound-tiles.svg",
  },
  {
    slug: "floor-tiles",
    name: "Floor Tiles",
    shortName: "Floor",
    description:
      "Elegant floor tiles for living spaces with lasting beauty and strength.",
    image: "/images/categories/floor-tiles.svg",
    bannerImage: "/images/banners/floor-tiles.svg",
  },
  {
    slug: "wall-tiles",
    name: "Wall Tiles",
    shortName: "Wall",
    description:
      "Designer wall tiles to transform interiors with texture and color.",
    image: "/images/categories/wall-tiles.svg",
    bannerImage: "/images/banners/wall-tiles.svg",
  },
  {
    slug: "wash-basins",
    name: "Wash Basins",
    shortName: "Basins",
    description:
      "Stylish wash basins combining functionality with contemporary design.",
    image: "/images/categories/wash-basins.svg",
    bannerImage: "/images/banners/wash-basins.svg",
  },
  {
    slug: "washroom-seats",
    name: "Washroom Seats",
    shortName: "Seats",
    description: "Quality washroom seats and commodes for comfort and hygiene.",
    image: "/images/categories/washroom-seats.svg",
    bannerImage: "/images/banners/washroom-seats.svg",
  },
  {
    slug: "sanitary-products",
    name: "Sanitary Products",
    shortName: "Sanitary",
    description:
      "Complete range of sanitary fittings and accessories for your home.",
    image: "/images/categories/sanitary-products.svg",
    bannerImage: "/images/banners/sanitary-products.svg",
  },
];

export const homeCategories = categories.filter((c) =>
  [
    "washroom-tiles",
    "kitchen-tiles",
    "front-elevation-tiles",
    "compound-tiles",
    "wash-basins",
    "washroom-seats",
  ].includes(c.slug),
);

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug) ?? null;
}

export function isCategorySlug(slug) {
  return categories.some((c) => c.slug === slug);
}
