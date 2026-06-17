// Componente Pizza - Vista de detalle individual de una pizza
// Usa useParams para obtener el id dinámico desde la URL (ej: /pizza/p001)
// Consume la API para traer los datos de la pizza seleccionada
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Pizza = ({ onAddToCart }) => {
  // Obtenemos el id de la pizza desde la URL de forma dinámica
  const { id } = useParams()
  const navigate = useNavigate()

  // Estado para almacenar los datos de la pizza y el estado de carga/error
  const [pizza, setPizza] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Efecto para consultar la API cada vez que cambia el id de la URL
  useEffect(() => {
    const fetchPizza = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`)
        if (!res.ok) {
          throw new Error('No se pudo obtener la pizza desde el servidor')
        }
        const data = await res.json()
        setPizza(data)
      } catch (err) {
        console.error('Error al cargar la pizza:', err)
        setError('¡Ups! No pudimos cargar la pizza. Revisa que el servidor esté encendido e intenta de nuevo.')
      } finally {
        setLoading(false)
      }
    }
    fetchPizza()
  }, [id])

  // Mientras se cargan los datos mostramos un spinner amigable
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

  // Si hubo un error, mostramos un mensaje amigable con opción de reintentar
  if (error) {
    return (
      <main className="container my-4 text-center">
        <div className="alert alert-danger my-5" role="alert">
          <h4 className="alert-heading">🍕 ¡Algo salió mal!</h4>
          <p>{error}</p>
          <hr />
          <button className="btn btn-outline-danger" onClick={() => window.location.reload()}>
            Reintentar
          </button>
        </div>
      </main>
    )
  }

  // Si no se encontró la pizza, mostramos un aviso
  if (!pizza) {
    return (
      <main className="container my-4 text-center">
        <div className="alert alert-warning my-5">
          <p className="mb-0">🍕 Pizza no encontrada. ¿Seguro que existe ese sabor?</p>
        </div>
      </main>
    )
  }

  return (
    <main className="container my-4">
      <div className="card pizza-card mx-auto">
        <div className="row g-0 align-items-center">
          {/* Imagen de la pizza */}
          <div className="col-12 col-md-6">
            <img
              src={pizza.img}
              alt={pizza.name}
              className="img-fluid pizza-image"
            />
          </div>

          {/* Información detallada de la pizza */}
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

              {/* Botón para agregar la pizza al carrito y navegar al carrito */}
              <button
                className="btn btn-warning btn-lg btn-add-pizza"
                onClick={() => {
                  onAddToCart?.(pizza)
                  navigate('/cart')
                }}
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
