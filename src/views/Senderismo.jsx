import React from 'react'
import imagenes from "../assets/imagenes";

function Senderismo() {
    return (
      <div> 
        <br/>
        <br/>
             
        <h3 class="center2">-SENDERISMO-</h3> 
        <br/>
        
        <h4 class="center3">Senderismo es sinónimo de excursionismo a pie, Es decir, caminatas que se realizan principalmente por senderos y caminos. 
        El grado de dificultad no suele ser alto.  
        Es una mezcla de actividad deportiva y turística, que se desarrolla principalmente en entornos naturales.

        El senderismo es un deporte en la naturaleza que por su sencillez, ausencia de riesgo y bajo coste económico es una actividad muy adecuada para amplios segmentos de la población. 

        Tradicionalmente esta actividad era realizada por los Centros Excursionistas, pero hoy en día, gracias a los senderos señalizados, es posible realizar todo tipo de caminatas de cualquier nivel, y en cualquier destino, tanto por cuenta propia como organizado por empresas de guías o interpretativos del medio natural.
        </h4>     
                
          <br/>
          <br/>
        <img class="center4" src={imagenes.img8}/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }

  export default Senderismo;