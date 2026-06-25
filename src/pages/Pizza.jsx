// Pizza - Detalle de una pizza, consume CartContext y PizzaContext
import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Pizza = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const [pizza, setPizza] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPizza = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`)
        if (!res.ok) throw new Error('No se pudo obtener la pizza')
        const data = await res.json()
        setPizza(data)
      } catch (err) {
        console.error('Error al cargar la pizza:', err)
        setError('¡Ups! No pudimos cargar la pizza. Revisa que el servidor esté encendido.')
      } finally {
        setLoading(false)
      }
    }
    fetchPizza()
  }, [id])

  if (loading) {
    return (
      <main className="container my-4 text-center">
        <div className="spinner-border text-warning my-5" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="text-muted">Cargando pizza...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main className="container my-4 text-center">
        <div className="alert alert-danger my-5" role="alert">
          <h4 className="alert-heading">🍕 ¡Algo salió mal!</h4>
          <p>{error}</p>
          <hr />
          <button className="btn btn-outline-danger" onClick={() => window.location.reload()}>Reintentar</button>
        </div>
      </main>
    )
  }

  if (!pizza) {
    return (
      <main className="container my-4 text-center">
        <div className="alert alert-warning my-5">
          <p className="mb-0">🍕 Pizza no encontrada.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="container my-4">
      <Link to="/" className="btn btn-outline-dark mb-3">← Volver al catálogo</Link>

      <div className="card pizza-card mx-auto">
        <div className="row g-0 align-items-center">
          <div className="col-12 col-md-6">
            <img src={pizza.img} alt={pizza.name} className="img-fluid pizza-image" />
          </div>
          <div className="col-12 col-md-6">
            <div className="card-body">
              <h1 className="card-title text-capitalize mb-3">{pizza.name}</h1>
              <p className="text-muted fs-5 mb-4">
                Precio: <strong>${pizza.price.toLocaleString('es-CL')}</strong>
              </p>
              <p className="card-text mb-4">{pizza.desc}</p>

              <h5 className="mb-3">Ingredientes</h5>
              <ul className="list-unstyled ingredients-list mb-4">
                {pizza.ingredients && pizza.ingredients.map((ing, i) => (
                  <li key={i}>• {ing}</li>
                ))}
              </ul>

              <button
                className="btn btn-warning btn-lg btn-add-pizza"
                onClick={() => { addToCart(pizza); navigate('/cart') }}
              >
                Añadir al carrito 🛒
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Pizza
