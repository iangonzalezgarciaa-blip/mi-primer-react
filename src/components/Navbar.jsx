// Componente Navbar - Barra de navegación principal de la pizzería
// Usa Link de react-router-dom para navegar entre las rutas sin recargar la página
import { Link } from 'react-router-dom'

const Navbar = ({ total = 0, token = false }) => {
  return (
    <nav className="navbar navbar-expand-lg site-navbar px-4">
      <div className="container-fluid">
        {/* Logo de la pizzería que lleva al inicio */}
        <Link to="/" className="navbar-brand text-decoration-none">
          Pizzería Mamma Mía!
        </Link>

        {/* Menú de navegación con enlaces a las distintas rutas */}
        <div className="d-flex gap-2 flex-wrap">
          {/* Enlace a la página principal */}
          <Link to="/" className="btn btn-outline-light">
            🍕 Home
          </Link>

          {/* Si el usuario tiene sesión activa, mostramos Profile y Logout */}
          {token ? (
            <>
              <Link to="/profile" className="btn btn-outline-light">
                🔓 Profile
              </Link>
              <Link to="/" className="btn btn-outline-light">
                🔒 Logout
              </Link>
            </>
          ) : (
            <>
              {/* Si no hay sesión, mostramos Login y Register */}
              <Link to="/login" className="btn btn-outline-light">
                🔐 Login
              </Link>
              <Link to="/register" className="btn btn-outline-light">
                🔐 Register
              </Link>
            </>
          )}

          {/* Botón del carrito que muestra el total y redirige a /cart */}
          <Link to="/cart" className="btn btn-outline-info">
            🛒 Total: ${total.toLocaleString('es-CL')}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
