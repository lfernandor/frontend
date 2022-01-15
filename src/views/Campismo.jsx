import React from 'react'
import imagenes from "../assets/imagenes";

function Campismo() {
    return (
      <div>  
        <br/>
          <br/>      
        <h3 class="center2">-CAMPISMO-</h3> 
          <br/>
          <h4 class="center3">
          Es el arte de acampar, es decir, permanecer en el medio natural durante al menos una noche, independientemente de los medios con que se realice.

          Un buen campista es quien a la vez de sentir deleite por estar en contacto con la naturaleza, sabe cómo acampar.

          Según los medios con los que contamos, podemos distinguir tres tipos de acampada:

          ORDINARIA: se lleva material previamente preparado y transporte al lugar de la actividad.

          DE FORTUNA: se emplea sólo lo que la naturaleza nos brinda, la tienda se sustituye por una construcción con ramas y hojas.

          VIVAC: sólo se usa el material individual y lo que la naturaleza nos ofrece, pero sin modificarlo.
          </h4> 
          <br/>
          <br/>
        <img class="center4" src={imagenes.img1}/>
        <br/>
          <br/>
          <br/>
        <br/>
      </div>
    );
  }

  export default Campismo;