// Context para centralizar el consumo de la API de pizzas
import { createContext, useContext, useEffect, useState } from 'react'

const PizzaContext = createContext()

export const usePizzas = () => useContext(PizzaContext)

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/pizzas')
        if (!res.ok) throw new Error('Error en la respuesta del servidor')
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

  const getPizzaById = (id) => pizzas.find((p) => p.id === id) || null

  return (
    <PizzaContext.Provider value={{ pizzas, loading, error, getPizzaById }}>
      {children}
    </PizzaContext.Provider>
  )
}

export default PizzaContext
