import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { AuthProvider } from './AuthContext'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* future routes can be added here */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
