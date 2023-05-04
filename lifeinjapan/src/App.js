import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import axios from 'axios'
import './styles/main.css'
import Navbar from './components/Navbar'
import Directory from './components/Directory'
import Home from './pages/home'
import Contact from './pages/contact'
import Forum from './pages/forum'
import UserProfile from './pages/userProfile'

const App = () => {

  return (
    <>
    <div className = "container">
    <Router>
      <Navbar/>
      <Directory/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pages/forum" element={<Forum/>}/>
        <Route path="/pages/contact" element={<Contact/>}/>
        <Route path="/pages/admin" />
        <Route path="/pages/userProfile" element={<UserProfile/>}/>
      </Routes>
    </Router>
   </div>
   </>
  )
}

export default App
