import type { Product } from "../types";

export const products: Product[] = [
  /* =========================
     WOMEN'S COLLECTION
  ========================== */
  {
    id: 1,
    name: "Elegant Maxi Dress",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.6,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768683034/images_vltwwd.jpg",
    category: "women",
    description:
      "A flowing maxi dress designed for comfort and elegance. Perfect for events or casual outings.",
    sizes: ["12", "14", "16", "18", "20", "22"],
    colors: ["Black", "Navy", "Burgundy"],
    inStock: true,
  },
  {
    id: 2,
    name: "Classic Wrap Dress",
    price: 74.99,
    originalPrice: 99.99,
    rating: 4.5,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768683664/images_1_r55fzy.jpg",
    category: "women",
    description:
      "Flattering wrap dress with adjustable fit and breathable fabric.",
    sizes: ["12", "14", "16", "18", "20"],
    colors: ["Green", "Black", "Floral"],
    inStock: true,
  },
  {
    id: 3,
    name: "Relaxed Fit Blouse",
    price: 49.99,
    originalPrice: 59.99,
    rating: 4.3,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768683664/images_3_wytpwz.jpg",
    category: "women",
    description: "Soft, relaxed blouse suitable for work or casual wear.",
    sizes: ["12", "14", "16", "18", "20", "22"],
    colors: ["White", "Pink", "Blue"],
    inStock: true,
  },
  {
    id: 4,
    name: "High-Waist Stretch Jeans",
    price: 69.99,
    originalPrice: 89.99,
    rating: 4.7,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768683477/download_iyncpw.jpg",
    category: "women",
    description: "High-waist jeans with stretch fabric for all-day comfort.",
    sizes: ["14", "16", "18", "20", "22", "24"],
    colors: ["Dark Blue", "Black"],
    inStock: true,
  },
  {
    id: 5,
    name: "Summer Sundress",
    price: 64.99,
    originalPrice: 84.99,
    rating: 4.4,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768683472/download_1_mojzzl.jpg",
    category: "women",
    description: "Lightweight sundress perfect for warm weather days.",
    sizes: ["14", "16", "18", "20", "22"],
    colors: ["Yellow", "Floral", "Blue"],
    inStock: true,
  },
  {
    id: 6,
    name: "Tailored Office Blazer",
    price: 99.99,
    originalPrice: 129.99,
    rating: 4.6,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768683664/images_3_wytpwz.jpg",
    category: "women",
    description: "Structured blazer designed to flatter plus-size figures.",
    sizes: ["14", "16", "18", "20", "22"],
    colors: ["Black", "Gray"],
    inStock: true,
  },
  {
    id: 7,
    name: "Soft Knit Cardigan",
    price: 54.99,
    originalPrice: 69.99,
    rating: 4.2,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768683472/download_3_wws4qb.jpg",
    category: "women",
    description: "Cozy knit cardigan for layering in any season.",
    sizes: ["12", "14", "16", "18", "20", "22"],
    colors: ["Cream", "Rust", "Gray"],
    inStock: true,
  },
  {
    id: 8,
    name: "Pleated Midi Skirt",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.4,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1760768259/cld-sample.jpg",
    category: "women",
    description: "Elegant pleated skirt with elastic waistband.",
    sizes: ["14", "16", "18", "20", "22"],
    colors: ["Black", "Emerald"],
    inStock: true,
  },
  {
    id: 9,
    name: "Everyday T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.1,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1760768256/samples/woman-on-a-football-field.jpg",
    category: "women",
    description: "Soft cotton t-shirt designed for everyday comfort.",
    sizes: ["12", "14", "16", "18", "20", "22"],
    colors: ["White", "Black", "Gray"],
    inStock: true,
  },
  {
    id: 10,
    name: "Wide-Leg Trousers",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.5,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768684105/download_7_quoyay.jpg",
    category: "women",
    description: "Flowy wide-leg trousers that offer comfort and style.",
    sizes: ["14", "16", "18", "20", "22", "24"],
    colors: ["Black", "Navy"],
    inStock: true,
  },

  /* =========================
     MEN'S COLLECTION
  ========================== */
  {
    id: 11,
    name: "Classic Polo Shirt",
    price: 44.99,
    originalPrice: 44.99,
    rating: 4.3,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768684366/download_9_fmwe3a.jpg",
    category: "men",
    description: "Breathable polo shirt designed for comfort and durability.",
    sizes: ["XL", "2XL", "3XL", "4XL"],
    colors: ["White", "Blue", "Gray"],
    inStock: true,
  },
  {
    id: 12,
    name: "Relaxed Fit T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.2,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768684367/download_8_ariobp.jpg",
    category: "men",
    description: "Everyday t-shirt with relaxed fit and soft fabric.",
    sizes: ["XL", "2XL", "3XL", "4XL", "5XL"],
    colors: ["Black", "White", "Olive"],
    inStock: true,
  },
  {
    id: 13,
    name: "Stretch Denim Jeans",
    price: 74.99,
    originalPrice: 94.99,
    rating: 4.5,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768684347/download_15_ikyh2h.jpg",
    category: "men",
    description: "Stretch denim jeans built for comfort and mobility.",
    sizes: ["38", "40", "42", "44", "46"],
    colors: ["Dark Blue", "Black"],
    inStock: true,
  },
  {
    id: 14,
    name: "Casual Chinos",
    price: 69.99,
    originalPrice: 69.99,
    rating: 4.4,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768684353/download_14_g0wzjf.jpg",
    category: "men",
    description: "Casual chinos suitable for work or weekends.",
    sizes: ["38", "40", "42", "44"],
    colors: ["Khaki", "Navy"],
    inStock: true,
  },
  {
    id: 15,
    name: "Button-Down Oxford Shirt",
    price: 54.99,
    originalPrice: 69.99,
    rating: 4.6,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768684341/images_6_zulhto.jpg",
    category: "men",
    description: "Classic button-down shirt with breathable cotton fabric.",
    sizes: ["XL", "2XL", "3XL", "4XL"],
    colors: ["White", "Light Blue"],
    inStock: true,
  },
  {
    id: 16,
    name: "Lightweight Hoodie",
    price: 64.99,
    originalPrice: 84.99,
    rating: 4.5,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768684340/images_7_gkowvj.jpg",
    category: "men",
    description: "Soft hoodie ideal for layering in cooler weather.",
    sizes: ["XL", "2XL", "3XL", "4XL"],
    colors: ["Black", "Gray"],
    inStock: true,
  },
  {
    id: 17,
    name: "Formal Blazer",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.7,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768684346/download_16_un1vpo.jpg",
    category: "men",
    description: "Tailored blazer designed to provide structure and comfort.",
    sizes: ["42", "44", "46", "48"],
    colors: ["Black", "Navy"],
    inStock: true,
  },
  {
    id: 18,
    name: "Comfort Joggers",
    price: 49.99,
    originalPrice: 64.99,
    rating: 4.3,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768684745/download_18_tnrif1.jpg",
    category: "men",
    description: "Relaxed joggers for lounging or casual wear.",
    sizes: ["XL", "2XL", "3XL", "4XL"],
    colors: ["Gray", "Black"],
    inStock: true,
  },
  {
    id: 19,
    name: "Summer Shorts",
    price: 39.99,
    originalPrice: 49.99,
    rating: 4.2,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768684745/download_19_nck2m3.jpg",
    category: "men",
    description: "Breathable summer shorts with elastic waistband.",
    sizes: ["XL", "2XL", "3XL", "4XL"],
    colors: ["Navy", "Olive"],
    inStock: true,
  },
  {
    id: 20,
    name: "Thermal Long Sleeve Top",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.4,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768684346/download_17_q8i5ba.jpg",
    category: "men",
    description: "Warm thermal top for cooler seasons.",
    sizes: ["XL", "2XL", "3XL", "4XL"],
    colors: ["Black", "Charcoal"],
    inStock: true,
  },

  /* =========================
     UNISEX / BASICS
  ========================== */
  {
    id: 21,
    name: "Essential Lounge Set",
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.6,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768685147/download_20_lf6ciw.jpg",
    category: "unisex",
    description: "Comfort-first lounge set perfect for home wear.",
    sizes: ["XL", "2XL", "3XL", "4XL"],
    colors: ["Beige", "Gray"],
    inStock: true,
  },
  {
    id: 22,
    name: "Zip-Up Jacket",
    price: 99.99,
    originalPrice: 129.99,
    rating: 4.5,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768685146/download_21_cpbcfk.jpg",
    category: "unisex",
    description: "Versatile zip-up jacket for everyday wear.",
    sizes: ["XL", "2XL", "3XL", "4XL"],
    colors: ["Black", "Navy"],
    inStock: true,
  },
  {
    id: 23,
    name: "Soft Cotton Pajama Set",
    price: 69.99,
    originalPrice: 89.99,
    rating: 4.7,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768685135/images_10_fzi8sg.jpg",
    category: "unisex",
    description: "Breathable pajama set designed for all-night comfort.",
    sizes: ["XL", "2XL", "3XL"],
    colors: ["Blue", "Gray"],
    inStock: true,
  },
  {
    id: 24,
    name: "Everyday Hoodie",
    price: 74.99,
    originalPrice: 94.99,
    rating: 4.4,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768685146/download_21_cpbcfk.jpg",
    category: "unisex",
    description: "Go-to hoodie with premium fabric and relaxed fit.",
    sizes: ["XL", "2XL", "3XL", "4XL"],
    colors: ["Black", "Forest Green"],
    inStock: true,
  },
  {
    id: 25,
    name: "All-Season Sweatshirt",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.3,
    image:
      "https://res.cloudinary.com/dwfpfpmue/image/upload/v1768685134/images_11_vvugdh.jpg",
    category: "unisex",
    description: "Classic sweatshirt built for warmth and comfort.",
    sizes: ["XL", "2XL", "3XL", "4XL"],
    colors: ["Gray", "Burgundy"],
    inStock: true,
  },
];

/* =========================
   HELPERS
========================= */
export const getProductById = (id: number) =>
  products.find((product) => product.id === id);

export const getProductsByCategory = (category: string) =>
  products.filter((product) => product.category === category);
