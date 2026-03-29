import { FaTrash, FaPlus, FaMinus } from "react-icons/fa"

function CartItem({ item, onRemove, onUpdateQuantity }) {
  if (!item) {
    return (
      <div className="p-4 rounded-lg bg-gray-100 text-gray-500 text-center">
        No item data
      </div>
    )
  }

  const { id, name, price, quantity = 1 } = item
  const itemTotal = (price ?? 0) * quantity

  return (
    <div className="p-3 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-lg border-2 border-gradient-to-r hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800 line-clamp-1 text-sm">{name}</h4>
          <p className="text-purple-600 font-bold text-lg">₹{(price ?? 0).toLocaleString()}</p>
        </div>
        <button 
          onClick={() => onRemove(id)} 
          className="cursor-pointer text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"
        >
          <FaTrash size={16} />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-1 border-2 border-orange-300">
          <button 
            onClick={() => onUpdateQuantity(id, quantity - 1)} 
            disabled={quantity <= 1} 
            className="cursor-pointer p-1 hover:bg-red-100 text-red-500 disabled:opacity-50 rounded transition-colors"
          >
            <FaMinus size={14} />
          </button>
          <span className="w-6 text-center font-bold text-gray-800 text-sm">{quantity}</span>
          <button 
            onClick={() => onUpdateQuantity(id, quantity + 1)} 
            className="cursor-pointer p-1 hover:bg-green-100 text-green-500 rounded transition-colors"
          >
            <FaPlus size={14} />
          </button>
        </div>

        <div className="text-right bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-1 rounded-lg">
          <p className="text-xs text-gray-600 font-semibold">Total</p>
          <p className="text-lg font-bold text-purple-700">₹{itemTotal.toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
}

export default CartItem
