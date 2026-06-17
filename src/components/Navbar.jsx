const Navbar = () => {
  const total = 25000
  const token = false

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-4">
      <div className="container-fluid">
        <span className="navbar-brand">Pizzería Mamma Mía!</span>

        <div className="d-flex gap-2">
          <button className="btn btn-outline-light">🍕 Home</button>

          {token ? (
            <>
              <button className="btn btn-outline-light">🔓 Profile</button>
              <button className="btn btn-outline-light">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light">🔐 Login</button>
              <button className="btn btn-outline-light">🔐 Register</button>
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