// Componente NotFound - Página 404 para rutas que no existen
// Incluye un enlace para volver a la página principal usando Link de react-router-dom
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="container my-5 text-center">
      <div className="row justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="col-md-6">
          {/* Código de error grande y visible */}
          <div className="display-1 fw-bold text-danger mb-3">404</div>
          <h1 className="mb-4">¡Oops! Página no encontrada</h1>

          <div className="mb-5">
            <p className="fs-5 text-muted mb-4">
              Parece que te has perdido en el menú. La página que buscas no existe.
            </p>
            <div className="display-4 mb-4">🍕</div>
          </div>

          {/* Mensaje informativo */}
          <div className="alert alert-info mb-4">
            <p className="mb-0">
              No te preocupes, vuelve a la página principal y continúa disfrutando de nuestras deliciosas pizzas.
            </p>
          </div>

          {/* Link para volver al inicio */}
          <Link to="/" className="btn btn-warning btn-lg">
            Volver a la página principal
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound
