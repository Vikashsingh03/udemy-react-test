import { useEffect, useMemo, useState } from "react";

export function useCart() {
  const [cart, setCart] = useState(() => {
 try {
    const savedCart = localStorage.getItem("cart")
    return savedCart ? JSON.parse(savedCart) : []
 } catch (error) {
    console.error("Error loading cart from localStorage:", error)
    return []
 }
})  

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart))
    } catch (error) {
      console.error("Error saving cart to localStorage:", error)
    }
  }, [cart])

  useEffect(() =>{
    const handleStorageChange = (e) => {
      if (e.key === "cart") {   
        try {
          setCart(e.newValue ? JSON.parse(e.newValue) : [])
        } catch (error) {
          console.error("Error parsing cart from localStorage:", error)
        }   
        }
    }
    window.addEventListener("storage", handleStorageChange)
    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
},[])


  const addToCart = (product) => {  
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        )
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const total = useMemo(() => {
    return Number(cart.reduce((sum, item) => {
      const itemTotal = (item.price ?? 0) * (item.quantity ?? 1)
      return sum + itemTotal  
    }, 0).toFixed(2))
  }, [cart])

    return {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        total
    }

}

