import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto'>
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App