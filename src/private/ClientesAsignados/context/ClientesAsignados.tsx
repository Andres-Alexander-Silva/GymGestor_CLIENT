import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as ClientesAsignadosServices from "../services/clientes.services";
import {
  Response,
  AsignarRutinaCliente,
} from "../interface/clientes.interface";

interface ClientesAsignadosProviderProps {
  children: React.ReactNode;
}

interface ClientesAsignadosContextProps {
  loading: boolean;
  openModalAsignarRutina: boolean;
  clientes: Response[];
  handleOpenModalAsignarRutina: () => void;
  handleCloseModalAsignarRutina: () => void;
  getClientes: () => void;
  asignarRutinaCliente: (dataForm: AsignarRutinaCliente, id: string) => void;
}

export const ClientesAsignadosContext =
  createContext<ClientesAsignadosContextProps>({
    loading: false,
    openModalAsignarRutina: false,
    clientes: [],
    handleOpenModalAsignarRutina: () => {},
    handleCloseModalAsignarRutina: () => {},
    getClientes: () => {},
    asignarRutinaCliente: () => {},
  });

export const ClientesAsignadosProvider = ({
  children,
}: ClientesAsignadosProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [openModalAsignarRutina, setOpenModalAsignarRutina] = useState(false);
  const [clientes, setClientes] = useState<Response[]>([]);

  const handleOpenModalAsignarRutina = () => {
    setOpenModalAsignarRutina(true);
  };

  const handleCloseModalAsignarRutina = () => {
    setOpenModalAsignarRutina(false);
  };

  const getClientes = async () => {
    try {
      setLoading(true);
      const entrenador_id = Number(localStorage.getItem("entrenador_id"));
      const { data } = await ClientesAsignadosServices.getClientes(entrenador_id);
      setClientes(data);
    } catch (error) {
      toast.error("Ocurrió un error al obtener los clientes");
    } finally {
      setLoading(false);
    }
  };

  const asignarRutinaCliente = async (
    dataForm: AsignarRutinaCliente,
    id: string
  ) => {
    try {
      setLoading(true);
      const { data } = await ClientesAsignadosServices.asignarRutinaCliente(
        dataForm,
        id
      );
      if (data.status === 401 || data.status === 400 || data.status === 404) {
        toast.error(data.message);
        return;
      }
      toast.success("Rutina asignada correctamente");
      getClientes();
    } catch (error) {
      console.log(error);
      toast.error("Ocurrió un error al asignar la rutina");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getClientes();
  }, []);

  return (
    <ClientesAsignadosContext.Provider
      value={{
        loading,
        openModalAsignarRutina,
        clientes,
        handleOpenModalAsignarRutina,
        handleCloseModalAsignarRutina,
        getClientes,
        asignarRutinaCliente,
      }}
    >
      {children}
    </ClientesAsignadosContext.Provider>
  );
};

export default ClientesAsignadosProvider;
