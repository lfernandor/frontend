import React from 'react';
//import CrudDestino from '../componentes/CrudDestino'
import Destinos from './Destinos';

function Excursiones() {
    return (
      <div>   
        <br/>     
        <h1 class="center">Excursiones</h1> 
        <Destinos/> 
      </div>
    );
  }

  export default Excursiones;




  //import { BrowserRouter, Switch, Route } from "react-router-dom";
//import Destinos from "./Destinos";

//import Content from './component/Content';
//import Footer from './component/Footer';
//import Grados from './component/Grados';
//import Header from './component/Header';
//import Materias from './component/Materias';
//import Menu from './component/Menu';
//import './styles/App.css';
/*
function App() {
  return (
      <BrowserRouter>
        <Switch>
          
          <Route path="/alumnos" exact component={Destinos} />
          
          
          <Route path="*" component={() => <h1>404 Not FOUND</h1>} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;

*/