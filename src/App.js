import "bootstrap/dist/css/bootstrap.min.css";
import Navegador from "./components/navegador";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/menu";
import Empresas from "./components/empresas";
import Empleados from "./components/empleados";

function App() {
  return (
    <>
      <Navegador />
      <Routes>
        <Route exact path="/" element={<Menu />} />
        <Route exact path="/empresas" element={<Empresas />} />
        <Route exact path="/empleados" element={<Empleados />} />
      </Routes>
    </>
  );
}

export default App;
