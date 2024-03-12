import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Home from './components/Home.jsx'
import Portfolio from './components/Portfolio.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route  path = "/" element={<App />}>
    <Route>
      <Route path='/' element ={<App/>}/>
      <Route path='/About' element = {<About/>} />
      <Route path = "/Portfolio" element={<Portfolio />} />
      <Route path='/Services' element= {<Services/>} />
      <Route path='/Home' element = {<Home/>} />
      <Route path='/Header' element ={<Header/>} />
      <Route path='/Footer' element={ <Footer/>} />
      <Route path='/Contact' element={<Contact/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
