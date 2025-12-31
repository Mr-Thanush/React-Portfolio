import { useState,useEffect } from 'react'
import './App.css'
import Home from './pages/Home/home'
import NavBar from './components/NavBar/navbar'
import Skills from './pages/skills/skills'
import Project from './pages/Projects/project'
import Certification from './pages/Certification/certification'
import Contact from './pages/Contact/contact'
import { Routes,Route } from 'react-router-dom'
function App() { 
  const[darkMode,setDarkMode]=useState(false);

  useEffect(()=>{
    document.body.style.backgroundColor=darkMode ? "rgb(32, 42, 46)" : "#ffffff";
    document.body.className=darkMode? "dark" : "light";
},[darkMode]);

  return (
    <>
    <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
    <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/skills' element={<Skills />}/>
      <Route  path='/projects' element={<Project />}/>
      <Route  path='/certification' element={<Certification />}/>
      <Route  path='/contacts' element={<Contact />}/>
    </Routes>

     
    </>
  )
}

export default App
