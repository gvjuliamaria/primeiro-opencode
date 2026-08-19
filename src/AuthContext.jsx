import React, { createContext, useState } from 'react'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  function login({ email, password, name }) {
    // simulated auth - accept any non-empty email/password for demo
    if (!email || !password) return false
    setUser({ email, name: name || email.split('@')[0] })
    return true
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
