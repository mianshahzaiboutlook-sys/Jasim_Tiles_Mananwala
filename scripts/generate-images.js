const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public", "images");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function categorySvg(name, color1, color2) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1}"/>
      <stop offset="100%" style="stop-color:${color2}"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bg)"/>
  <rect x="100" y="150" width="600" height="300" rx="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
  <text x="400" y="320" text-anchor="middle" fill="white" font-family="system-ui,sans-serif" font-size="32" font-weight="600">${name}</text>
  <text x="400" y="360" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-family="system-ui,sans-serif" font-size="16">Jasim Tiles Center</text>
</svg>`;
}

function productSvg(name, color, index) {
  const patterns = [
    `<rect x="50" y="50" width="150" height="150" fill="${color}" opacity="0.8"/>`,
    `<rect x="220" y="50" width="150" height="150" fill="${color}" opacity="0.6"/>`,
    `<rect x="390" y="50" width="150" height="150" fill="${color}" opacity="0.9"/>`,
    `<rect x="50" y="220" width="150" height="150" fill="${color}" opacity="0.5"/>`,
    `<rect x="220" y="220" width="150" height="150" fill="${color}" opacity="0.7"/>`,
    `<rect x="390" y="220" width="150" height="150" fill="${color}" opacity="0.85"/>`,
  ];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
  <rect width="600" height="600" fill="#f1f5f9"/>
  ${patterns.join("\n  ")}
  <text x="300" y="480" text-anchor="middle" fill="#0f172a" font-family="system-ui,sans-serif" font-size="18" font-weight="600">${name}</text>
  <text x="300" y="510" text-anchor="middle" fill="#64748b" font-family="system-ui,sans-serif" font-size="13">Product #${index}</text>
</svg>`;
}

function heroSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
  <defs>
    <linearGradient id="hero" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="50%" style="stop-color:#1e3a5f"/>
      <stop offset="100%" style="stop-color:#0ea5e9"/>
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#hero)"/>
  <rect x="200" y="300" width="300" height="300" fill="rgba(255,255,255,0.08)" rx="4"/>
  <rect x="520" y="300" width="300" height="300" fill="rgba(255,255,255,0.12)" rx="4"/>
  <rect x="840" y="300" width="300" height="300" fill="rgba(255,255,255,0.06)" rx="4"/>
  <rect x="1160" y="300" width="300" height="300" fill="rgba(255,255,255,0.1)" rx="4"/>
  <rect x="360" y="620" width="300" height="300" fill="rgba(255,255,255,0.07)" rx="4"/>
  <rect x="680" y="620" width="300" height="300" fill="rgba(255,255,255,0.11)" rx="4"/>
  <rect x="1000" y="620" width="300" height="300" fill="rgba(255,255,255,0.09)" rx="4"/>
</svg>`;
}

const categories = [
  { file: "washroom-tiles", name: "Washroom Tiles", c1: "#0ea5e9", c2: "#0284c7" },
  { file: "kitchen-tiles", name: "Kitchen Tiles", c1: "#6366f1", c2: "#4f46e5" },
  { file: "front-tiles", name: "Front Elevation", c1: "#8b5cf6", c2: "#7c3aed" },
  { file: "compound-tiles", name: "Compound Tiles", c1: "#f59e0b", c2: "#d97706" },
  { file: "floor-tiles", name: "Floor Tiles", c1: "#10b981", c2: "#059669" },
  { file: "wall-tiles", name: "Wall Tiles", c1: "#ec4899", c2: "#db2777" },
  { file: "wash-basins", name: "Wash Basins", c1: "#06b6d4", c2: "#0891b2" },
  { file: "washroom-seats", name: "Washroom Seats", c1: "#64748b", c2: "#475569" },
  { file: "sanitary-products", name: "Sanitary Products", c1: "#0f172a", c2: "#1e293b" },
];

const productColors = [
  "#94a3b8", "#64748b", "#cbd5e1", "#475569", "#e2e8f0",
  "#78716c", "#a8a29e", "#d6d3d1", "#57534e", "#f5f5f4",
  "#0ea5e9", "#38bdf8", "#7dd3fc", "#0284c7", "#0369a1",
  "#f8fafc", "#e2e8f0", "#cbd5e1", "#94a3b8", "#64748b",
  "#1e293b", "#334155",
];

ensureDir(path.join(publicDir, "categories"));
ensureDir(path.join(publicDir, "banners"));
ensureDir(path.join(publicDir, "products"));
ensureDir(path.join(publicDir, "gallery"));

fs.writeFileSync(path.join(publicDir, "hero-showroom.svg"), heroSvg());
fs.writeFileSync(path.join(publicDir, "og-image.svg"), categorySvg("Jasim Tiles Center", "#0f172a", "#0ea5e9"));

categories.forEach((cat) => {
  const svg = categorySvg(cat.name, cat.c1, cat.c2);
  fs.writeFileSync(path.join(publicDir, "categories", `${cat.file}.svg`), svg);
  fs.writeFileSync(path.join(publicDir, "banners", `${cat.file}.svg`), svg);
});

for (let i = 1; i <= 22; i++) {
  fs.writeFileSync(
    path.join(publicDir, "products", `product-${i}.svg`),
    productSvg(`Product ${i}`, productColors[i - 1], i)
  );
}

fs.writeFileSync(
  path.join(publicDir, "products", "product-1b.svg"),
  productSvg("Product 1 Alt", "#64748b", "1B")
);

fs.writeFileSync(
  path.join(publicDir, "products", "placeholder.svg"),
  productSvg("No Image", "#e2e8f0", "—")
);

for (let i = 1; i <= 4; i++) {
  fs.writeFileSync(
    path.join(publicDir, "gallery", `showroom-${i}.svg`),
    categorySvg(`Showroom ${i}`, "#0f172a", "#1e3a5f")
  );
}

console.log("Images generated successfully!");
