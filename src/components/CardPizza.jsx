const CardPizza = ({ name, price, ingredients, img, desc, onAdd, onViewMore }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-capitalize">Pizza {name}</h5>
        <p className="card-text text-muted small">{desc}</p>
        <hr />

        <p className="card-text fw-bold text-center">Ingredientes:</p>

        <ul className="list-unstyled text-center flex-grow-1">
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>

        <hr />

        <h4 className="text-center">
          Precio: ${price.toLocaleString('es-CL')}
        </h4>

        <div className="d-flex justify-content-around mt-3 flex-wrap gap-2">
          <button className="btn btn-outline-dark" onClick={onViewMore}>
            Ver más 👀
          </button>
          <button className="btn btn-dark btn-add" onClick={onAdd}>
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
