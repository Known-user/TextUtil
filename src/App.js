import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#010031";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    < >
      <Router>
    <Navbar title="Textify" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
        <Routes>
            <Route path="/About" element={<About mode={mode} />} />
            <Route path="/" element={<Textform heading="Enter text below"  mode={mode} />} />
        </Routes>
    </div>
      </Router>
    </>
  );
}

export default App;
