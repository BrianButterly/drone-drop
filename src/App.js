import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import AddressAutocomplete from "./components/AddressAutocomplete";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <>
        <Menu />
        <AddressAutocomplete />
      </>
    </BrowserRouter>
  );
}

export default App;
