// App.jsx - Componente raíz de la aplicación Pizzería Mamma Mía
// Aquí se configura React Router con todas las rutas y se maneja el estado global del carrito
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import { pizzaCart } from './pizzas'
import './App.css'

function App() {
  // Estado del carrito de compras, se inicializa con datos de ejemplo
  const [cart, setCart] = useState(pizzaCart)
  // Estado para el mensaje tipo toast que aparece al agregar una pizza
  const [message, setMessage] = useState('')

  // Calculamos el total del carrito sumando precio * cantidad de cada pizza
  const totalCarrito = cart.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  )

  // Función para agregar una pizza al carrito o aumentar su cantidad si ya existe
  const handleAddToCart = (pizza) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === pizza.id)
      if (existing) {
        // Si la pizza ya está en el carrito, aumentamos en 1 su cantidad
        return currentCart.map((item) =>
          item.id === pizza.id
            ? { ...item, count: item.count + 1 }
            : item
        )
      }
      // Si es nueva, la agregamos con cantidad 1
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

  // Función para cambiar la cantidad de una pizza en el carrito (+1 o -1)
  // Si llega a 0, se elimina automáticamente del carrito
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

  // Función para vaciar completamente el carrito
  const handleClearCart = () => {
    setCart([])
  }

  // Efecto para ocultar el mensaje toast después de 3.5 segundos
  useEffect(() => {
    if (!message) return
    const timer = setTimeout(() => setMessage(''), 3500)
    return () => clearTimeout(timer)
  }, [message])

  return (
    <BrowserRouter>
      {/* Barra de navegación con el total del carrito */}
      <Navbar total={totalCarrito} />

      {/* Mensaje toast que aparece al agregar una pizza al carrito */}
      <div className={`toast-message ${message ? 'show' : ''}`} role="status" aria-live="polite">
        <div className="toast-body">{message}</div>
      </div>

      {/* Definición de todas las rutas de la aplicación */}
      <Routes>
        {/* Ruta principal - muestra el catálogo de pizzas */}
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />

        {/* Rutas de autenticación */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Ruta del carrito de compras */}
        <Route path="/cart" element={<Cart cart={cart} onChangeCount={handleChangeCount} onClearCart={handleClearCart} />} />

        {/* Ruta dinámica para ver el detalle de cualquier pizza por su id */}
        <Route path="/pizza/:id" element={<Pizza onAddToCart={handleAddToCart} />} />

        {/* Ruta del perfil del usuario */}
        <Route path="/profile" element={<Profile />} />

        {/* Ruta explícita para la página 404 */}
        <Route path="/404" element={<NotFound />} />

        {/* Cualquier ruta que no exista redirige al componente NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Pie de página */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
