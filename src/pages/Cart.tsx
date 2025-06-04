
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { useStore } from '@/store/useStore';

const Cart = () => {
  const { cart, updateCartQuantity, removeFromCart, cartTotal, cartCount } = useStore();

  if (cart.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={40} className="text-gray-400" />
            </div>
            <h1 className="font-poppins font-bold text-3xl mb-4">Your cart is empty</h1>
            <p className="font-inter text-gray-600 mb-8">
              Discover our premium collection and add some items to your cart
            </p>
            <Link to="/shop">
              <Button size="lg" className="bg-yego-red hover:bg-red-700 font-poppins font-semibold">
                Continue Shopping
              </Button>
            </Link>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-poppins font-bold text-3xl mb-8">
            Shopping Cart ({cartCount} {cartCount === 1 ? 'item' : 'items'})
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item, index) => (
                <motion.div
                  key={`${item.productId}-${item.size}-${item.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      {item.product?.images?.[0] && (
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-poppins font-semibold text-lg mb-2">
                        {item.product?.name || 'Product Name'}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <span>Size: {item.size}</span>
                        <span>Color: {item.color}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <span className="font-inter text-sm text-gray-600">Qty:</span>
                          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                            <button
                              onClick={() => updateCartQuantity(item.productId, item.size, item.color, Math.max(1, item.quantity - 1))}
                              className="px-3 py-1 hover:bg-gray-100 transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-3 py-1 border-x border-gray-300 min-w-[50px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateCartQuantity(item.productId, item.size, item.color, item.quantity + 1)}
                              className="px-3 py-1 hover:bg-gray-100 transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="font-poppins font-bold text-lg text-yego-red">
                            ${((item.product?.price || 0) * item.quantity).toFixed(2)}
                          </p>
                          {item.quantity > 1 && (
                            <p className="font-inter text-sm text-gray-500">
                              ${item.product?.price || 0} each
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.productId, item.size, item.color)}
                      className="self-start p-2 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h2 className="font-poppins font-bold text-xl mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="font-inter">Subtotal</span>
                    <span className="font-poppins font-semibold">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-inter">Shipping</span>
                    <span className="font-poppins font-semibold text-green-600">
                      {cartTotal >= 100 ? 'Free' : '$10.00'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-inter">Tax</span>
                    <span className="font-poppins font-semibold">
                      ${(cartTotal * 0.08).toFixed(2)}
                    </span>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="flex justify-between text-lg">
                    <span className="font-poppins font-bold">Total</span>
                    <span className="font-poppins font-bold text-yego-red">
                      ${(cartTotal + (cartTotal >= 100 ? 0 : 10) + cartTotal * 0.08).toFixed(2)}
                    </span>
                  </div>
                </div>

                {cartTotal < 100 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="font-inter text-sm text-blue-800">
                      Add ${(100 - cartTotal).toFixed(2)} more for free shipping!
                    </p>
                  </div>
                )}

                <div className="space-y-3">
                  <Link to="/checkout" className="block">
                    <Button size="lg" className="w-full bg-yego-red hover:bg-red-700 font-poppins font-semibold">
                      Proceed to Checkout
                    </Button>
                  </Link>
                  
                  <Link to="/shop" className="block">
                    <Button variant="outline" size="lg" className="w-full border-gray-300 font-poppins font-semibold">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>

                {/* Security Badges */}
                <div className="mt-6 pt-6 border-t border-gray-300">
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                    <span>🔒 Secure Checkout</span>
                    <span>📦 Free Returns</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Cart;
