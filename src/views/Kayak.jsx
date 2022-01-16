import React from 'react'
import imagenes from "../assets/imagenes";

function Kayak() {
    return (
      <div>  
        <br/>
          <br/>      
        <h3 className="center2">-KAYAK-</h3> 
          <br/>
          <h4 className="center3">
          El kayakismo es un deporte acuático, en el que se va sentado mirando hacia la parte delantera (proa), en el sentido de la marcha. Se palea en un kayak, y consigue el desplazamiento en el agua (propulso) con la ayuda de la pala.

          El kayak es una embarcación relativamente ligera de plástico, fibra de vidrio, kevlar, etc. La pala de un kayak es de doble hoja, y no está fijada en el kayak como suele ser en el deporte de remo.
          </h4> 
          <br/>
          <br/>
        <img className="center4" src={imagenes.img6} alt=""/>
        <br/>
          <br/>
          <br/>
        <br/>
      </div>
    );
  }

  export default Kayak;