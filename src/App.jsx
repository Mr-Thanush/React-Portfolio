import { useState,useEffect } from 'react'
import './App.css'
import Home from './pages/Home/home'
import NavBar from './components/NavBar/navbar'
function App() { 
  const[darkMode,setDarkMode]=useState(false);

  useEffect(()=>{
    document.body.style.backgroundColor=darkMode ? "rgb(32, 42, 46)" : "#ffffff";
    document.body.className=darkMode? "dark" : "light";
},[darkMode]);

  return (
    <>
    <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
    {/* <Home /> */}
   

    </>
  )
}

export default App
