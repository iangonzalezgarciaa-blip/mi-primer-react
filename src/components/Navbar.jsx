import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useUser } from '../context/UserContext'

const Navbar = () => {
  const { total } = useCart()
  const { token, logout } = useUser()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

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
              <button className="btn btn-outline-light" onClick={handleLogout}>🔒 Logout</button>
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
