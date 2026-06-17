// Componente Profile - Muestra el perfil del usuario con su email y opción de cerrar sesión
// Por ahora el email y el botón de logout son estáticos, en próximos hitos se implementará la autenticación real
import { Link } from 'react-router-dom'

const Profile = () => {
  // Email estático de ejemplo (se reemplazará con datos reales en futuros hitos)
  const userEmail = 'usuario@example.com'

  // Función para cerrar sesión (por ahora solo muestra una alerta)
  const handleLogout = () => {
    alert('Sesión cerrada correctamente')
    // En hitos futuros se implementará la lógica real de autenticación
  }

  return (
    <main className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            {/* Ícono de usuario */}
            <div className="text-center mb-4">
              <div
                className="rounded-circle bg-warning d-inline-flex align-items-center justify-content-center"
                style={{ width: '80px', height: '80px' }}
              >
                <span className="fs-1">👤</span>
              </div>
            </div>

            <Link to="/" className="btn btn-outline-dark mb-3">← Volver al inicio</Link>

          <h2 className="text-center mb-4">Perfil del Usuario</h2>

            {/* Mostramos el email del usuario */}
            <div className="mb-4">
              <label className="form-label fw-bold">Email registrado:</label>
              <div className="alert alert-light" role="alert">
                <p className="mb-0 fs-5">{userEmail}</p>
              </div>
            </div>

            {/* Botón para cerrar sesión */}
            <div className="d-grid gap-2">
              <button className="btn btn-danger btn-lg" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </div>

            {/* Nota informativa sobre futuras implementaciones */}
            <div className="alert alert-info mt-4" role="alert">
              <small>
                <strong>Nota:</strong> La autenticación completa se implementará en próximos hitos.
              </small>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Profile
