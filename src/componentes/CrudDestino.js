import React from 'react';
import { useState } from 'react';


function App() {

    const [datos, setDatos] = useState({
      NombreActividad: '',
      Tipo: '',
      Fecha: '',
      
    })
  
    function cambioLugarActividad(e) {
      setDatos((valores) => ({
        ...valores,
        LugarActividad: e.target.value,
      }))
    }

    function cambioFecha(e) {
      setDatos((valores) => ({
        ...valores,
        Fecha: e.target.value,
      }))
    }
  
    function cambioNombre(e) {
      setDatos((valores) => ({
        ...valores,
        Nombre: e.target.value,
      }))
    }
  
    function cambioTelefono(e) {
      setDatos((valores) => ({
        ...valores,
        Telefono: e.target.value,
      }))
    }
  
    function cambioNopersonas(e) {
      setDatos((valores) => ({
        ...valores,
        Nopersonas: e.target.value,
      }))
    }
  
    
  
    
  
    function procesar(e) {
      e.preventDefault();
      alert('Dato cargado ' + datos.LugarActividad + ' ' 
        +datos.Fecha + ' '
        +datos.Nombre + ' ' 
        +datos.Telefono + ' '
        +datos.Nopersonas + ' '
        
        );
    }
  
    return (
      <div class="form">
        <h2 > Registrar Destino </h2>
        <form onSubmit={procesar}>
        <h3>
          <p>Ingresa el Lugar:<input type="text" value={datos.LugarActividad} onChange={cambioLugarActividad} /></p>
          <p>Ingresa la Fecha:<input type="date" value={datos.Fecha} onChange={cambioFecha} /></p>
          <p>Ingrese Nombre:<input type="text" value={datos.Nombre} onChange={cambioNombre} /></p>
          <p>Ingresa el Telefono:<input type="text" value={datos.Telefono} onChange={cambioTelefono} /></p>
          <p>Ingresa el No. Personas:<input type="number" value={datos.Nopersonas} onChange={cambioNopersonas} /></p>
          
          </h3>
          <p><input type="submit" /></p>
        </form>
        <hr />
        
        <h2>Datos Ingresados</h2>
        <h3>
        <p>Lugar:{datos.LugarActividad}</p>
        <p>Fecha:{datos.Fecha}</p>
        <p>Nombre:{datos.Nombre}</p>
        <p>Telefono:{datos.Telefono}</p>
        <p>No. personas:{datos.Nopersonas}</p>
        
        </h3>
      </div>
    );
  }
  
  export default App;