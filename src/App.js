import React from "react";
import "./App.css";
import Menu from "./components/Menu";
// import Signup from "./components/Signup";
import List from "./components/List";
import Address from "./components/Address";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Menu />
        {/* <Signup /> */}
        <Address />
        <List />
      </>
    </BrowserRouter>
  );
}

export default App;
