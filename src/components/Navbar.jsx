const Navbar = ({ onNavigate, token = false }) => {
  const total = 25000

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-4">
      <div className="container-fluid">
        <span className="navbar-brand">Pizzería Mamma Mía!</span>

        <div className="d-flex gap-2">
          <button
            className="btn btn-outline-light"
            onClick={() => onNavigate?.('home')}
          >
            🍕 Home
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
            🛒 Total: ${total.toLocaleString('es-CL')}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar