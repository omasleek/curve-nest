import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Heart, Users, Award, Truck, Shield, Star } from "lucide-react";

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About CurveNest - Plus-Size Fashion for Every Body</title>
        <meta
          name="description"
          content="Learn about CurveNest's mission to provide inclusive, high-quality plus-size fashion for men and women. Discover our commitment to body positivity, comfort, and confidence."
        />
        <meta
          name="keywords"
          content="about CurveNest, plus-size fashion brand, body positivity, inclusive clothing, size 12+, fashion mission"
        />
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About CurveNest
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Celebrating every curve with fashion that fits, flatters, and
              empowers. We're here for men and women who deserve style that
              makes them feel confident and comfortable in their own skin.
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Plus-size fashion for size 12+ • Quality fabrics • Inclusive
              sizing • Body-positive community
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Our Story
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-700 mb-6">
                    CurveNest was born from a simple truth: everyone deserves to
                    feel confident and beautiful in their clothing. For too
                    long, plus-size fashion has been an afterthought – limited
                    options, poor quality, and designs that don't celebrate real
                    bodies.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    We saw the gap in the market and decided to create something
                    different. A brand that understands that fashion isn't just
                    about looking good – it's about feeling good. Every piece in
                    our collection is designed with real plus-size bodies in
                    mind, using fabrics that move with you and cuts that flatter
                    every curve.
                  </p>
                  <p className="text-lg text-gray-700">
                    Today, CurveNest serves thousands of customers who finally
                    found clothing that fits their lifestyle, their personality,
                    and most importantly – their confidence.
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg p-8">
                  <div className="text-center">
                    <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
                    <p className="text-gray-600">
                      Fashion that celebrates every body, empowers every
                      individual, and creates confidence that lasts beyond the
                      mirror.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 mb-8">
                To redefine plus-size fashion by creating inclusive,
                high-quality clothing that empowers people to embrace their
                bodies and express their true selves through style.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Inclusivity First
                  </h3>
                  <p className="text-gray-600">
                    Every size, every body type, every person deserves fashion
                    that makes them feel seen and celebrated.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Quality Matters
                  </h3>
                  <p className="text-gray-600">
                    Premium fabrics, expert craftsmanship, and designs that
                    stand the test of time and wear.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Body Positivity
                  </h3>
                  <p className="text-gray-600">
                    Celebrating diverse bodies and promoting self-love through
                    fashion that fits and flatters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  Women's Fashion
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Elegant dresses and gowns for special occasions
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Comfortable blouses and tops for everyday wear
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Professional attire that commands respect
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Loungewear and sleepwear for ultimate comfort
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  Men's Fashion
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Tailored shirts and polos for any occasion
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Comfortable chinos and dress pants
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Casual hoodies and jackets for everyday
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Underwear and basics you can rely on
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                All our pieces feature inclusive sizing from size 12+ and are
                designed to move with your body, not against it.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose CurveNest */}
        <section className="py-16 bg-primary-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose CurveNest?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inclusive Sizing</h3>
                <p className="text-gray-600">
                  True size inclusivity from 12+ with accurate measurements and
                  real model photography.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600">
                  High-quality fabrics that feel luxurious, last longer, and
                  maintain their shape.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">
                  Free shipping on orders over $50 with quick, reliable delivery
                  across the US.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                <p className="text-gray-600">
                  Easy returns, responsive support, and a satisfaction guarantee
                  on every purchase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Perfect Fit?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have discovered fashion
              that celebrates their unique beauty.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
