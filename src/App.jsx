import React, { useState } from 'react'
import {useCart} from './hooks/useCart.js'
import CartItem from './components/CartItem'
import { products } from './data/product.js'
import ProductCard from './components/ProductCard'
import { FaShoppingBag, FaSearch, FaUser, FaHeart, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaShoppingCart, FaStar, FaBox, FaCheck, FaDollarSign, FaCreditCard, FaGift, FaLock, FaEnvelope, FaPhone } from 'react-icons/fa'

function App() {
  const {cart, removeFromCart, updateQuantity, total, addToCart} = useCart()
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(products.map(p => p.category))]
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100'>
  
      <header className='sticky top-0 z-50 bg-white shadow-lg border-b-2 border-blue-500'>
        <div className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
            <div className='flex items-center justify-between gap-4'>
              <div className='flex items-center gap-2 min-w-max'>
                <FaShoppingBag className='text-3xl' />
                <h1 className='text-2xl font-bold'>EStore</h1>
              </div>

              <div className='hidden md:flex flex-1 max-w-md items-center bg-white rounded-lg px-4 py-2 shadow-md'>
                <FaSearch className='text-gray-400' />
                <input 
                  type='text' 
                  placeholder='Search products...' 
                  className='w-full ml-2 outline-none text-gray-800'
                />
              </div>

              <div className='flex items-center gap-6'>
                <button className='flex items-center gap-2 hover:bg-blue-700 px-3 py-2 rounded transition-all'>
                  <FaUser size={20} />
                  <span className='hidden sm:inline text-sm font-semibold'>Account</span>
                </button>
                <button className='flex items-center gap-2 hover:bg-blue-700 px-3 py-2 rounded transition-all'>
                  <FaHeart size={20} />
                  <span className='hidden sm:inline text-sm font-semibold'>Wishlist</span>
                </button>
                <button className='flex items-center gap-2 bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-4 py-2 rounded-lg font-bold shadow-md transition-all'>
                  <FaShoppingCart size={18} />
                  <span className='inline-block bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold'>{cart.length}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gray-50 border-b border-gray-200'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide'>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 font-semibold whitespace-nowrap rounded-lg transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-blue-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2'>
            <div className='mb-8 bg-gradient-to-r from-blue-200 to-purple-200 p-6 rounded-2xl shadow-lg'>
              <h2 className='text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2'>
                <FaStar className='text-yellow-500' />
                {selectedCategory === 'All' ? 'All Products' : selectedCategory}
              </h2>
              <p className='text-gray-700'>Showing {filteredProducts.length} products</p>
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart} 
                />
              ))}
            </div>
          </div>

          <div className='lg:col-span-1'>
            <div className='sticky top-32 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 rounded-2xl shadow-2xl p-6 border-4 border-gradient-to-r from-pink-400 to-purple-400'>
              <h3 className='text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6 flex items-center gap-2'>
                <FaShoppingCart className='text-pink-600' /> Cart Summary
              </h3>

          
              {cart.length === 0 ? (
                <div className='text-center py-12 bg-gradient-to-br from-blue-100 to-pink-100 rounded-xl'>
                  <div className='text-5xl mb-4 flex justify-center'><FaBox className='text-4xl text-gray-600' /></div>
                  <p className='text-gray-700 text-lg font-medium'>Your cart is empty</p>
                  <p className='text-gray-600 text-sm mt-2'>Add items from the products list</p>
                </div>
              ) : (
                <>
                  <div className='space-y-3 mb-6 max-h-96 overflow-y-auto'>
                    {cart.map(item => (
                      <CartItem 
                        key={item.id}
                        item={item}
                        onRemove={removeFromCart}
                        onUpdateQuantity={updateQuantity}
                      />
                    ))}
                  </div>
                  
                  <div className='space-y-3 mb-6 bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg'>
                    <div className='flex justify-between items-center'>
                      <span className='text-gray-700 font-medium'>Subtotal</span>
                      <span className='text-purple-600 font-bold'>₹{total.toLocaleString()}</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-gray-700 font-medium'>Shipping</span>
                      <span className='text-green-600 font-bold flex items-center gap-1'>FREE <FaCheck /></span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-gray-700 font-medium'>Discount (5%)</span>
                      <span className='text-red-500 font-bold'>-₹{Math.floor(total * 0.05).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl p-4 mb-6 shadow-lg'>
                    <div className='flex justify-between items-center'>
                      <span className='text-white font-bold text-lg flex items-center gap-2'><FaDollarSign /> Total</span>
                      <span className='text-white font-bold text-2xl'>₹{Math.floor(total * 0.95).toLocaleString()}</span>
                    </div>
                  </div>

                  <button className='w-full cursor-pointer bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg mb-3 flex items-center justify-center gap-2'>
                    <FaCheck /> Proceed to Checkout
                  </button>
                  <button className='w-full cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-2 px-4 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2'>
                    <FaShoppingCart /> Continue Shopping
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className='bg-gray-900 text-gray-300 mt-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12'>
            <div>
              <h3 className='text-white font-bold text-lg mb-4'>ABOUT</h3>
              <ul className='space-y-2 text-sm'>
                <li><a href='#' className='hover:text-yellow-400 transition cursor-pointer'>About EStore</a></li>
                <li><a href='#' className='hover:text-yellow-400 transition cursor-pointer'>Careers</a></li>
                <li><a href='#' className='hover:text-yellow-400 transition cursor-pointer'>Blog</a></li>
                <li><a href='#' className='hover:text-yellow-400 transition cursor-pointer'>Press</a></li>
              </ul>
            </div>

            <div>
              <h3 className='text-white font-bold text-lg mb-4'>HELP</h3>
              <ul className='space-y-2 text-sm'>
                <li><a href='#' className='hover:text-yellow-400 transition cursor-pointer'>Contact Us</a></li>
                <li><a href='#' className='hover:text-yellow-400 transition cursor-pointer'>Track Order</a></li>
                <li><a href='#' className='hover:text-yellow-400 transition cursor-pointer'>Returns</a></li>
                <li><a href='#' className='hover:text-yellow-400 transition cursor-pointer'>FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className='text-white font-bold text-lg mb-4'>POLICY</h3>
              <ul className='space-y-2 text-sm'>
                <li><a href='#' className='hover:text-yellow-400 transition cursor-pointer'>Return Policy</a></li>
                <li><a href='#' className='hover:text-yellow-400 transition cursor-pointer'>Terms of Use</a></li>
                <li><a href='#' className='hover:text-yellow-400 transition cursor-pointer'>Security</a></li>
                <li><a href='#' className='hover:text-yellow-400 transition cursor-pointer'>Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className='text-white font-bold text-lg mb-4'>CONTACT & SOCIAL</h3>
              <p className='text-sm mb-4'>📧 support@estore.com</p>
              <p className='text-sm mb-4'>📞 1-800-123-4567</p>
              <div className='flex gap-4'>
                <a href='#' className='text-white hover:text-yellow-400 transition cursor-pointer'><FaFacebook size={20} /></a>
                <a href='#' className='text-white hover:text-yellow-400 transition cursor-pointer'><FaTwitter size={20} /></a>
                <a href='#' className='text-white hover:text-yellow-400 transition cursor-pointer'><FaInstagram size={20} /></a>
                <a href='#' className='text-white hover:text-yellow-400 transition cursor-pointer'><FaLinkedin size={20} /></a>
              </div>
            </div>
          </div>

          <div className='border-t border-gray-700 pt-8 mb-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
              <div>
                <h4 className='text-white font-semibold mb-4'>💳 Payments</h4>
                <p className='text-sm'>We accept all major credit cards, debit cards, UPI, and digital wallets for secure transactions.</p>
              </div>
              <div>
                <h4 className='text-white font-semibold mb-4'>🎁 Exciting Offers</h4>
                <p className='text-sm'>Get up to 50% off on selected items. Free shipping on orders above ₹500. Exclusive deals every day!</p>
              </div>
            </div>
          </div>

          <div className='border-t border-gray-700 pt-8 text-center text-sm'>
            <p className='mb-2'>🔒 All transactions are 100% secure and encrypted</p>
            <p className='text-gray-500'>&copy; 2024 EStore. All rights reserved. | Crafted with ❤️ for better shopping experience</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
