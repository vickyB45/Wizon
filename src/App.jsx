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
import Blog from './pages/Blog'
import SinglePost from './pages/SinglePost'

import Admin from './pages/Admin'
import AdminLogin from './pages/AdminLogin'

import ProtectedRoute from './components/ProtectedRoute'
import AdminAddBlog from './pages/AdminAddBlog'
import AdminBlogs from './pages/AdminBlogs'
import AdminEditBlog from './pages/AdminEditBlog'
import AdminContacts from './pages/AdminContacts'
import ContactDetails from './pages/ContactDetails'
import NewContact from './pages/NewContact'
import ServerHealth from './pages/ServerHealth'

const App = () => {

  const location = useLocation();

  // Check if it's admin route
  const isAdminRoute = location.pathname.startsWith("/admin");

  // Portfolio background control
  const isPortfolio = location.pathname.startsWith("/portfolio");

  return (
    <div>

      {/* Only show Navbar when NOT admin */}
      {!isAdminRoute && <Navbar />}

      <div className="relative">

        {/* Portfolio Background Grid */}
        {!isAdminRoute && isPortfolio && (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>
        )}

        <div>
          <Routes>

            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<SinglePost />} />

            {/* Admin Login */}
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* Admin Dashboard */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />

            {/* Add Blog */}
            <Route
              path="/admin/add-blog"
              element={
                <ProtectedRoute>
                  <AdminAddBlog />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/all-blog"
              element={
                <ProtectedRoute>
                  <AdminBlogs />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/blog/edit/:id"
              element={
                <ProtectedRoute>
                  <AdminEditBlog />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/contacts"
              element={
                <ProtectedRoute>
                  <AdminContacts />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/contacts/:id"
              element={
                <ProtectedRoute>
                  <ContactDetails />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/new-contact"
              element={
                <ProtectedRoute>
                  <NewContact />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/server-health"
              element={
                <ProtectedRoute>
                  <ServerHealth />
                </ProtectedRoute>
              }
            />

          </Routes>
        </div>
      </div>

      {/* Footer only for non-admin pages */}
      {!isAdminRoute && <Footer />}

    </div>
  )
}

export default App
