// NotFound - Página 404
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="container my-5 text-center">
      <div className="row justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="col-md-6">
          <div className="display-1 fw-bold text-danger mb-3">404</div>
          <h1 className="mb-4">¡Oops! Página no encontrada</h1>

          <div className="mb-5">
            <p className="fs-5 text-muted mb-4">
              Parece que te has perdido en el menú. La página que buscas no existe.
            </p>
            <div className="display-4 mb-4">🍕</div>
          </div>

          <div className="alert alert-info mb-4">
            <p className="mb-0">
              No te preocupes, vuelve a la página principal y continúa disfrutando de nuestras deliciosas pizzas.
            </p>
          </div>

          <Link to="/" className="btn btn-warning btn-lg">Volver a la página principal</Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound
