import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CurveNest</h3>
            <p>Plus-size fashion for everyone.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop/men" className="hover:text-primary">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/shop/women" className="hover:text-primary">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/shop/categories" className="hover:text-primary">
                  Categories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 CurveNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
