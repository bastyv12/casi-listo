import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Tabla from './Tabla';
import Incertar from './Incertar';
import Contactos from "./contactos";
import AcercaDe from "./AcercaDe";
const Inicio = () => {

    
    const url = "http://45.236.130.191/paises.php";
  
      
      
      useEffect(() => {
  
          fetch(url).then(response => response.json()).then((data) => {
            localStorage.setItem("paises", JSON.stringify(data))
          })
  
  
      }, [])
    
    
  return (
    <> 
        <h1>Inicio</h1>
        

        <Router>
                <div className="nav-item">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><Link to={"/"}>Inicio</Link></li>
                            <li className="nav-item"><Link to={"/table"}>Tabla</Link></li>
                            <li><Link to={"/update"}>Insertar</Link></li>
                            <li><Link to={"/about"}>Acerca de</Link></li>
                            <li><Link to="/contact">contactos</Link></li>
                        </ul>
                    </nav>
                </div>
        
                

                <Routes>
                    <Route path="/table" element={<Tabla />}></Route>
                    <Route path="/about" element={<AcercaDe />}></Route>
                    <Route path="/update" element={<Incertar />}></Route>
                    <Route path="/contact" element={<Contactos />}></Route>                    
                </Routes>
        </Router>
  </>

    
  )
}

export default Inicio