import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Project from "./Components/Project"
import Reg from './Components/Reg';
import Portfolio from './Components/Portfolio';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project" element={<Project/>}/>
        <Route path="/reg" element={<Reg/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
