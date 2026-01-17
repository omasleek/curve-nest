import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCartStore } from "../context/cartStore";
import UserDropdown from "./UserDropdown";

const Header: React.FC = () => {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
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
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg border-t z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `transition-colors py-2 ${
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
                onClick={closeMenu}
                className={({ isActive }) =>
                  `transition-colors py-2 ${
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
                onClick={closeMenu}
                className={({ isActive }) =>
                  `transition-colors py-2 ${
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
                onClick={closeMenu}
                className={({ isActive }) =>
                  `transition-colors py-2 ${
                    isActive
                      ? "text-primary font-semibold border-b-2 border-primary"
                      : "text-gray-700 hover:text-primary"
                  }`
                }
              >
                Contact
              </NavLink>
              <Link
                to="/login"
                onClick={closeMenu}
                className="text-gray-700 hover:text-primary py-2 transition-colors"
              >
                Login
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
