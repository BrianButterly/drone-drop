import "./App.css";
import Menu from "./components/Menu";
import Signup from "./components/Signup";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Menu />
        
        <Signup />
      </>
    </BrowserRouter>
  );
}

export default App;
