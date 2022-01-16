import React from "react"; 
import { NavLink,BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Campismo from '../views/Campismo';
import Senderismo from "../views/Senderismo";
import Escalada from '../views/Escalada';
import Rappel from '../views/Rappel';
import Tirolesa from "../views/Tirolesa";
import Ciclismo from "../views/Ciclismo";
import Canonismo from "../views/Canonismo";
import Kayak from "../views/Kayak";

const MenuActividades = () => {
    return(
         
            <Router>
                <Navbar/>
                <Switch>
                        <Route path="/src/views/Senderismo.jsx" component={Senderismo} />
                        <Route path="/src/views/Escalada.jsx" component={Escalada} />
                        <Route path="/src/views/Rappel.jsx" component={Rappel} />
                        <Route path="/src/views/Campismo.jsx" component={Campismo} />
                        <Route path="/src/views/Tirolesa.jsx" component={Tirolesa} />
                        <Route path="/src/views/Ciclismo.jsx" component={Ciclismo} />
                        <Route path="/src/views/Canonismo.jsx" component={Canonismo} />
                        <Route path="/src/views/Kayak.jsx" component={Kayak} />                
                    </Switch>
                
            </Router>      
        
    );
};

function Navbar() {
    return (
      <nav className="center">
        <NavLink activeClassName="active" to="/src/views/Senderismo.jsx">
            SENDERISMO
        </NavLink>
        <NavLink activeClassName="active" to="/src/views/Escalada.jsx">
            ESCALADA
        </NavLink>
        <NavLink activeClassName="active" to="/src/views/Rappel.jsx">
           RAPPEL
        </NavLink>
        <NavLink activeClassName="active" to="/src/views/Campismo.jsx">
            CAMPISMO
        </NavLink>
        <NavLink activeClassName="active" to="/src/views/Tirolesa.jsx">
            TIROLESA
        </NavLink>
        <NavLink activeClassName="active" to="/src/views/Ciclismo.jsx">
            CICLISMO
        </NavLink>
        <NavLink activeClassName="active" to="/src/views/Canonismo.jsx">
            CAÑONISMO
        </NavLink>
        <NavLink activeClassName="active" to="/src/views/Kayak.jsx">
            KAYAK
        </NavLink>
      </nav>
    );
  }

export default MenuActividades;

