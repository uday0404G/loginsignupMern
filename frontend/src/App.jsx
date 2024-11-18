import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainRouter from './Routers/mainRouter'
import { ToastContainer } from 'react-toastify'

function App() {


  return (
    <>
     <MainRouter/>
     <ToastContainer />
    </>
  )
}

export default App
