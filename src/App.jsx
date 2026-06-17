import { useEffect, useState } from 'react' // hook para estado local
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './components/Cart'
import Footer from './components/Footer'
import { pizzas, pizzaCart } from './pizzas'
import './App.css'

function App() {
  const [route, setRoute] = useState('home') // 'home' | 'login' | 'register' | 'cart'
  const [cart, setCart] = useState(pizzaCart)
  const [message, setMessage] = useState('')

  const totalCarrito = cart.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  )

  const handleAddToCart = (pizza) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === pizza.id)
      if (existing) {
        return currentCart.map((item) =>
          item.id === pizza.id
            ? { ...item, count: item.count + 1 }
            : item
        )
      }
      return [
        ...currentCart,
        {
          id: pizza.id,
          name: pizza.name,
          price: pizza.price,
          count: 1,
          img: pizza.img,
        },
      ]
    })
    setMessage(`Su pizza ${pizza.name} se ha agregado al carrito de compras, BUENA ELECCIÓN!`)
  }

  const handleChangeCount = (pizzaId, delta) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === pizzaId
            ? { ...item, count: Math.max(0, item.count + delta) }
            : item
        )
        .filter((item) => item.count > 0)
    )
  }

  const handleClearCart = () => {
    setCart([])
  }

  useEffect(() => {
    if (!message) return

    const timer = setTimeout(() => setMessage(''), 3500)
    return () => clearTimeout(timer)
  }, [message])

  const renderRoute = () => {
    switch (route) {
      case 'login':
        return <LoginPage />
      case 'register':
        return <RegisterPage />
      case 'cart':
        return (
          <Cart
            cart={cart}
            onChangeCount={handleChangeCount}
            onClearCart={handleClearCart}
          />
        )
      case 'home':
      default:
        return <Home pizzas={pizzas} onAddToCart={handleAddToCart} />
    }
  }

  return (
    <>
      <Navbar onNavigate={setRoute} total={totalCarrito} />
      <div className={`toast-message ${message ? 'show' : ''}`} role="status" aria-live="polite">
        <div className="toast-body">{message}</div>
      </div>
      {renderRoute()}
      <Footer />
    </>
  )
}

export default App