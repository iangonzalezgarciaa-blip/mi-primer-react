// Navbar - Barra de navegación que consume CartContext para mostrar el total
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = ({ token = false }) => {
  const { total } = useCart()

  return (
    <nav className="navbar navbar-expand-lg site-navbar px-4">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-decoration-none">
          Pizzería Mamma Mía!
        </Link>

        <div className="d-flex gap-2 flex-wrap">
          <Link to="/" className="btn btn-outline-light">🍕 Home</Link>

          {token ? (
            <>
              <Link to="/profile" className="btn btn-outline-light">🔓 Profile</Link>
              <Link to="/" className="btn btn-outline-light">🔒 Logout</Link>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light">🔐 Login</Link>
              <Link to="/register" className="btn btn-outline-light">🔐 Register</Link>
            </>
          )}

          <Link to="/cart" className="btn btn-outline-info">
            🛒 Total: ${total.toLocaleString('es-CL')}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
