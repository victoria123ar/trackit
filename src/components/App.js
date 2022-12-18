import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Habitos from '../pages/Habitos';
import Hoje from '../pages/Hoje';
import Historico from '../pages/Historico';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [urlFoto, setUrlFoto] = useState("")
  const [usuario, setUsuario] = useState("")

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setUrlFoto={setUrlFoto} setUsuario={setUsuario}/>} />
        <Route path="/Cadastro" element={<Cadastro setUrlFoto={setUrlFoto} setUsuario={setUsuario}/>} />
        <Route path="/Habitos" element={<Habitos urlFoto={urlFoto} usuario={usuario}/>}/>
        <Route path="/Hoje" element={<Hoje urlFoto={urlFoto} usuario={usuario}/>} />
        <Route path="/Historico" element={<Historico urlFoto={urlFoto} usuario={usuario}/>} />
      </Routes>
    </BrowserRouter>
  );
}
