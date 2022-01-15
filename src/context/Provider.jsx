import React from 'react'
import DemoContext from "./DemoContext";

export default function Provider({ children }) {
  return (
    <DemoContext.Provider value={{ showAlert: () => alert("Demo") }}>
      {children}
    </DemoContext.Provider>
  );
}