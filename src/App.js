import "./App.css";
import * as React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home"
import IndexLogin from "./components/login/IndexLogin"

//tem que botar sempre os links na pag html principal tmb, se n nao funciona
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<IndexLogin/>}/>
    </Routes>
  );
}

export default App;
