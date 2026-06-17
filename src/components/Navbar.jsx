const Navbar = ({ activeRoute, onNavigate, token = false, total = 0 }) => {
  const tabClass = (tab) =>
    tab === activeRoute ? 'btn btn-light text-dark' : 'btn btn-outline-light'

  return (
    <nav className="navbar navbar-expand-lg site-navbar px-4">
      <div className="container-fluid">
        <span className="navbar-brand">Pizzería Mamma Mía!</span>

        <div className="d-flex gap-2 flex-wrap">
          <button
            className={tabClass('home')}
            onClick={() => onNavigate?.('home')}
          >
            🍕 Home
          </button>

          <button
            className={tabClass('pizza')}
            onClick={() => onNavigate?.('pizza')}
          >
            🍽️ Pizza
          </button>

          <button
            className={tabClass('cart')}
            onClick={() => onNavigate?.('cart')}
          >
            🛒 Carrito
          </button>

          {token ? (
            <>
              <button className="btn btn-outline-light">🔓 Profile</button>
              <button className="btn btn-outline-light">🔒 Logout</button>
            </>
          ) : (
            <>
              <button
                className="btn btn-outline-light"
                onClick={() => onNavigate?.('login')}
              >
                🔐 Login
              </button>
              <button
                className="btn btn-outline-light"
                onClick={() => onNavigate?.('register')}
              >
                🔐 Register
              </button>
            </>
          )}

          <button className="btn btn-outline-info">
            🧾 Total: ${total.toLocaleString('es-CL')}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar