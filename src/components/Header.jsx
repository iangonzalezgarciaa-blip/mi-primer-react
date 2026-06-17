const Header = () => {
  return (
    <header
      className="text-white text-center py-5"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("https://as1.ftcdn.net/v2/jpg/02/29/73/28/1000_F_229732806_UnMDwlZUKZs8yYltp4ir9p0JwSWu7wLS.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <h1>¡Pizzería Mamma Mía!</h1>
        <p className="lead">
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </p>
      </div>
    </header>
  )
}

export default Header