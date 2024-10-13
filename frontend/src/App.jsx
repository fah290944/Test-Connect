import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';



function App() {

  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
  
      </Routes>
 
   </Router>
  )
}

export default App
