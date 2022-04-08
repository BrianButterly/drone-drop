import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Address from "./components/Address";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Menu />
        <Address />
      </>
    </BrowserRouter>
  );
}

export default App;
