import { categories } from "@/data/categories";

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function getCategoryName(slug) {
  const category = categories.find((c) => c.slug === slug);
  return category?.name ?? slug;
}

export function formatWhatsAppMessage(productName) {
  return encodeURIComponent(
    `Hello Jasim Tiles Center! I am interested in "${productName}". Please share more details.`
  );
}

export function formatPhoneLink(phone) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function getAvailabilityColor(status) {
  if (status === "In Stock") return "bg-emerald-100 text-emerald-700";
  if (status === "Limited Stock") return "bg-amber-100 text-amber-700";
  return "bg-red-100 text-red-700";
}
