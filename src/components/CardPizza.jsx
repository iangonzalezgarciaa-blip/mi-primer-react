// Componente CardPizza - Tarjeta reutilizable para mostrar cada pizza en el catálogo
// Recibe las props de la pizza y un callback para agregar al carrito
// Usa Link de react-router-dom para navegar al detalle de la pizza de forma dinámica
import { Link } from 'react-router-dom'

const CardPizza = ({ id, name, price, ingredients, img, desc, onAdd }) => {
  return (
    <div className="card h-100 shadow-sm">
      {/* Imagen de la pizza */}
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-capitalize">Pizza {name}</h5>
        <p className="card-text text-muted small">{desc}</p>
        <hr />

        {/* Lista de ingredientes */}
        <p className="card-text fw-bold text-center">Ingredientes:</p>
        <ul className="list-unstyled text-center flex-grow-1">
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>

        <hr />

        {/* Precio formateado en pesos chilenos */}
        <h4 className="text-center">
          Precio: ${price.toLocaleString('es-CL')}
        </h4>

        {/* Botones de acción: ver detalle y agregar al carrito */}
        <div className="d-flex justify-content-around mt-3 flex-wrap gap-2">
          {/* Link dinámico que navega al detalle de esta pizza usando su id */}
          <Link to={`/pizza/${id}`} className="btn btn-outline-dark">
            Ver más 👀
          </Link>
          <button className="btn btn-dark btn-add" onClick={onAdd}>
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
