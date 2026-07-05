import { createContext, useContext, useState, useEffect } from 'react'
import { pizzaCart } from '../pizzas'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(pizzaCart)
  const [message, setMessage] = useState('')

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0)

  const addToCart = (pizza) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === pizza.id)
      if (existing) {
        return prev.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        )
      }
      return [...prev, { id: pizza.id, name: pizza.name, price: pizza.price, count: 1, img: pizza.img }]
    })
    setMessage(`Su pizza ${pizza.name} se ha agregado al carrito de compras, BUENA ELECCIÓN!`)
  }

  const changeCount = (pizzaId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => item.id === pizzaId ? { ...item, count: Math.max(0, item.count + delta) } : item)
        .filter((item) => item.count > 0)
    )
  }

  const clearCart = () => setCart([])

  useEffect(() => {
    if (!message) return
    const timer = setTimeout(() => setMessage(''), 3500)
    return () => clearTimeout(timer)
  }, [message])

  return (
    <CartContext.Provider value={{ cart, total, message, addToCart, changeCount, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
