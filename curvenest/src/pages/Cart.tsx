import React from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "../context/cartStore";

const Cart: React.FC = () => {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } =
    useCartStore();

  const totalPrice = getTotalPrice();

  if (items.length === 0) {
    return (
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-8">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Add some items to get started!</p>
          <Link
            to="/shop"
            className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}-${item.color}`}
                className="bg-white rounded-lg shadow-md p-6 mb-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Image</span>
                  </div>
                  <div className="flex-grow">
                    <Link to={`/product/${item.product.id}`}>
                      <h3 className="text-lg font-semibold hover:text-primary transition-colors">
                        {item.product.name}
                      </h3>
                    </Link>
                    <p className="text-gray-600">
                      Size: {item.size} | Color: {item.color}
                    </p>
                    <p className="text-primary font-bold">
                      ${item.product.price}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.size,
                          item.color,
                          item.quantity - 1,
                        )
                      }
                      className="p-1 bg-gray-200 hover:bg-gray-300 rounded"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-3 py-1 bg-gray-100 rounded">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.size,
                          item.color,
                          item.quantity + 1,
                        )
                      }
                      className="p-1 bg-gray-200 hover:bg-gray-300 rounded"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() =>
                        removeItem(item.product.id, item.size, item.color)
                      }
                      className="text-red-500 hover:text-red-700 mt-2"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>
                  Subtotal (
                  {items.reduce((acc, item) => acc + item.quantity, 0)} items)
                </span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${(totalPrice * 0.08).toFixed(2)}</span>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${(totalPrice * 1.08).toFixed(2)}</span>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <Link
                to="/checkout"
                className="w-full bg-accent hover:bg-accent-600 text-white py-3 px-4 rounded-lg font-semibold text-center block transition-colors"
              >
                Proceed to Checkout
              </Link>
              <button
                onClick={clearCart}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-4 rounded-lg font-semibold transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/shop"
            className="text-primary hover:text-primary-600 font-semibold"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Cart;
