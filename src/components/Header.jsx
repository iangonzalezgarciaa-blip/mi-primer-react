// Componente Header - Banner principal de la pizzería
// Se muestra en la página de inicio con el título y descripción del negocio
const Header = () => {
  return (
    <header className="site-header text-white text-center py-5">
      <div className="container">
        {/* Tarjeta del banner con animación de entrada */}
        <div className="banner-card mx-auto px-4 py-5">
          <h1>¡Pizzería Mamma Mía!</h1>
          <p className="lead subtitle">
            Descubre el aroma rústico y el sabor casero que te hace sentir en una cabaña sureña.
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
