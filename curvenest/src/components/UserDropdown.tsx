import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, ChevronDown, LogOut, UserCircle } from 'lucide-react';
import { useAuthStore } from '../context/authStore';

const UserDropdown: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
          isAuthenticated
            ? 'text-primary hover:bg-primary-50'
            : 'text-gray-700 hover:text-primary hover:bg-gray-50'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={isAuthenticated ? 'User menu' : 'Authentication menu'}
      >
        <User size={20} className={isAuthenticated ? 'text-primary' : ''} />
        {isAuthenticated && user && (
          <span className="hidden sm:inline text-sm font-medium">
            {user.name.split(' ')[0]}
          </span>
        )}
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50"
          role="menu"
          aria-orientation="vertical"
        >
          {isAuthenticated && user ? (
            // Authenticated user menu
            <>
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              <Link
                to="/account"
                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                <UserCircle size={16} />
                My Account
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                role="menuitem"
              >
                <LogOut size={16} />
                Logout
              </button>
            </>
          ) : (
            // Unauthenticated user menu
            <>
              <Link
                to="/login"
                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                <User size={16} />
                Login
              </Link>
              <Link
                to="/signup"
                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                <User size={16} />
                Sign Up
              </Link>
              <Link
                to="/register"
                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                <User size={16} />
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserDropdown;