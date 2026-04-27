import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Technology from './components/Technology'
import Home from './components/Home'
import Hollywood from './components/Hollywood'
import Food from './components/Food'
import Fitness from './components/Fitness'
import Bollywood from './components/Bollywood'
import Details from './components/Details'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bollywood' element={<Bollywood />} />
          <Route path='/hollywood' element={<Hollywood />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/fitness' element={<Fitness />} />
          <Route path='/food' element={<Food />} />
          <Route path='/details/:id' element={<Details />} /> 
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App