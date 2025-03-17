import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import Header from './components/header'
import Sidebar from './components/sidebar'

function App() {

  const [auth, setAuth] = useState(true)

  return (
    <>
      {
        auth ?
          <div>

            <Header />

            <div className='flex bg-background h-screen w-full gap-10'>
              <Sidebar />

              <Routes>
                <Route path='/' element={<Dashboard />} />
              </Routes>

            </div>

          </div> : <Login />
      }
    </>
  )
}

export default App