import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Star, Minus, Plus, Heart, ArrowLeft } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCartStore } from '../context/cartStore';
import BackButton from '../components/BackButton';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(parseInt(id)) : null;
  const addItem = useCartStore((state) => state.addItem);

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  if (!product) {
    return (
      <>
        <Helmet>
          <title>Product Not Found - CurveNest</title>
          <meta name="description" content="The product you're looking for could not be found." />
        </Helmet>

        <main className="min-h-screen py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <BackButton />
            </div>
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">
              The product you're looking for doesn't exist or may have been removed.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </main>
      </>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select a size and color');
      return;
    }

    addItem(product, quantity, selectedSize, selectedColor);
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <>
      <Helmet>
        <title>{product.name} | CurveNest</title>
        <meta name="description" content={product.description} />
        <meta name="keywords" content={`${product.name}, ${product.category}, plus-size fashion, ${product.colors.join(', ')}`} />
      </Helmet>

      <main className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <BackButton />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.price < product.originalPrice && (
                <div className="inline-block bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Sale - {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off
                </div>
              )}
            </div>

            {/* Product Information */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-gray-600 mb-4">Category: {product.category}</p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 ml-2">({product.rating})</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-3xl font-bold text-primary">${product.price}</span>
                  {product.price < product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3">Description</h2>
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                </div>

                {/* Size Selection */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded-md transition-colors ${
                          selectedSize === size
                            ? "border-primary bg-primary text-white"
                            : "border-gray-300 hover:border-primary"
                        }`}
                        aria-pressed={selectedSize === size}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Color</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 border rounded-md transition-colors ${
                          selectedColor === color
                            ? "border-primary bg-primary text-white"
                            : "border-gray-300 hover:border-primary"
                        }`}
                        aria-pressed={selectedColor === color}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Quantity</h3>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={decreaseQuantity}
                      className="p-2 border border-gray-300 rounded-md hover:border-primary transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 border border-gray-300 rounded-md min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={increaseQuantity}
                      className="p-2 border border-gray-300 rounded-md hover:border-primary transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Stock Status */}
                <div className="mb-6">
                  <p className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                  </p>
                </div>

                {/* Add to Cart */}
                <div className="space-y-4">
                  <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock || !selectedSize || !selectedColor}
                    className="w-full bg-primary hover:bg-primary-600 disabled:bg-gray-400 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors disabled:cursor-not-allowed"
                  >
                    {isAddedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
                  </button>

                  <button className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold transition-colors">
                    <Heart className="w-5 h-5" />
                    Add to Wishlist
                  </button>
                </div>

                {/* Back to Shop */}
                <div className="mt-8 pt-6 border-t">
                  <Link
                    to="/shop"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-600 font-semibold transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Shop
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetails;