import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Filter } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");

  const categories = [
    { value: "all", label: "All Collections" },
    { value: "women", label: "Women" },
    { value: "men", label: "Men" },
    { value: "unisex", label: "Unisex" },
  ];

  const sortOptions = [
    { value: "name", label: "Name A-Z" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered =
      selectedCategory === "all"
        ? products
        : products.filter((product) => product.category === selectedCategory);

    switch (sortBy) {
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  return (
    <>
      <Helmet>
        <title>Shop Plus-Size Men & Women Fashion | CurveNest</title>
        <meta
          name="description"
          content="Browse our complete collection of plus-size fashion for men and women. Find stylish clothing in sizes 12+ with inclusive sizing and premium quality."
        />
        <meta
          name="keywords"
          content="plus-size clothing, men fashion, women fashion, size 12+, inclusive fashion, online shopping"
        />
      </Helmet>

      <main className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Browse All Collections</h1>
            <p className="text-lg text-gray-700 mb-2">Men & Women • Size 12+</p>
            <p className="text-gray-600">
              {filteredAndSortedProducts.length} products found
            </p>
          </div>

          {/* Filters and Sort */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-700">Filter & Sort</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="flex-1">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    aria-label="Filter products by category"
                  >
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="sort"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Sort by
                  </label>
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    aria-label="Sort products"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold text-gray-600 mb-2">
                No products found
              </h2>
              <p className="text-gray-500 mb-6">
                Try adjusting your filters to see more products.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSortBy("name");
                }}
                className="bg-primary hover:bg-primary-600 text-white px-6 py-2 rounded-md font-semibold transition-colors"
              >
                Show All Products
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Shop;
