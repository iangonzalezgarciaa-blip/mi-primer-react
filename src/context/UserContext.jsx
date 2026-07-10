import { createContext, useContext, useState } from 'react'

const API_URL = 'http://localhost:5000/api/auth'

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [email, setEmail] = useState(localStorage.getItem('email'))

  const authenticate = async (endpoint, credentials) => {
    const res = await fetch(`${API_URL}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.error || 'Error de autenticación')

    setToken(data.token)
    setEmail(data.email)
    localStorage.setItem('token', data.token)
    localStorage.setItem('email', data.email)
    return data
  }

  const login = (credentials) => authenticate('login', credentials)
  const register = (credentials) => authenticate('register', credentials)

  const logout = () => {
    setToken(null)
    setEmail(null)
    localStorage.removeItem('token')
    localStorage.removeItem('email')
  }

  const getProfile = async () => {
    const res = await fetch(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.error || 'No se pudo obtener el perfil')
    setEmail(data.email)
    return data
  }

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
