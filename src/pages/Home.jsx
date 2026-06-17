// Componente Home - Página principal que muestra el catálogo de pizzas
// Consume la API para obtener la lista de pizzas y las renderiza con CardPizza
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'

const Home = ({ onAddToCart }) => {
  // Estado para almacenar las pizzas que llegan de la API
  const [pizzas, setPizzas] = useState([])
  // Estado para controlar si estamos cargando los datos
  const [loading, setLoading] = useState(true)
  // Estado para manejar errores de la API de forma amigable
  const [error, setError] = useState(null)

  // Efecto que se ejecuta al montar el componente para traer las pizzas de la API
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/pizzas')
        if (!res.ok) {
          throw new Error('Error en la respuesta del servidor')
        }
        const data = await res.json()
        setPizzas(data)
      } catch (err) {
        console.error('Error al cargar las pizzas:', err)
        setError('¡Ups! No pudimos cargar el menú. Asegúrate de que el servidor esté encendido e intenta de nuevo.')
      } finally {
        setLoading(false)
      }
    }
    fetchPizzas()
  }, [])

  return (
    <>
      {/* Banner principal de la pizzería */}
      <Header />

      <main className="container my-4">
        {/* Mientras se cargan los datos mostramos un spinner */}
        {loading ? (
          <div className="text-center my-5">
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="text-muted mt-2">Cargando el menú...</p>
          </div>
        ) : error ? (
          // Si hubo un error, mostramos un mensaje amigable
          <div className="alert alert-danger text-center my-5" role="alert">
            <h4 className="alert-heading">🍕 ¡Algo salió mal!</h4>
            <p>{error}</p>
            <hr />
            <button className="btn btn-outline-danger" onClick={() => window.location.reload()}>
              Reintentar
            </button>
          </div>
        ) : (
          // Renderizamos las tarjetas de pizza en un grid responsivo
          <div className="row g-4">
            {pizzas.map((pizza) => (
              <div key={pizza.id} className="col-12 col-md-6 col-lg-4">
                <CardPizza
                  id={pizza.id}
                  name={pizza.name}
                  price={pizza.price}
                  ingredients={pizza.ingredients}
                  img={pizza.img}
                  desc={pizza.desc}
                  onAdd={() => onAddToCart(pizza)}
                />
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  )
}

export default Home
