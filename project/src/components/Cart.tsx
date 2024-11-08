import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {state.items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {state.items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 py-4 border-b">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-500">${item.price}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() =>
                        dispatch({
                          type: 'UPDATE_QUANTITY',
                          payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) }
                        })
                      }
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch({
                          type: 'UPDATE_QUANTITY',
                          payload: { id: item.id, quantity: item.quantity + 1 }
                        })
                      }
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span>${state.total.toFixed(2)}</span>
            </div>
            <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};