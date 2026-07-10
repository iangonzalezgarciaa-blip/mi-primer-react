import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

const Profile = () => {
  const { email, logout, getProfile } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    getProfile().catch(() => {})
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <main className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
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

            <div className="mb-4">
              <label className="form-label fw-bold">Email registrado:</label>
              <div className="alert alert-light" role="alert">
                <p className="mb-0 fs-5">{email}</p>
              </div>
            </div>

            <div className="d-grid gap-2">
              <button className="btn btn-danger btn-lg" onClick={handleLogout}>Cerrar sesión</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Profile
