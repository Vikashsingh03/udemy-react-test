import CartItem from "./CartItem"

function Cart({cart, onRemove, onUpdateQuantity,total}) {
    if(cart.length === 0) {
        return <div className="p-4 text-center">Your cart is empty</div>
    }
  return (
    <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {cart.map(item => (
            <CartItem 
                key={item.id}
                item={item}
                onRemove={onRemove}
                onUpdateQuantity={onUpdateQuantity}
            />
        ))}
        <div className="mt-4 text-xl font-bold">Total: ${ typeof total === 'string' ? total : total.toFixed(2) }</div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Checkout
        </button>
      
    </div>
  )
}

export default Cart
