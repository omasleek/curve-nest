import React from "react";
import { Link, useParams } from "react-router-dom";
import { products, getProductsByCategory } from "../data/products";
import ProductCard from "../components/ProductCard";

const ProductListing: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  const filteredProducts = category
    ? getProductsByCategory(category)
    : products;

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
            <ProductCard key={product.id} product={product} />
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
