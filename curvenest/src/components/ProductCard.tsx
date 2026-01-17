import { Link } from "react-router-dom";
import { Star, Heart } from "lucide-react";
import type { Product } from "../types";
import { useCartStore } from "../context/cartStore";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    // Default to first available size and color
    addItem(product, 1, product.sizes[0], product.colors[0]);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
      <Link to={`/product/${product.id}`} className="block cursor-pointer">
        <div className="relative">
          <div className="h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <button
            onClick={(e) => e.preventDefault()}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Add to wishlist"
          >
            <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
          </button>
          {product.price < product.originalPrice && (
            <div className="absolute top-2 left-2 bg-accent text-white px-2 py-1 rounded text-sm font-semibold">
              Sale
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold">Out of Stock</span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
          </div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-primary">
                ${product.price}
              </span>
              {product.price < product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart();
          }}
          disabled={!product.inStock}
          className="w-full bg-primary hover:bg-primary-600 disabled:bg-gray-400 text-white py-2 px-4 rounded font-semibold transition-colors disabled:cursor-not-allowed"
          aria-label={`Add ${product.name} to cart`}
        >
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
