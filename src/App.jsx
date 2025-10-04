import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto'>
      <Routes >
        <Route path='/' element={<Home />}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App