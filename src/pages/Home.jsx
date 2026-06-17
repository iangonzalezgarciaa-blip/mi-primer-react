import Header from '../components/Header'
import CardPizza from '../components/CardPizza'

const Home = () => {
  return (
    <>
      <Header />

      <main className="container my-4">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={['mozzarella', 'tomates', 'jamón', 'orégano']}
              img="https://locosxlaparrilla.com/wp-content/uploads/2015/02/Receta-recetas-locos-x-la-parrilla-locosxlaparrilla-receta-pizza-napolitana-pizza-napolitana-receta-pizza-2.jpg"
            />
          </div>

          <div className="col-12 col-md-4">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={['mozzarella', 'gorgonzola', 'parmesano', 'provolone']}
              img="https://img-global.cpcdn.com/recipes/c8a84ffca7fcb1ab/680x781cq80/pizza-espanola-foto-principal.jpg"
            />
          </div>

          <div className="col-12 col-md-4">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={['mozzarella', 'pepperoni', 'orégano']}
              img="https://www.paulinacocina.net/wp-content/uploads/2024/10/receta-pizza-de-pepperoni-facil-1729847335.jpg"
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home