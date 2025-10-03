import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto'>
      <Routes >
        <Route path='/' element={<Home />}/>
      </Routes>
      </div>
    </div>
  )
}

export default App