import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import About from './pages/About'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Portfolio from './pages/Portfolio'

const App = () => {

   const location = useLocation();
  const isPortfolio = location.pathname.startsWith("/portfolio");

  return (
    <div>
      <div className='relative'>
      {isPortfolio && <>
       {/* Background Grid */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]" />
</div>
</>}
      <Navbar />
      <div className=''>
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/landing' element={<LandingPage />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/service' element={<Service />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
      </Routes>
      </div>
    </div>
      <Footer/>
    </div>
  )
}

export default App
