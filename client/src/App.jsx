import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
     <Home/> 
     <Outlet/>
     <Footer />
    </>
  )
}

export default App
