import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

const LoginPage = () => {
  const { login } = useUser()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [serverError, setServerError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newErrors = {}

    if (!email) newErrors.email = 'El email es obligatorio'
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Ingresa un email válido'
    if (!password) newErrors.password = 'La contraseña es obligatoria'
    if (password && password.length < 6) newErrors.password = 'La contraseña debe tener al menos 6 caracteres'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setServerError('')
    try {
      await login({ email, password })
      navigate('/')
    } catch (err) {
      setServerError(err.message)
    }
  }

  return (
    <form className="container my-5" onSubmit={handleSubmit}>
      <Link to="/" className="btn btn-outline-dark mb-3">← Volver al inicio</Link>
      <h2 className="mb-4">Iniciar sesión</h2>

      <label htmlFor="login-email" className="form-label">Email</label>
      <input
        id="login-email"
        type="email"
        className="form-control"
        placeholder="Ingresa tu email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        aria-describedby={errors.email ? 'login-email-error' : undefined}
      />
      {errors.email && (
        <div id="login-email-error" className="text-danger mt-1" role="alert">{errors.email}</div>
      )}

      <label htmlFor="login-password" className="form-label mt-3">Contraseña</label>
      <input
        id="login-password"
        type="password"
        className="form-control mt-1"
        placeholder="Ingresa tu contraseña"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        aria-describedby={errors.password ? 'login-password-error' : undefined}
      />
      {errors.password && (
        <div id="login-password-error" className="text-danger mt-1" role="alert">{errors.password}</div>
      )}

      <button type="submit" className="btn btn-primary mt-3">Ingresar</button>

      {serverError && <div className="alert alert-danger mt-3" role="alert">{serverError}</div>}
    </form>
  )
}

export default LoginPage
