import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as EjerciciosServices from "../services/ejercicios.services";
import {
  Ejercicio,
  EjercicioCreate,
  EjercicioUpdate,
} from "../interface/ejercicios.interface";
import Swal from "sweetalert2";

interface EjerciciosProviderProps {
  children: React.ReactNode;
}

interface EjerciciosContextProps {
  loading: boolean;
  openModalCreate: boolean;
  openModalInfo: boolean;
  ejercicios: Ejercicio[];
  currentEjercicio: Ejercicio;
  handleOpenModalCreate: () => void;
  handleCloseModalCreate: () => void;
  handleOpenModalInfo: () => void;
  handleCloseModalInfo: () => void;
  getEjercicios: () => void;
  getEjercicioInfo: (id: number) => void;
  createEjercicio: (dataForm: EjercicioCreate) => void;
  updateEjercicio: (id: number, dataForm: EjercicioUpdate) => void;
  deleteEjercicio: (id: number) => void;
}

export const EjerciciosContext = createContext<EjerciciosContextProps>({
  loading: false,
  openModalCreate: false,
  openModalInfo: false,
  ejercicios: [],
  currentEjercicio: {} as Ejercicio,
  handleOpenModalCreate: () => {},
  handleCloseModalCreate: () => {},
  handleOpenModalInfo: () => {},
  handleCloseModalInfo: () => {},
  getEjercicios: () => {},
  getEjercicioInfo: () => {},
  createEjercicio: () => {},
  updateEjercicio: () => {},
  deleteEjercicio: () => {},
});

export const EjerciciosProvider = ({ children }: EjerciciosProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalInfo, setOpenModalInfo] = useState(false);
  const [ejercicios, setEjercicios] = useState<Ejercicio[]>([]);
  const [currentEjercicio, setCurrentEjercicio] = useState<Ejercicio>(
    {} as Ejercicio
  );

  const handleOpenModalCreate = () => {
    setOpenModalCreate(true);
  };

  const handleCloseModalCreate = () => {
    setOpenModalCreate(false);
  };

  const handleOpenModalInfo = () => {
    setOpenModalInfo(true);
  };

  const handleCloseModalInfo = () => {
    setOpenModalInfo(false);
  };

  const getEjercicios = async () => {
    try {
      setLoading(true);
      const { data } = await EjerciciosServices.getEjercicios();
      if (data.status === 401 || data.status === 400 || data.status === 404) {
        toast.error(data.message);
        return;
      }
      setEjercicios(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getEjercicioInfo = async (id: number) => {
    try {
      setLoading(true);
      const { data } = await EjerciciosServices.getEjercicio(id);
      if (data.status === 401 || data.status === 400 || data.status === 404) {
        toast.error(data.message);
        return;
      }
      setCurrentEjercicio(data);
      toast.success("Ejercicio obtenido");
    } catch (error) {
      console.error(error);
      toast.error("Error al obtener el ejercicio");
    } finally {
      setLoading(false);
    }
  };

  const createEjercicio = async (dataForm: EjercicioCreate) => {
    try {
      setLoading(true);
      const { data } = await EjerciciosServices.crearteEjercicio(dataForm);
      if (data.status === 401 || data.status === 400 || data.status === 404) {
        toast.error(data.message);
        return;
      }
      toast.success("Ejercicio creado");
      getEjercicios();
    } catch (error) {
      console.error(error);
      toast.error("Error al crear el ejercicio");
    } finally {
      setLoading(false);
    }
  };

  const updateEjercicio = async (id: number, dataForm: EjercicioUpdate) => {
    setLoading(true);
    try {
      const { data } = await EjerciciosServices.updateEjercicio(id, dataForm);
      if (data.status === 401 || data.status === 400 || data.status === 404) {
        toast.error(data.message);
        return;
      }
      toast.success("Ejercicio actualizado");
      getEjercicios();
    } catch (error) {
      console.error(error);
      toast.error("Error al actualizar el ejercicio");
    } finally {
      setLoading(false);
    }
  };

  const deleteEjercicio = async (id: number) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "El ejercicio será eliminada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff570d",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await EjerciciosServices.deleteEjercicio(id);
          toast.success("Ejercicio eliminado");
          getEjercicios();
        } catch (error) {
          console.error(error);
          toast.error("Error al eliminar el ejercicio");
        } finally {
          setLoading(false);
        }
      }
    });
  };

  useEffect(() => {
    getEjercicios();
  }, []);

  return (
    <EjerciciosContext.Provider
      value={{
        loading,
        openModalCreate,
        openModalInfo,
        ejercicios,
        currentEjercicio,
        handleOpenModalCreate,
        handleCloseModalCreate,
        handleOpenModalInfo,
        handleCloseModalInfo,
        getEjercicios,
        getEjercicioInfo,
        createEjercicio,
        updateEjercicio,
        deleteEjercicio,
      }}
    >
      {children}
    </EjerciciosContext.Provider>
  );
};

export default EjerciciosProvider;
