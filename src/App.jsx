// App.jsx - Componente raíz con React Router y Context Providers
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider, useCart } from './context/CartContext'
import { PizzaProvider } from './context/PizzaContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import './App.css'

function AppContent() {
  const { message } = useCart()

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <div className={`toast-message ${message ? 'show' : ''}`} role="status" aria-live="polite">
        <div className="toast-body">{message}</div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <PizzaProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </PizzaProvider>
    </BrowserRouter>
  )
}

export default App
