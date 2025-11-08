import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";


const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(


  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
      <ToastContainer position="bottom-right" autoClose={5000} />
    </BrowserRouter>,
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      pauseOnHover
      theme="colored"
    />
  </QueryClientProvider>

)
