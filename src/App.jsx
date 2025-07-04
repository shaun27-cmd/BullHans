import { useState } from 'react'
import './App.css'
import React from 'react'
import NavHero from './components/NavHero'
import Customers from './components/Customers'
import About from './components/About'
import Services from './components/Services'
import Contactus from './components/Contactus'
import Footer from './components/Footer'
function App() {
  return (
     <div className='@container bg-gray-950 font-display antialiased  '>
   <NavHero/>
   <Customers/>
   <About/>
   <Services/>
   <Contactus/>
   <Footer/>
  </div>
  )
}

export default App