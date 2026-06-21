export type Subcategory = {
  name: string;
  slug: string;
  count: number;
};

export type Category = {
  name: string;
  slug: string;
  subcategories: Subcategory[];
};

export const categories: Category[] = [
  {
    name: "Makeup",
    slug: "makeup",
    subcategories: [
      { name: "Eyes", slug: "eyes", count: 1323 },
      { name: "Face", slug: "face", count: 2248 },
      { name: "Lips", slug: "lips", count: 980 },
      { name: "Nails", slug: "nails", count: 412 },
      { name: "Tools & Brushes", slug: "tools", count: 334 },
      { name: "Primers", slug: "primers", count: 215 },
      { name: "BB & CC Cream", slug: "bb-cc-cream", count: 111 },
      { name: "Blush", slug: "blush", count: 230 },
      { name: "Bronzer", slug: "bronzer", count: 31 },
      { name: "Foundation", slug: "foundation", count: 533 },
      { name: "Concealer", slug: "concealer", count: 279 },
      { name: "Contour", slug: "contour", count: 57 },
    ],
  },
  {
    name: "Skin",
    slug: "skin",
    subcategories: [
      { name: "Moisturizers", slug: "moisturizers", count: 890 },
      { name: "Serums", slug: "serums", count: 645 },
      { name: "Sunscreen", slug: "sunscreen", count: 421 },
      { name: "Cleansers", slug: "cleansers", count: 512 },
      { name: "Toners", slug: "toners", count: 380 },
      { name: "Face Masks", slug: "face-masks", count: 290 },
      { name: "Eye Cream", slug: "eye-cream", count: 175 },
      { name: "Exfoliators", slug: "exfoliators", count: 220 },
      { name: "Acne & Blemish", slug: "acne", count: 310 },
      { name: "Anti-Aging", slug: "anti-aging", count: 195 },
    ],
  },
  {
    name: "Hair",
    slug: "hair",
    subcategories: [
      { name: "Shampoo", slug: "shampoo", count: 720 },
      { name: "Conditioner", slug: "conditioner", count: 540 },
      { name: "Hair Oil", slug: "hair-oil", count: 380 },
      { name: "Hair Masks", slug: "hair-masks", count: 210 },
      { name: "Styling", slug: "styling", count: 290 },
      { name: "Scalp Care", slug: "scalp-care", count: 155 },
      { name: "Hair Color", slug: "hair-color", count: 185 },
      { name: "Serums & Treatments", slug: "hair-serums", count: 240 },
    ],
  },
  {
    name: "Personal Care",
    slug: "personal-care",
    subcategories: [
      { name: "Body Wash", slug: "body-wash", count: 410 },
      { name: "Deodorant", slug: "deodorant", count: 280 },
      { name: "Intimate Care", slug: "intimate-care", count: 130 },
      { name: "Shaving", slug: "shaving", count: 95 },
      { name: "Hand Care", slug: "hand-care", count: 210 },
      { name: "Foot Care", slug: "foot-care", count: 160 },
      { name: "Lip Balm", slug: "lip-balm", count: 120 },
    ],
  },
  {
    name: "Mom & Baby",
    slug: "mom-baby",
    subcategories: [
      { name: "Baby Skincare", slug: "baby-skincare", count: 320 },
      { name: "Baby Haircare", slug: "baby-hair", count: 180 },
      { name: "Maternity Care", slug: "maternity", count: 145 },
      { name: "Baby Bath", slug: "baby-bath", count: 110 },
      { name: "Baby Massage Oil", slug: "baby-oil", count: 90 },
    ],
  },
  {
    name: "Fragrance",
    slug: "fragrance",
    subcategories: [
      { name: "Perfume", slug: "perfume", count: 480 },
      { name: "Body Mist", slug: "body-mist", count: 260 },
      { name: "Attar", slug: "attar", count: 140 },
      { name: "Gift Sets", slug: "gift-sets", count: 95 },
      { name: "Room Fragrance", slug: "room-fragrance", count: 70 },
    ],
  },
];

export type Product = {
  id: number;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  isSale: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
};

const productImages = [
  "/banner_skincare.png",
  "/banner_organic.png",
  "/banner_makeup.png",
];

export const products: Product[] = [
  {
    id: 1,
    name: "Personal Lookup Combo 2 (Groome Cotton Pad + Skin Cafe Micellar Water)",
    brand: "Skin Cafe",
    category: "makeup",
    subcategory: "face",
    image: productImages[0],
    originalPrice: 595,
    salePrice: 299,
    discountPercent: 50,
    rating: 4,
    reviewCount: 128,
    isSale: true,
  },
  {
    id: 2,
    name: "Clean Touch Combo (Skin Cafe Micellar Water + Skin Cafe Cotton Pads)",
    brand: "Skin Cafe",
    category: "makeup",
    subcategory: "face",
    image: productImages[1],
    originalPrice: 645,
    salePrice: 299,
    discountPercent: 54,
    rating: 5,
    reviewCount: 89,
    isSale: true,
  },
  {
    id: 3,
    name: "Gentle Cleansing Combo 02 (Skin Cafe Micellar Water + Skin Cafe Cleansing)",
    brand: "Skin Cafe",
    category: "makeup",
    subcategory: "face",
    image: productImages[2],
    originalPrice: 630,
    salePrice: 325,
    discountPercent: 48,
    rating: 4,
    reviewCount: 210,
    isSale: true,
  },
  {
    id: 4,
    name: "Daily Cleansing Trio — Complete Skincare Routine Set",
    brand: "Groome",
    category: "makeup",
    subcategory: "face",
    image: productImages[0],
    originalPrice: 890,
    salePrice: 375,
    discountPercent: 58,
    rating: 4,
    reviewCount: 55,
    isSale: true,
  },
  {
    id: 5,
    name: "Hydrating Essence Toner with Hyaluronic Acid 120ml",
    brand: "Axis-Y",
    category: "skin",
    subcategory: "toners",
    image: productImages[1],
    originalPrice: 480,
    salePrice: 399,
    discountPercent: 17,
    rating: 5,
    reviewCount: 342,
    isSale: true,
    isBestSeller: true,
  },
  {
    id: 6,
    name: "Pure Argan Oil Facial Serum — Anti-aging & Brightening",
    brand: "Organics",
    category: "skin",
    subcategory: "serums",
    image: productImages[2],
    originalPrice: 750,
    salePrice: 599,
    discountPercent: 20,
    rating: 4,
    reviewCount: 97,
    isSale: true,
  },
  {
    id: 7,
    name: "Velvet Matte Liquid Lipstick — Long Wear Formula",
    brand: "Beauty Glam",
    category: "makeup",
    subcategory: "lips",
    image: productImages[0],
    originalPrice: 380,
    salePrice: 299,
    discountPercent: 21,
    rating: 4,
    reviewCount: 175,
    isSale: true,
  },
  {
    id: 8,
    name: "Rose Quartz Illuminating Face Serum 30ml",
    brand: "Luminous",
    category: "skin",
    subcategory: "serums",
    image: productImages[1],
    originalPrice: 1200,
    salePrice: 899,
    discountPercent: 25,
    rating: 5,
    reviewCount: 412,
    isSale: true,
    isBestSeller: true,
  },
  {
    id: 9,
    name: "Caffeine Eye Cream — Dark Circle & Puffiness Reducer",
    brand: "The Ordinary",
    category: "skin",
    subcategory: "eye-cream",
    image: productImages[2],
    originalPrice: 560,
    salePrice: 420,
    discountPercent: 25,
    rating: 4,
    reviewCount: 230,
    isSale: true,
  },
  {
    id: 10,
    name: "SPF 50+ PA+++ Sunscreen Gel — Lightweight & Non-greasy",
    brand: "Biore",
    category: "skin",
    subcategory: "sunscreen",
    image: productImages[0],
    originalPrice: 680,
    salePrice: 520,
    discountPercent: 24,
    rating: 5,
    reviewCount: 620,
    isSale: true,
    isBestSeller: true,
  },
  {
    id: 11,
    name: "Keratin Repair Shampoo — For Damaged & Frizzy Hair",
    brand: "Pantene",
    category: "hair",
    subcategory: "shampoo",
    image: productImages[1],
    originalPrice: 350,
    salePrice: 280,
    discountPercent: 20,
    rating: 4,
    reviewCount: 88,
    isSale: true,
  },
  {
    id: 12,
    name: "Moroccan Argan Oil Hair Mask — Deep Conditioning Treatment",
    brand: "OGX",
    category: "hair",
    subcategory: "hair-masks",
    image: productImages[2],
    originalPrice: 590,
    salePrice: 450,
    discountPercent: 24,
    rating: 4,
    reviewCount: 145,
    isSale: true,
  },
  {
    id: 13,
    name: "Floral Body Mist 200ml — Fresh All-Day Fragrance",
    brand: "Engage",
    category: "fragrance",
    subcategory: "body-mist",
    image: productImages[0],
    originalPrice: 290,
    salePrice: 220,
    discountPercent: 24,
    rating: 4,
    reviewCount: 310,
    isSale: true,
  },
  {
    id: 14,
    name: "Baby Gentle Wash & Shampoo — Tear-Free Formula 200ml",
    brand: "Johnson's",
    category: "mom-baby",
    subcategory: "baby-bath",
    image: productImages[1],
    originalPrice: 320,
    salePrice: 269,
    discountPercent: 16,
    rating: 5,
    reviewCount: 540,
    isSale: true,
    isBestSeller: true,
  },
  {
    id: 15,
    name: "Invisible Fresh Deodorant Roll-on 50ml",
    brand: "Dove",
    category: "personal-care",
    subcategory: "deodorant",
    image: productImages[2],
    originalPrice: 220,
    salePrice: 179,
    discountPercent: 19,
    rating: 4,
    reviewCount: 195,
    isSale: true,
  },
  {
    id: 16,
    name: "Volume Mascara — Waterproof & Buildable Formula",
    brand: "Maybelline",
    category: "makeup",
    subcategory: "eyes",
    image: productImages[0],
    originalPrice: 450,
    salePrice: 349,
    discountPercent: 22,
    rating: 4,
    reviewCount: 278,
    isSale: true,
    isNew: true,
  },
];

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}

export function getProductsBySubcategory(slug: string): Product[] {
  return products.filter((p) => p.subcategory === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
