import React from "react";
import Routers from "./router/Router";
import DemoContext from "./context/Provider";



function App() {
  return (

    <div className="center">     
      
          <DemoContext>
            <Routers />
          </DemoContext>
        
      
    </div>
  );      
}

export default App;

