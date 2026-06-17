import { useEffect, useState } from 'react'
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'

const Home = ({ onAddToCart, onNavigate }) => {
  const [pizzas, setPizzas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/pizzas')
        const data = await res.json()
        setPizzas(data)
      } catch (err) {
        console.error('Error fetching pizzas', err)
      } finally {
        setLoading(false)
      }
    }
    fetchPizzas()
  }, [])

  return (
    <>
      <Header />

      <main className="container my-4">
        {loading ? (
          <p>Cargando pizzas...</p>
        ) : (
          <div className="row g-4">
            {pizzas.map((pizza) => (
              <div key={pizza.id} className="col-12 col-md-6 col-lg-4">
                <CardPizza
                  name={pizza.name}
                  price={pizza.price}
                  ingredients={pizza.ingredients}
                  img={pizza.img}
                  desc={pizza.desc}
                  onAdd={() => onAddToCart(pizza)}
                  onViewMore={() => onNavigate('pizza')}
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