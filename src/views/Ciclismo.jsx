import React from 'react'
import imagenes from "../assets/imagenes";

function Ciclismo() {
    return (
      <div>
        <br/>
          <br/>       
        <h3 class="center2">-CICLISMO-</h3> 
          <br/>
          <h4 class="center3">
          El término ciclismo de montaña o MTB engloba un grupo de disciplinas que, como su nombre lo dice, se llevan a cabo en la montaña. Ya sea en caminos de tierra, senderos angostos, el ciclismo de montaña se ha diversificado tanto, cada disciplina con una bicicleta especializada.

          El ciclismo de montaña se podría resumir como ciclismo off-road o todo terreno.
          </h4> 
          <br/>
          <br/>
        <img class="center4" src={imagenes.img4}/>
        <br/>
          <br/>
          <br/>
        <br/>
      </div>
    );
  }

  export default Ciclismo;