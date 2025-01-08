import React from "react";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import MultiComments from "./MultiComments";
import Practise from "./Practise";

function App() {
  const [toggle,setToggle]= useState(false)
  const handleToggle = () => {
    setToggle((prevState) => !prevState); // Toggle the value
  };
  return (

    <BrowserRouter>
      <div className="header">
        <div className="d-flex flex-row justify-content-between align-items-center w-100"> 
          <h1>Demo</h1>
          <button className="btn btn-sm btn-primary" onClick={handleToggle}>Toggle</button>
        </div>
      </div>
       {toggle && <div className="toggleBar">
        <button className="btn btn-sm btn-primary" onClick={handleToggle}>Toggle Close</button>
        </div>}
      <div className="body">
        <div className="sidebar d-flex flex-column">
          <Link  className='ps-3 fs-2' to='/home'>Home</Link>
          <Link  className='ps-3 fs-2' to='/comments'>Comments</Link>
          <Link  className='ps-3 fs-2' to='/practise'>Practise</Link>
          
        </div>
        <div className="content">
        
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/comments" element={<MultiComments />} />
            <Route path='/practise' element={<Practise/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
