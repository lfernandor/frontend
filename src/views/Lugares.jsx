import React, { Component } from 'react';
import BuscarLugar from '../componentes/BuscarLugar'; 
import Resultado from '../componentes/Resultado'; 


class Lugares extends Component {

  
  state = {
    termino : '',
    imagenes : []
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=24984773-abca2174cc871f7be4c6d6707&q=${termino}`;
    

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes : resultado.hits }) )
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino
    }, () => {
      this.consultarApi();
    }) 
  }


  render(){
    return (     
      
      <div className="app container">      
        <div class="center"> 
        <br/>       
          <h1 class="center">Lugares</h1>    

          <p className="lead text-center">Buscar</p>

          <BuscarLugar
            datosBusqueda={this.datosBusqueda}
          />      

        </div>
        <Resultado imagenes = {this.state.imagenes}
        />        
      </div>
    );    
  }
}
/*
function Lugares() {
  return <h2>Lugares</h2>;
  }
*/
export default Lugares;