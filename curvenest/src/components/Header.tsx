import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";
import { useCartStore } from "../context/cartStore";
import UserDropdown from "./UserDropdown";

const Header: React.FC = () => {
  const totalItems = useCartStore((state) => state.getTotalItems());
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          CurveNest
        </Link>
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-primary font-semibold border-b-2 border-primary"
                  : "text-gray-700 hover:text-primary"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-primary font-semibold border-b-2 border-primary"
                  : "text-gray-700 hover:text-primary"
              }`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-primary font-semibold border-b-2 border-primary"
                  : "text-gray-700 hover:text-primary"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-primary font-semibold border-b-2 border-primary"
                  : "text-gray-700 hover:text-primary"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>
        <div className="flex items-center space-x-4">
          <UserDropdown />
          <Link
            to="/cart"
            className="text-gray-700 hover:text-primary relative"
          >
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          </Link>
          <button className="md:hidden">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
