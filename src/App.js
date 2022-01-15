import React from "react";
import Routers from "./router/Router";
import DemoContext from "./context/Provider";
import {NavbarContainer, NavbarWrapper} from "../src/componentes/NavBarElements";


function App() {
  return (

    <div class="center">     
      
          <DemoContext>
            <Routers />
          </DemoContext>
        
      
    </div>
  );      
}

export default App;

/*
      <NavbarContainer>
        <NavbarWrapper>
        </NavbarWrapper>                
      </NavbarContainer> 

class Navbar extends Component{
  render(){
    return(
      <div>
        <nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">Logo</a>
          <ul class="right hide-on-med-and-down">
          <DemoContext>
            <Routers />
          </DemoContext>
          </ul>
        </div>
      </nav>
      </div>
    )
  }
}

export default Navbar;*/