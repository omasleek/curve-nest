import React from "react";
import { Link, useParams } from "react-router-dom";
import { Star, Heart } from "lucide-react";
import { products, getProductsByCategory } from "../data/products";
import { useCartStore } from "../context/cartStore";

const ProductListing: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const addItem = useCartStore((state) => state.addItem);

  const filteredProducts = category
    ? getProductsByCategory(category)
    : products;

  const handleAddToCart = (product: (typeof products)[0]) => {
    // Default size and color for demo
    addItem(product, 1, product.sizes[0], product.colors[0]);
  };

  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 capitalize">
            {category ? `${category} Collection` : "All Products"}
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} products found
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Product Image</span>
                </div>
                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
                {product.price < product.originalPrice && (
                  <div className="absolute top-2 left-2 bg-accent text-white px-2 py-1 rounded text-sm font-semibold">
                    Sale
                  </div>
                )}
              </div>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
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
                  <span className="text-sm text-gray-600 ml-2">
                    ({product.rating})
                  </span>
                </div>
                <div className="flex items-center justify-between">
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
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-primary hover:bg-primary-600 text-white px-4 py-2 rounded font-semibold transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="text-primary hover:text-primary-600 font-semibold"
          >
            ← Back to Shop
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProductListing;
