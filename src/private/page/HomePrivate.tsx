import { Route, Routes } from "react-router-dom";
import HeaderHomePrivate from "../../global/components/HeaderHomePrivate";
import SidebarAdmin from "../../global/components/SidebarAdmin";
import { Welcome } from "../components";
import SidebarEntrenador from "../../global/components/SibebarEntrenador";
import SidebarCliente from "../../global/components/SidebarCliente";
import { Usuarios } from "../Usuarios/page";
import { UsuariosProvider } from "../Usuarios/context/UsuariosContext";
import { Membresias } from "../Membresias/page";
import MembresiasProvider from "../Membresias/context/MembresiasContext";
import { Rutinas } from "../Rutinas/page";
import { RutinasProvider } from "../Rutinas/context/RutinasContext";
import { Ejercicios } from "../Ejercicios/page";
import { EjerciciosProvider } from "../Ejercicios/context/EjerciciosContext";
import { ClientesAsignados } from "../ClientesAsignados/page";
import ClientesAsignadosProvider from "../ClientesAsignados/context/ClientesAsignados";
import { ClientesProvider } from "../Clientes/context/ClientesContext";
import { Perfil, RutinaEjercicio } from "../Clientes/page";

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
              <Route
                path="/usuarios"
                element={
                  <UsuariosProvider>
                    <Usuarios />
                  </UsuariosProvider>
                }
              />
              <Route
                path="/membresias"
                element={
                  <MembresiasProvider>
                    <Membresias />
                  </MembresiasProvider>
                }
              />
              <Route
                path="/entrenador_rutinas"
                element={
                  <RutinasProvider>
                    <Rutinas />
                  </RutinasProvider>
                }
              />
              <Route
                path="/entrenador_ejercicios"
                element={
                  <EjerciciosProvider>
                    <Ejercicios />
                  </EjerciciosProvider>
                }
              />
              <Route
                path="/entrenador_clientes"
                element={
                  <ClientesAsignadosProvider>
                    <RutinasProvider>
                      <EjerciciosProvider>
                        <ClientesAsignados />
                      </EjerciciosProvider>
                    </RutinasProvider>
                  </ClientesAsignadosProvider>
                }
              />
              <Route
                path="cliente_rutinas"
                element={
                  <ClientesProvider>
                    <RutinaEjercicio />
                  </ClientesProvider>
                }
              />
              <Route
                path="/perfil"
                element={
                  <ClientesProvider>
                    <Perfil />
                  </ClientesProvider>
                }
              />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePrivate;
