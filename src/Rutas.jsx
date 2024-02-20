import { Routes, Route } from "react-router-dom"

import App from "./App.jsx"
import Login from "./Views/Login/Login.jsx"
import CrearCuenta from "./Views/Cuenta/CrearCuenta.jsx"
import Home from "./Views/Home/Home.jsx"
import CodeVerify from "./Views/Cuenta/CodeEmail.jsx"
import CompleteProfile from "./Views/Cuenta/CompleteProfile.jsx"
import MisCepas from "./Views/MisCepas/MisCepas.jsx"
import AgregarCepa from "./Views/MisCepas/AgregarCepa.jsx"
import EditarCepa from "./Views/MisCepas/EditarCepa.jsx"

function Rutas() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/Login" element={ <Login /> } />
        <Route path="/Account" element={ <CrearCuenta /> } />
        <Route path="/Home" element={ <Home /> } />
        <Route path="/CodeVerify" element={ <CodeVerify /> } />
        <Route path="/CompleteProfile" element={ <CompleteProfile /> } />
        <Route path="/MisCepas" element={ <MisCepas /> } />
        <Route path="/AgregarCepa" element={ <AgregarCepa /> } />
        <Route path="/EditarCepa" element={ <EditarCepa /> } />

      </Routes>
    </div>
  )
}

export default Rutas