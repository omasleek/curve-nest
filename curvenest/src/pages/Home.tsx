import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Heart } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>CurveNest - Plus-Size Fashion for Every Body</title>
        <meta
          name="description"
          content="Discover inclusive plus-size fashion at CurveNest. Sizes 12+ for men and women. Find your perfect fit with our curated collection."
        />
        <meta
          name="keywords"
          content="plus-size fashion, inclusive clothing, size 12+, curve fashion, body positive"
        />
      </Helmet>
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Perfect Fit
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Discover plus-size fashion that celebrates every curve. Style,
              comfort, and confidence in sizes 12+.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shop"
                className="bg-accent hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Shop Now
              </Link>
              <Link
                to="/about"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Shop by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link
                to="/shop/women"
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-64 bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    Women's Fashion
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Women's Collection
                  </h3>
                  <p className="text-gray-600">
                    Elegant dresses, tops, bottoms, and more
                  </p>
                </div>
              </Link>
              <Link
                to="/shop/men"
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-64 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    Men's Fashion
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Men's Collection
                  </h3>
                  <p className="text-gray-600">
                    Comfortable and stylish clothing for modern men
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose CurveNest?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inclusive Sizing</h3>
                <p className="text-gray-600">
                  Sizes 12+ with accurate measurements and real model photos.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Quality & Comfort
                </h3>
                <p className="text-gray-600">
                  Premium materials that feel great and last longer.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent text-2xl font-bold">✓</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
                <p className="text-gray-600">
                  Free shipping on orders over $50 with quick delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Fit?</h2>
            <p className="text-xl mb-8">
              Join thousands of satisfied customers who found their perfect
              style.
            </p>
            <Link
              to="/shop"
              className="bg-white text-accent hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
