import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useUser } from '../context/UserContext'

const Cart = () => {
  const { cart, total, changeCount, clearCart } = useCart()
  const { token } = useUser()
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const handleCheckout = async () => {
    setSuccess('')
    setError('')
    try {
      const res = await fetch('http://localhost:5000/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'No se pudo procesar la compra')
      setSuccess('¡Compra realizada con éxito! Gracias por tu pedido.')
      clearCart()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <main className="container my-4">
      <div className="cart-hero mb-4 p-4 rounded-4">
        <h2 className="mb-2">Tu carrito de compras</h2>
        <p className="mb-0 text-muted">
          Ajusta las cantidades, revisa tu pedido y sigue disfrutando de la experiencia rústica.
        </p>
      </div>

      <Link to="/" className="btn btn-outline-dark mb-3">← Seguir comprando</Link>

      {success && <div className="alert alert-success" role="alert">{success}</div>}
      {error && <div className="alert alert-danger" role="alert">{error}</div>}

      {cart.length === 0 ? (
        <div className="alert alert-secondary">No hay pizzas en el carrito.</div>
      ) : (
        <div className="row g-4">
          <div className="col-12 col-lg-8 cart-list-column">
            {cart.map((pizza) => (
              <div key={pizza.id} className="card mb-3 cart-card">
                <div className="row g-0 align-items-center cart-card-row">
                  <div className="col-3 cart-card-image">
                    <img src={pizza.img} className="img-fluid rounded-start" alt={pizza.name} />
                  </div>
                  <div className="col-5">
                    <div className="card-body text-start">
                      <h5 className="card-title text-capitalize">{pizza.name}</h5>
                      <p className="card-text mb-2">${pizza.price.toLocaleString('es-CL')}</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="d-flex justify-content-end align-items-center gap-2 px-3">
                      <button className="btn btn-outline-danger btn-sm" onClick={() => changeCount(pizza.id, -1)}>-</button>
                      <span className="fw-bold">{pizza.count}</span>
                      <button className="btn btn-outline-primary btn-sm" onClick={() => changeCount(pizza.id, 1)}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-12 col-lg-4">
            <div className="card p-3 text-start">
              <h5>Total</h5>
              <p className="fs-4 fw-bold">${total.toLocaleString('es-CL')}</p>
              <button className="btn btn-outline-danger w-100 mb-3" onClick={clearCart}>Limpiar carrito</button>
              <button className="btn btn-dark w-100" disabled={!token} onClick={handleCheckout}>Pagar</button>
              {!token && (
                <small className="text-muted d-block mt-2">Inicia sesión para pagar.</small>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Cart
