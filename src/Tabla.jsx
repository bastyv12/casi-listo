import React, { useEffect, useState } from "react";

const Tabla = () => {

  const [ buscar, setBuscar] = useState("")

  const [paises, setListaCiudades] = useState([]);

  const ciudad = JSON.parse(localStorage.getItem("ciudad"));




  const eliminar = (e) => {
    const paiseliminado = paises.filter(p => p.id != e.target.value)
    setListaCiudades(paiseliminado);
    localStorage.setItem("ciudad", JSON.stringify(paiseliminado))
  };



  const buscador = (e) => {

    setBuscar(e.target.value)

  }

  let resultado = []

  if (!buscar) {

    resultado = paises

  } else {

    resultado = paises.filter((dato) => 
      dato.nombre.toLowerCase().includes(buscar.toLocaleLowerCase())
    )

  }

  useEffect(() => {

    const ciudadesLS = localStorage.getItem("paises")

    setListaCiudades(JSON.parse(ciudadesLS))


  
  },[])

  


 

  return (
    

    

    <div className="container">

      <h2>Buscar por nombre País</h2>

      <input type="text" className="form-control" value={buscar} onChange={buscador}/>

      <h2>Información</h2>

      <table className="table table-srtiped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Capital</th>
            <th>Poblacion</th>
            <th>Idioma</th>
            <th>Moneda</th>
          </tr>
        </thead>
        
        <tbody>
          {resultado.map((u) => (
            
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nombre}</td>
              <td>{u.capital}</td>
              <td>{u.datos.poblacion}</td>
              <td>{u.datos.idioma}</td>
              <td>{u.datos.moneda}</td>
              <td><button className="btn btn-danger" onClick={eliminar} value={u.id}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
                </button>
                </td>
            </tr>
            


          ))}
        </tbody>
      </table>

    </div>
  );
};

export default Tabla;
