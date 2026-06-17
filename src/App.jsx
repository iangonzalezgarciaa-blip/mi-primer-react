import { useState } from 'react' // hook para estado local
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [route, setRoute] = useState('home') // 'home' | 'login' | 'register'

  const renderRoute = () => {
    switch (route) {
      case 'login':
        return <LoginPage />
      case 'register':
        return <RegisterPage />
      case 'home':
      default:
        return <Home />
    }
  }

  return (
    <>
      <Navbar onNavigate={setRoute} />
      {renderRoute()}
      <Footer />
    </>
  )
}

export default App