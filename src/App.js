import "./App.css";
import * as React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import InitialLogin from "./components/login/InitialLogin";
import Logado from "./components/login/logado/Logado"
import Postando from "./components/login/logado/Postando";
import Naologado from "./components/login/naologado/Naologado"
//tem que botar sempre os links na pag html principal tmb, se n nao funciona
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<InitialLogin/>}/>
      <Route path="/logado" element={<Logado/>}/>
      <Route path="/postar" element={<Postando/>}/>
      <Route path="/naologado" element={<Naologado/>}/>
    </Routes>
  );
}

export default App;
