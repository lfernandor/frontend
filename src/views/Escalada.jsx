import React from 'react'
import imagenes from "../assets/imagenes";

function Escalada() {
    return (
      <div>   
        <br/>
        <br/>     
        <h3 className="center2">-ESCALADA-</h3> 
          <br/>
          <h4 className="center3">
          La escalada es una actividad que consiste en subir o recorrer, realizando depurados movimientos, paredes de roca, laderas escarpadas u otros relieves caracterizados por su verticalidad. Para ello el escalador ayudándose de medios naturales y/o artificiales, aprovecha las oportunidades, a veces mínimas, que ofrece el mundo vertical.
          </h4> 
          <br/>
          <br/>
        <img className="center4" src={imagenes.img5} alt=""/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }

  export default Escalada;