import {FaShoppingCart, FaHeart, FaCheck, FaMobileAlt, FaHeadphones, FaMusic, FaCompactDisc, FaClock} from "react-icons/fa"
import { useState } from "react"

function ProductCard({product, onAddToCart}) {
  const [imageError, setImageError] = useState(false)
  
  if (!product) return null
  
  const {name = 'Product', price = 0, id = 0, image = ''} = product
  const colorVariants = [
    'from-blue-100 to-indigo-100',
    'from-pink-100 to-rose-100',
    'from-purple-100 to-violet-100',
    'from-green-100 to-emerald-100',
    'from-yellow-100 to-orange-100',
  ]
  
  const buttonVariants = [
    'from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700',
    'from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700',
    'from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700',
    'from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700',
    'from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700',
  ]
  
  const selectedColor = colorVariants[(id - 1) % colorVariants.length]
  const selectedButton = buttonVariants[(id - 1) % buttonVariants.length]
  
  const iconComponents = [
    FaMobileAlt,
    FaHeadphones,
    FaMusic,
    FaCompactDisc,
    FaClock
  ]
  
  const SelectedIcon = iconComponents[(id - 1) % iconComponents.length]

  return (
    <div className='bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group border-2 border-gray-200'>
      <div className={`bg-gradient-to-br ${selectedColor} h-48 flex items-center justify-center group-hover:brightness-110 transition-all overflow-hidden`}>
        {image && !imageError ? (
          <img 
            src={image} 
            alt={name}
            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
            onError={() => setImageError(true)}
          />
        ) : (
          <SelectedIcon className='text-6xl transform group-hover:scale-110 transition-transform duration-300 text-gray-700' />
        )}
      </div>

      <div className='p-5'>
        <h3 className='font-bold text-lg text-gray-800 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors line-height-tight'>
          {name}
        </h3>
        
        <div className='flex items-center gap-2 mb-3'>
          <div className='text-yellow-400 text-sm'>★★★★★</div>
          <span className='text-gray-500 text-xs'>(128 reviews)</span>
        </div>

        <div className='mb-4'>
          <div className='flex items-baseline gap-2'>
            <span className='text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>₹{price.toLocaleString()}</span>
            <span className='text-sm line-through text-gray-400'>₹{Math.round(price * 1.2).toLocaleString()}</span>
          </div>
          <p className='text-green-600 text-xs font-semibold flex items-center gap-1'><FaHeart className='text-red-500' /> Save ₹{Math.round(price * 0.2).toLocaleString()}</p>
        </div>

        <button 
          onClick={() => onAddToCart(product)}
          className={`w-full cursor-pointer bg-gradient-to-r ${selectedButton} text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg`}
        >
          <FaShoppingCart size={18} /> 
          Add to Cart
        </button>

        <p className='text-center text-xs text-green-600 font-semibold mt-3 flex items-center justify-center gap-1'><FaCheck /> In Stock</p>
      </div>
    </div>
  )
}

export default ProductCard
