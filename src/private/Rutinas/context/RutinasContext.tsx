import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as RutinasServices from "../services/rutinas.services";
import {
  Rutina,
  RutinaCreate,
  RutinaUpdate,
} from "../interface/rutinas.interface";
import Swal from "sweetalert2";

interface RutinasProviderProps {
  children: React.ReactNode;
}

interface RutinasContextProps {
  loading: boolean;
  openModalCreate: boolean;
  openModalInfo: boolean;
  rutinas: Rutina[];
  currentRutina: Rutina;
  handleOpenModalCreate: () => void;
  handleCloseModalCreate: () => void;
  handleOpenModalInfo: () => void;
  handleCloseModalInfo: () => void;
  getRutinas: () => void;
  getRutinaInfo: (id: number) => void;
  createRutina: (dataForm: RutinaCreate) => void;
  updateRutina: (id: number, dataForm: RutinaUpdate) => void;
  deleteRutina: (id: number) => void;
}

export const RutinasContext = createContext<RutinasContextProps>({
  loading: false,
  openModalCreate: false,
  openModalInfo: false,
  rutinas: [],
  currentRutina: {} as Rutina,
  handleOpenModalCreate: () => {},
  handleCloseModalCreate: () => {},
  handleOpenModalInfo: () => {},
  handleCloseModalInfo: () => {},
  getRutinas: () => {},
  getRutinaInfo: () => {},
  createRutina: () => {},
  updateRutina: () => {},
  deleteRutina: () => {},
});

export const RutinasProvider = ({ children }: RutinasProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalInfo, setOpenModalInfo] = useState(false);
  const [rutinas, setRutinas] = useState<Rutina[]>([]);
  const [currentRutina, setCurrentRutina] = useState<Rutina>({} as Rutina);

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

  const getRutinas = async () => {
    try {
      setLoading(true);
      const { data } = await RutinasServices.getRutinas();
      setRutinas(data);
      toast.success("Rutinas obtenidas con éxito");
    } catch (error) {
      console.log(error);
      toast.error("Ocurrió un error al obtener las rutinas");
    } finally {
      setLoading(false);
    }
  };

  const getRutinaInfo = async (id: number) => {
    try {
      setLoading(true);
      const { data } = await RutinasServices.getRutina(id.toString());
      setCurrentRutina(data);
      if (data.status === 401 || data.status === 400 || data.status === 404) {
        toast.error(data.message);
        return;
      }
      toast.success("Rutina obtenida con éxito");
    } catch (error) {
      toast.error("Ocurrió un error al obtener la rutina");
    } finally {
      setLoading(false);
    }
  };

  const createRutina = async (dataForm: RutinaCreate) => {
    try {
      setLoading(true);
      const { data } = await RutinasServices.crearteRutina(dataForm);
      if (data.status === 401 || data.status === 400 || data.status === 404) {
        toast.error(data.message);
        return;
      }
      toast.success("Rutina creada con éxito");
      getRutinas();
    } catch (error) {
      toast.error("Ocurrió un error al crear la rutina");
    } finally {
      setLoading(false);
      setOpenModalCreate(false);
    }
  };

  const updateRutina = async (id: number, dataForm: RutinaUpdate) => {
    try {
      setLoading(true);
      const { data } = await RutinasServices.updateRutina(
        id.toString(),
        dataForm
      );
      if (data.status === 401 || data.status === 400 || data.status === 404) {
        toast.error(data.message);
        return;
      }
      toast.success("Rutina actualizada con éxito");
      getRutinas();
    } catch (error) {
      console.error(error);
      toast.error("Ocurrió un error al actualizar la rutina");
    } finally {
      setLoading(false);
      setOpenModalInfo;
    }
  };

  const deleteRutina = async (id: number) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "La rutina será eliminada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff570d",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await RutinasServices.deleteRutina(id);
          Swal.fire(
            "Rutina eliminada",
            "La rutina se eliminó correctamente",
            "success"
          );
          getRutinas();
        } catch (error) {
          toast.error("Ocurrió un error al eliminar la rutina");
        } finally {
          setLoading(false);
        }
      }
    });
  };

  useEffect(() => {
    getRutinas();
  }, []);

  return (
    <RutinasContext.Provider
      value={{
        loading,
        openModalCreate,
        openModalInfo,
        rutinas,
        currentRutina,
        handleOpenModalCreate,
        handleCloseModalCreate,
        handleOpenModalInfo,
        handleCloseModalInfo,
        getRutinas,
        getRutinaInfo,
        createRutina,
        updateRutina,
        deleteRutina,
      }}
    >
      {children}
    </RutinasContext.Provider>
  );
};

export default RutinasProvider;
