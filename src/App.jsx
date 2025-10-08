import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import About from './pages/About'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Service from './pages/Service'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className=''>
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/landing' element={<LandingPage />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/service' element={<Service />}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App