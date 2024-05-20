import { useState } from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Create } from './pages/Create'
import { Dashboard } from './pages/Dashboard'
import { About } from './pages/About'
import { Contact } from './pages/Contact'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/create" element={<Create />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
