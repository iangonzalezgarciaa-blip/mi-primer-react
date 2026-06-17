// Componente Cart - Página del carrito de compras
// Muestra las pizzas agregadas, permite ajustar cantidades, vaciar el carrito y ver el total
import { Link } from 'react-router-dom'

const Cart = ({ cart, onChangeCount, onClearCart }) => {
  // Calculamos el total sumando precio * cantidad de cada pizza en el carrito
  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0)

  return (
    <main className="container my-4">
      {/* Encabezado del carrito */}
      <div className="cart-hero mb-4 p-4 rounded-4">
        <h2 className="mb-2">Tu carrito de compras</h2>
        <p className="mb-0 text-muted">
          Ajusta las cantidades, revisa tu pedido y sigue disfrutando de la experiencia rústica.
        </p>
      </div>

      {/* Enlace para volver al catálogo */}
      <Link to="/" className="btn btn-outline-dark mb-3">← Seguir comprando</Link>

      {/* Si el carrito está vacío mostramos un aviso */}
      {cart.length === 0 ? (
        <div className="alert alert-secondary">No hay pizzas en el carrito.</div>
      ) : (
        <div className="row g-4">
          {/* Lista de pizzas en el carrito */}
          <div className="col-12 col-lg-8 cart-list-column">
            {cart.map((pizza) => (
              <div key={pizza.id} className="card mb-3 cart-card">
                <div className="row g-0 align-items-center cart-card-row">
                  {/* Imagen de la pizza */}
                  <div className="col-3 cart-card-image">
                    <img
                      src={pizza.img}
                      className="img-fluid rounded-start"
                      alt={pizza.name}
                    />
                  </div>
                  {/* Nombre y precio */}
                  <div className="col-5">
                    <div className="card-body text-start">
                      <h5 className="card-title text-capitalize">{pizza.name}</h5>
                      <p className="card-text mb-2">
                        ${pizza.price.toLocaleString('es-CL')}
                      </p>
                    </div>
                  </div>
                  {/* Botones para aumentar o disminuir la cantidad */}
                  <div className="col-4">
                    <div className="d-flex justify-content-end align-items-center gap-2 px-3">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => onChangeCount(pizza.id, -1)}
                      >
                        -
                      </button>
                      <span className="fw-bold">{pizza.count}</span>
                      <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => onChangeCount(pizza.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Panel lateral con el total y botones de acción */}
          <div className="col-12 col-lg-4">
            <div className="card p-3 text-start">
              <h5>Total</h5>
              <p className="fs-4 fw-bold">${total.toLocaleString('es-CL')}</p>
              <button className="btn btn-outline-danger w-100 mb-3" onClick={onClearCart}>
                Limpiar carrito
              </button>
              <button className="btn btn-dark w-100">Pagar</button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Cart
