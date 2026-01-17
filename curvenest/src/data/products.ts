export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  image: string;
  category: string;
  description: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Elegant Maxi Dress",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.5,
    image: "/placeholder.jpg",
    category: "women",
    description:
      "A beautiful flowing maxi dress perfect for any occasion. Made with breathable fabric for all-day comfort.",
    sizes: ["12", "14", "16", "18", "20", "22"],
    colors: ["Black", "Navy", "Burgundy"],
    inStock: true,
  },
  {
    id: 2,
    name: "Comfortable Polo Shirt",
    price: 45.99,
    originalPrice: 45.99,
    rating: 4.2,
    image: "/placeholder.jpg",
    category: "men",
    description:
      "Classic polo shirt with a modern fit. Perfect for casual outings or office wear.",
    sizes: ["XL", "2XL", "3XL", "4XL"],
    colors: ["White", "Gray", "Blue"],
    inStock: true,
  },
  {
    id: 3,
    name: "Stylish Blouse",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.7,
    image: "/placeholder.jpg",
    category: "women",
    description:
      "Elegant blouse with a flattering fit. Versatile for work or play.",
    sizes: ["12", "14", "16", "18", "20"],
    colors: ["White", "Pink", "Blue"],
    inStock: true,
  },
  {
    id: 4,
    name: "Casual Chinos",
    price: 69.99,
    originalPrice: 69.99,
    rating: 4.3,
    image: "/placeholder.jpg",
    category: "men",
    description:
      "Comfortable chinos that look great and feel even better. Perfect for everyday wear.",
    sizes: ["32", "34", "36", "38", "40", "42"],
    colors: ["Khaki", "Navy", "Black"],
    inStock: true,
  },
  {
    id: 5,
    name: "Summer Sundress",
    price: 74.99,
    originalPrice: 99.99,
    rating: 4.6,
    image: "/placeholder.jpg",
    category: "women",
    description:
      "Light and airy sundress for warm weather. Flattering and comfortable.",
    sizes: ["14", "16", "18", "20", "22"],
    colors: ["Floral", "Blue", "Yellow"],
    inStock: true,
  },
  {
    id: 6,
    name: "Button-Down Shirt",
    price: 54.99,
    originalPrice: 54.99,
    rating: 4.4,
    image: "/placeholder.jpg",
    category: "men",
    description:
      "Classic button-down shirt with a tailored fit. Versatile and professional.",
    sizes: ["XL", "2XL", "3XL"],
    colors: ["White", "Light Blue", "Gray"],
    inStock: true,
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};
