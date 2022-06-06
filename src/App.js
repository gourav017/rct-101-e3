import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {Routes,Route} from "react-router-dom";
import Products from "./components/Products/Products"
import Product from "./components/Products/Product/Product";
import Login from "./pages/Login"
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Login/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element ={<Login/>}/>
      </Routes>
     
     

    </div>
  );
}

export default App;
