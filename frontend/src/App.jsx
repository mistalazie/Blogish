import { useState } from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Create } from './pages/Create'
import { Dashboard } from './pages/Dashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/create" element={<Create />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
