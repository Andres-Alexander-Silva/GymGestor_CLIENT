import { Route, Routes } from "react-router-dom";
import HeaderHomePrivate from "../../global/components/HeaderHomePrivate";
import SidebarAdmin from "../../global/components/SidebarAdmin";
import { Welcome } from "../components";
import SidebarEntrenador from "../../global/components/SibebarEntrenador";
import SidebarCliente from "../../global/components/SidebarCliente";
import { Usuarios } from "../Usuarios/page";

const HomePrivate = () => {
  const rol_name = localStorage.getItem("rol_name");
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderHomePrivate />
      <div className="flex flex-grow">
        {rol_name === "ADMINISTRADOR" ? (
          <SidebarAdmin />
        ) : rol_name === "ENTRENADOR" ? (
          <SidebarEntrenador />
        ) : (
          <SidebarCliente />
        )}
        <main className="flex-grow ml-64 p-4">
          <div className="max-w-screen-xl w-full mx-auto flex justify-center">
            <Routes>
              <Route path="/*" element={<Welcome />} />
              <Route path="/usuarios" element={<Usuarios />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePrivate;
