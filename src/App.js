import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Contact from './components/Contact';
import Career from './components/Career';
import Home from './components/Home';
import Protectedroute from './components/Protectedroute';
import Dash from './components/Dash';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register />} />

        <Route exact path="/"  element={<Dashboard/>}>
                <Route exact path="/home" element={<Protectedroute Component={Home} />}/>
                <Route exact path="/" element={<Protectedroute Component={Dash} />}/>
                <Route exact path="about" element={<Protectedroute Component={About} />}/>
                <Route exact path="contact" element={<Protectedroute Component={Contact} />}/>
                <Route exact path="career" element={<Protectedroute Component={Career} />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
