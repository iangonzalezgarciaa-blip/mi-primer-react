import { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const newErrors = {}

    if (!email) newErrors.email = 'El email es obligatorio'
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Ingresa un email válido'
    if (!password) newErrors.password = 'La contraseña es obligatoria'
    if (password && password.length < 6) newErrors.password = 'La contraseña debe tener al menos 6 caracteres'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setSuccess('')
      return
    }

    setErrors({})
    setSuccess('Inicio de sesión exitoso')
    setEmail('')
    setPassword('')
    setTimeout(() => setSuccess(''), 3000)
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

      {success && <div className="alert alert-success mt-3">{success}</div>}
    </form>
  )
}

export default LoginPage
