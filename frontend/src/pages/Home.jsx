import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
  const Nav = useNavigate()
  const handleClick=()=>{
    localStorage.removeItem("isLoagin")
    Nav("/signup")
  }
  return (
    <div>Home
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Home