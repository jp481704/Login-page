import React from 'react'
import { useAuth } from '../../Context/AuthContext'
import { Navigate } from 'react-router'

const PrivateRoute = ({children}) => {
const {isAuthenticated} = useAuth()

  return (
    <div>{isAuthenticated ? children : <Navigate to="/" />}</div>
  )
}

export default PrivateRoute;