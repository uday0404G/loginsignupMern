import React from 'react'
import { Navigate } from 'react-router'

const PrivateRoute = ({children}) => {
  const isLogin=localStorage.getItem("isLoagin")
    return (
   isLogin?children:<Navigate to="/signup"/>
  )
}

export default PrivateRoute