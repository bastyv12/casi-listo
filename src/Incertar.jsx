import React, { useState } from "react";

const Incertar = () => {
  
  const [nombre, setNombre] = useState("")
  const [capital, setCapital] = useState("");
  const [poblacion, setPoblacion] = useState("");
  const [idioma, setIdioma] = useState("");
  const [moneda, setMoneda] = useState("");


  const guardarPais = () => {
    const lista = JSON.parse(localStorage.getItem("paises"))
    const ulId = lista[lista.length-1].id
    const pais = {id:ulId+1, nombre: nombre, capital: capital, datos:{poblacion: poblacion ,idioma: idioma, moneda: moneda}}
    
    const nuevaLista = [...lista, pais]

    localStorage.setItem("paises", JSON.stringify(nuevaLista))
  };

  return (
    <>

      <h1>Incertar País </h1>

      <div className="col">
        <label htmlFor="nombre">Nombre País</label>
        <input type="text" id="nombre" className="form-control" value={nombre} onChange={e => setNombre(e.target.value)} />
      </div>

      <div className="col">
        <label htmlFor="capital">Capital</label>
        <input type="text" id="capital" className="form-control" value={capital} onChange={e => setCapital(e.target.value)} />
      </div>

      <div className="col">
        <label htmlFor="poblacion">Poblacion</label>
        <input type="text" id="poblacion" className="form-control" value={poblacion} onChange={e => setPoblacion(e.target.value)} />
      </div>

      <div className="col">
        <label htmlFor="idioma">Idioma</label>
        <input type="text" id="idioma" className="form-control" value={idioma} onChange={e => setIdioma(e.target.value)} />
      </div>

      <div className="col">
        <label htmlFor="moneda">Moneda</label>
        <input type="text" id="moneda" className="form-control" value={moneda} onChange={e => setMoneda(e.target.value)} />
      </div>




      <div className="col mt-4">
        <button className="btn btn-success" onClick={guardarPais}>
          Guardar
        </button>
      </div>
    </>
  );
};

export default Incertar;
