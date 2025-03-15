import React from 'react'
import './App.css'
import Login from './pages/login/Login'
import { Route, Router, Routes } from 'react-router'
import ThankYou from './pages/ThankYou/ThankYou'

function App() {

  return (
    <>
 <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>    </>
  )
}

export default App
