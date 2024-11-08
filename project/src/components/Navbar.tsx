import React from 'react';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { state } = useCart();

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-semibold text-gray-900">EcoShop</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.items.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};