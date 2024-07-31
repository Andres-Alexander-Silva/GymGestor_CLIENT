import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as MembresiasServices from "../services/membresia.services";
import {
  Membresia,
  MembresiaCreate,
  MembresiaUpdate,
} from "../interface/membresia.interface";
import Swal from "sweetalert2";

interface MembresiasProviderProps {
  children: React.ReactNode;
}

interface MembresiasContextProps {
  loading: boolean;
  openModalCreate: boolean;
  openModalInfo: boolean;
  membresias: Membresia[];
  currentMembresia: Membresia;
  handleOpenModalCreate: () => void;
  handleCloseModalCreate: () => void;
  handleOpenModalInfo: () => void;
  handleCloseModalInfo: () => void;
  getMembresias: () => void;
  getMembresiaInfo: (id: number) => void;
  createMembresia: (dataForm: MembresiaCreate) => void;
  updateMembresia: (id: number, dataForm: MembresiaUpdate) => void;
  deleteMembresia: (id: number) => void;
}

export const MembresiasContext = createContext<MembresiasContextProps>({
  loading: false,
  openModalCreate: false,
  openModalInfo: false,
  membresias: [],
  currentMembresia: {} as Membresia,
  handleOpenModalCreate: () => {},
  handleCloseModalCreate: () => {},
  handleOpenModalInfo: () => {},
  handleCloseModalInfo: () => {},
  getMembresias: () => {},
  getMembresiaInfo: () => {},
  createMembresia: () => {},
  updateMembresia: () => {},
  deleteMembresia: () => {},
});

export const MembresiasProvider = ({ children }: MembresiasProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalInfo, setOpenModalInfo] = useState(false);
  const [membresias, setMembresias] = useState<Membresia[]>([]);
  const [currentMembresia, setCurrentMembresia] = useState<Membresia>(
    {} as Membresia
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

  const getMembresias = async () => {
    try {
      setLoading(true);
      const { data } = await MembresiasServices.getMembresias();
      setMembresias(data);
      toast.success("Membresías obtenidas correctamente");
    } catch (error) {
      toast.error("Ocurrió un error al obtener las membresías");
    } finally {
      setLoading(false);
    }
  };

  const getMembresiaInfo = async (id: number) => {
    try {
      setLoading(true);
      const { data } = await MembresiasServices.getMembresia(id);
      setCurrentMembresia(data);
      if (data.status === 401 || data.status === 400 || data.status === 404) {
        toast.error(data.message);
        return;
      }
      toast.success("Membresía obtenida correctamente");
    } catch (error) {
      toast.error("Ocurrió un error al obtener la membresía");
    } finally {
      setLoading(false);
    }
  };

  const createMembresia = async (dataForm: MembresiaCreate) => {
    try {
      setLoading(true);
      const { data } = await MembresiasServices.createMembresia(dataForm);
      if (data.status === 401 || data.status === 400 || data.status === 404) {
        toast.error(data.message);
        return;
      }
      toast.success("Membresía creada correctamente");
      getMembresias();
    } catch (error) {
      console.error(error);
      toast.error("Ocurrió un error al crear la membresía");
    } finally {
      setLoading(false);
    }
  };

  const updateMembresia = async (id: number, dataForm: MembresiaUpdate) => {
    try {
      setLoading(true);
      const { data } = await MembresiasServices.updateMembresia(id, dataForm);
      if (data.status === 401 || data.status === 400 || data.status === 404) {
        toast.error(data.message);
        return;
      }
      toast.success("Membresía actualizada correctamente");
      getMembresias();
    } catch (error) {
      console.error(error);
      toast.error("Ocurrió un error al actualizar la membresía");
    }
    setLoading(false);
  };

  const deleteMembresia = async (id: number) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "La membresía será eliminada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff570d",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await MembresiasServices.deleteMembresia(id);
          Swal.fire(
            "Membresía eliminada",
            "La membresía se eliminó correctamente",
            "success"
          );
          getMembresias();
        } catch (error) {
          console.error(error);
          toast.error("Ocurrió un error al eliminar la membresía");
        } finally {
          setLoading(false);
        }
      }
    });
  };

  useEffect(() => {
    getMembresias();
  }, []);

  return (
    <MembresiasContext.Provider
      value={{
        loading,
        openModalCreate,
        openModalInfo,
        membresias,
        currentMembresia,
        handleOpenModalCreate,
        handleCloseModalCreate,
        handleOpenModalInfo,
        handleCloseModalInfo,
        getMembresias,
        getMembresiaInfo,
        createMembresia,
        updateMembresia,
        deleteMembresia,
      }}
    >
      {children}
    </MembresiasContext.Provider>
  );
};

export default MembresiasProvider;
