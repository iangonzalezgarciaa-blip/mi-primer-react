import { useEffect, useState } from 'react'

const Pizza = ({ onAddToCart, onNavigate }) => {
  const [pizza, setPizza] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/pizzas/p001')
        const data = await res.json()
        setPizza(data)
      } catch (err) {
        console.error('Error fetching pizza', err)
      } finally {
        setLoading(false)
      }
    }
    fetchPizza()
  }, [])

  if (loading) return <p>Cargando pizza...</p>
  if (!pizza) return <p>Pizza no encontrada.</p>

  return (
    <main className="container my-4">
      <div className="card pizza-card mx-auto">
        <div className="row g-0 align-items-center">
          <div className="col-12 col-md-6">
            <img
              src={pizza.img}
              alt={pizza.name}
              className="img-fluid pizza-image"
            />
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
                onClick={() => {
                  onAddToCart?.(pizza)
                  onNavigate?.('cart')
                }}
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Pizza
