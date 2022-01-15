import React from 'react';
import imagenes from "../assets/imagenes";
import Navbar from "../componentes/MenuActividades";
import {NavbarContainer, NavbarWrapper} from "../componentes/NavBarElements";


function Home() {
    return(
    <div>
          <br/>
                   
          <h1 class="center">Home</h1>   
          <br/>                 
          <img class="center" src={imagenes.img10}/>
          <br/>
          <hr />
            <h1 class="center" >Actividades</h1>
            <br/>
            <NavbarContainer>
              <NavbarWrapper>
              <Navbar />
              </NavbarWrapper>                
            </NavbarContainer>                                 
              
          <br/>
          <br/>
        
    </div>                               
                
  )      
  };


export default Home;



  /*  
  <Router>
        <Navbar />
          <Switch>
          
            <Route exact path="/src/views/Campismo.jsx" component={Campismo}></Route>
            <Route exact path="/src/views/Senderismo.jsx" component={Senderismo}></Route>
            <Route exact path="/src/views/Escalada.jsx" component={Escalada}></Route>
            <Route exact path="/src/views/Rappel.jsx" component={Rappel}></Route>
            <Route exact path="/src/views/Tirolesa.jsx" component={Tirolesa}></Route>
            <Route exact path="/src/views/Ciclismo.jsx" component={Ciclismo}></Route>
            <Route exact path="/src/views/Canonismo.jsx" component={Canonismo}></Route>
            <Route exact path="/src/views/Kayak.jsx" component={Kayak}></Route>
          
          </Switch>
        
        </Router>
  
<Breadcrumbs aria-label="breadcrumb">
            
            <Link underline="hover" href="#">
              SENDERISMO
            </Link>
            
            <Link underline="hover" href="#">
              CICLISMO
            </Link>
            
            <Link underline="hover"  href="#">
              ESCALADA
            </Link>
            
            <Link to="/src/views/Campismo.jsx" underline="hover"  href="#">
              CAMPISMO
            </Link>
            
            <Link underline="hover"  href="#">
              RAPPEL
            </Link>
            
            <Link underline="hover"  href="#">
              TIROLESA
            </Link>
            
            <Link underline="hover"  href="#">
              CAÑONISMO
            </Link>
            
            <Link underline="hover" href="#">
              KAYAK
            </Link> 

          </Breadcrumbs>*/