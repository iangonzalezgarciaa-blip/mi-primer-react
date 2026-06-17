// Componente RegisterPage - Formulario de registro de usuario
// Valida email, contraseña y confirmación antes de enviar
import { useState } from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  // Estados para los campos del formulario
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  // Estado para almacenar los errores de validación
  const [errors, setErrors] = useState({})
  // Estado para el mensaje de registro exitoso
  const [success, setSuccess] = useState('')

  // Función que se ejecuta al enviar el formulario de registro
  const handleSubmit = (event) => {
    event.preventDefault()

    const newErrors = {}

    // Validamos que el email no esté vacío
    if (!email) newErrors.email = 'El email es obligatorio'
    // Validamos formato de email con expresión regular
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Ingresa un email válido'
    // Validamos que la contraseña no esté vacía
    if (!password) newErrors.password = 'La contraseña es obligatoria'
    // Validamos que se confirme la contraseña
    if (!confirmPassword) newErrors.confirmPassword = 'Debes confirmar la contraseña'
    // Validamos largo mínimo de la contraseña
    if (password && password.length < 6) newErrors.password = 'La contraseña debe tener al menos 6 caracteres'
    // Validamos que ambas contraseñas coincidan
    if (password && confirmPassword && password !== confirmPassword) newErrors.confirmPassword = 'Las contraseñas no coinciden'

    // Si hay errores, los mostramos y detenemos el envío
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setSuccess('')
      return
    }

    // Si todo está correcto, mostramos éxito y limpiamos los campos
    setErrors({})
    setSuccess('Registro exitoso')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    // Ocultamos el mensaje de éxito después de 3 segundos
    setTimeout(() => setSuccess(''), 3000)
  }

  return (
    <form className="container my-5" onSubmit={handleSubmit}>
      <Link to="/" className="btn btn-outline-dark mb-3">← Volver al inicio</Link>
      <h2 className="mb-4">Registro de usuario</h2>

      {/* Campo de email */}
      <label htmlFor="register-email" className="form-label">
        Email
      </label>
      <input
        id="register-email"
        type="email"
        className="form-control"
        placeholder="Ingresa tu email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        aria-describedby={errors.email ? 'register-email-error' : undefined}
      />
      {errors.email && (
        <div id="register-email-error" className="text-danger mt-1" role="alert">
          {errors.email}
        </div>
      )}

      {/* Campo de contraseña */}
      <label htmlFor="register-password" className="form-label mt-3">
        Contraseña
      </label>
      <input
        id="register-password"
        type="password"
        className="form-control mt-1"
        placeholder="Ingresa tu contraseña"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        aria-describedby={errors.password ? 'register-password-error' : undefined}
      />
      {errors.password && (
        <div id="register-password-error" className="text-danger mt-1" role="alert">
          {errors.password}
        </div>
      )}

      {/* Campo para confirmar la contraseña */}
      <label htmlFor="register-confirmPassword" className="form-label mt-3">
        Confirmar contraseña
      </label>
      <input
        id="register-confirmPassword"
        type="password"
        className="form-control mt-1"
        placeholder="Confirma tu contraseña"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        aria-describedby={errors.confirmPassword ? 'register-confirmPassword-error' : undefined}
      />
      {errors.confirmPassword && (
        <div id="register-confirmPassword-error" className="text-danger mt-1" role="alert">
          {errors.confirmPassword}
        </div>
      )}

      {/* Botón de envío */}
      <button type="submit" className="btn btn-primary mt-3">Registrar</button>

      {/* Mensaje de registro exitoso */}
      {success && <div className="alert alert-success mt-3">{success}</div>}

      {/* Mostramos el email que está escribiendo el usuario en tiempo real */}
      <p className="mt-3">Email escrito: {email}</p>
    </form>
  )
}

export default RegisterPage
