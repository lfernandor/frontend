import * as React from 'react';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Home from "../views/Home";
import Excursiones from "../views/Excursiones";
import Cursos from "../views/Cursos";
import Lugares from "../views/Lugares";
import Galeria from "../views/Galeria";
import imagenes from "../assets/imagenes";
import Navbar1 from "../componentes/Navbar";

function Routers() {
    
    return (
      
      <Router >                
        <div>             
                            
              <Link to="/">
                <Button variant="contained" color="primary" >
                Home
                </Button>
              </Link>
            
              <Link to="/excursiones">
                <Button variant="contained" color="primary" >
                Excursiones
                </Button>
              </Link>
           
              <Link to="/cursos">
                <Button variant="contained" color="primary">
                Cursos
                </Button>
              </Link>
            
              <Link to="/lugares">
                <Button variant="contained" color="primary">
                Lugares
                </Button>
              </Link>
            
              <Link to="/galeria">
                <Button variant="contained" color="primary">
                Galeria
                </Button>
              </Link>                         
           
          <Switch>
          <Route path="/galeria">
              <Galeria/>
            </Route>
            <Route path="/lugares">
              <Lugares />
            </Route>
            <Route path="/excursiones">
              <Excursiones/>
            </Route>
            <Route path="/cursos">
              <Cursos />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>          
        </div>
        
        
        
      </Router>
      
    );
  }
 
  export default Routers;