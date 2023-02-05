
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './komponente/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter className="App">
      <NavBar ></NavBar>
      <Routes>
 
      </Routes>
      
  </BrowserRouter>
  );
}

export default App;
