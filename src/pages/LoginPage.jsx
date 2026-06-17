// Componente LoginPage - Formulario de inicio de sesión
// Valida email y contraseña antes de enviar, mostrando errores si hay campos inválidos
import { useState } from 'react'

const LoginPage = () => {
  // Estados para los campos del formulario
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // Estado para almacenar los mensajes de error de validación
  const [errors, setErrors] = useState({})
  // Estado para mostrar el mensaje de éxito después de iniciar sesión
  const [success, setSuccess] = useState('')

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (event) => {
    event.preventDefault()

    const newErrors = {}

    // Validamos que el email no esté vacío
    if (!email) {
      newErrors.email = 'El email es obligatorio'
    }

    // Validamos el formato del email con una expresión regular
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Ingresa un email válido'
    }

    // Validamos que la contraseña no esté vacía
    if (!password) {
      newErrors.password = 'La contraseña es obligatoria'
    }

    // Validamos que la contraseña tenga al menos 6 caracteres
    if (password && password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres'
    }

    // Si hay errores, los mostramos y no enviamos el formulario
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setSuccess('')
      return
    }

    // Si todo está correcto, mostramos éxito y limpiamos los campos
    setErrors({})
    setSuccess('Inicio de sesión exitoso')
    setEmail('')
    setPassword('')

    // Ocultamos el mensaje de éxito después de 3 segundos
    setTimeout(() => setSuccess(''), 3000)
  }

  return (
    <form className="container my-5" onSubmit={handleSubmit}>
      <h2 className="mb-4">Iniciar sesión</h2>

      {/* Campo de email */}
      <label htmlFor="login-email" className="form-label">
        Email
      </label>
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
        <div id="login-email-error" className="text-danger mt-1" role="alert">
          {errors.email}
        </div>
      )}

      {/* Campo de contraseña */}
      <label htmlFor="login-password" className="form-label mt-3">
        Contraseña
      </label>
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
        <div id="login-password-error" className="text-danger mt-1" role="alert">
          {errors.password}
        </div>
      )}

      {/* Botón de envío */}
      <button type="submit" className="btn btn-primary mt-3">
        Ingresar
      </button>

      {/* Mensaje de éxito */}
      {success && (
        <div className="alert alert-success mt-3">
          {success}
        </div>
      )}
    </form>
  )
}

export default LoginPage
