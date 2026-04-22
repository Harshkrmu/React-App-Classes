import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Bollywood from './components/Bollywood'
import Hollywood from './components/Hollywood'
import Technology from './components/Technology'
import Fitness from './components/Fitness'
import Food from './components/Food'
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>

          <Navbar/>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/bollywood" element={<Bollywood/>} />
            <Route path="/hollywood" element={<Hollywood/>} />
            <Route path="/technology" element={<Technology/>} />
            <Route path="/fitness" element={<Fitness/>} />
            <Route path="/food" element={<Food/>} />
          </Routes>
        
        </BrowserRouter>
      </div>
    </>
  )
}

export default App