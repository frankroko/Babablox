import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Product from './components/Product';
import './App.css'
import Banner from '../src/assets/Banner.svg'

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/login"  />
        <Route path="/register"  />
      </Routes>
    </Router>

    <header>
       <h1>Babablox</h1>
       <p>ร้านขายรหัส Roblox ราคาถูก ปลอดภัย ส่งเร็ว 100%</p>
    </header>
    <img
        src={Banner}
        alt="Babablox Banner"
        height=""
        width="" />
    <Product />

    <footer>
      <p>© 2025 Babablox | ร้านขายรหัส Roblox</p>
    </footer>
    </>
  )
}

export default App
