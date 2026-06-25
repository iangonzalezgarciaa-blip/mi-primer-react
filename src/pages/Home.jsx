// Home - Catálogo de pizzas, consume PizzaContext y CartContext
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
import { usePizzas } from '../context/PizzaContext'
import { useCart } from '../context/CartContext'

const Home = () => {
  const { pizzas, loading, error } = usePizzas()
  const { addToCart } = useCart()

  return (
    <>
      <Header />
      <main className="container my-4">
        {loading ? (
          <div className="text-center my-5">
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="text-muted mt-2">Cargando el menú...</p>
          </div>
        ) : error ? (
          <div className="alert alert-danger text-center my-5" role="alert">
            <h4 className="alert-heading">🍕 ¡Algo salió mal!</h4>
            <p>{error}</p>
            <hr />
            <button className="btn btn-outline-danger" onClick={() => window.location.reload()}>
              Reintentar
            </button>
          </div>
        ) : (
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
                  onAdd={() => addToCart(pizza)}
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
