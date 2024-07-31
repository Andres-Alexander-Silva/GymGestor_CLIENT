import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as UsuariosServices from "../services/usuarios.services";
import {
  Usuario,
  UsuarioCreate,
  UsuarioUpdate,
  Entrenador,
  Rol,
  Membresia,
} from "../interface/usuarios.interfaces";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";

interface UsuariosProviderProps {
  children: React.ReactNode;
}

interface UsuariosContextProps {
  loading: boolean;
  openModalCreate: boolean;
  openModalInfo: boolean;
  usuarios: Usuario[];
  currentUsuario: Usuario;
  roles: Rol[];
  entrenadores: Entrenador[];
  membresias: Membresia[];
  handleOpenModalCreate: () => void;
  handleCloseModalCreate: () => void;
  handleOpenModalInfo: () => void;
  handleCloseModalInfo: () => void;
  getUsuarios: () => void;
  getRoles: () => void;
  getEntrenadores: () => void;
  getMembresias: () => void;
  createUsuario: (dataForm: UsuarioCreate) => void;
  getUsuarioInfo: (id: string) => void;
  updateUsuario: (id: string, dataForm: UsuarioUpdate) => void;
  deleteUsuario: (id: number) => void;
}

export const UsuariosContext = createContext<UsuariosContextProps>({
  loading: false,
  openModalCreate: false,
  openModalInfo: false,
  usuarios: [],
  currentUsuario: {} as Usuario,
  roles: [],
  entrenadores: [],
  membresias: [],
  handleOpenModalCreate: () => {},
  handleCloseModalCreate: () => {},
  handleOpenModalInfo: () => {},
  handleCloseModalInfo: () => {},
  getUsuarios: () => {},
  getRoles: () => {},
  getEntrenadores: () => {},
  getMembresias: () => {},
  createUsuario: () => {},
  getUsuarioInfo: () => {},
  updateUsuario: () => {},
  deleteUsuario: () => {},
});

const cookies = new Cookies();

export const UsuariosProvider = ({ children }: UsuariosProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalInfo, setOpenModalInfo] = useState(false);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [currentUsuario, setCurrentUsuario] = useState<Usuario>({} as Usuario);
  const [roles, setRoles] = useState<Rol[]>([]);
  const [entrenadores, setEntrenadores] = useState<Entrenador[]>([]);
  const [membresias, setMembresias] = useState<Membresia[]>([]);

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

  const getUsuarios = async () => {
    try {
      setLoading(true);
      const token = cookies.get("token");
      const { data } = await UsuariosServices.getUsuarios(token);
      setUsuarios(data);
      toast.success("Usuarios cargados correctamente");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getUsuarioInfo = async (id: string) => {
    try {
      setLoading(true);
      const token = cookies.get("token");
      const { data } = await UsuariosServices.getUsuario(id, token);
      setCurrentUsuario(data);
      if (data.status === 401 || data.status === 400 || data.status === 404) {
        toast.error(data.message);
        return;
      }
      toast.success("Usuario cargado correctamente");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getRoles = async () => {
    try {
      const token = cookies.get("token");
      const { data } = await UsuariosServices.getRoles(token);
      setRoles(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getEntrenadores = async () => {
    try {
      const token = cookies.get("token");
      const { data } = await UsuariosServices.getEntrenadores(token);
      setEntrenadores(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getMembresias = async () => {
    try {
      const { data } = await UsuariosServices.getMembresias();
      setMembresias(data);
    } catch (error) {
      console.error(error);
    }
  };

  const createUsuario = async (dataForm: UsuarioCreate) => {
    try {
      setLoading(true);
      const token = cookies.get("token");
      const { data } = await UsuariosServices.createUsuario(dataForm, token);
      if (data.status === 401 || data.status === 400 || data.status === 404) {
        toast.error(data.message);
        return;
      }
      toast.success("Usuario creado correctamente");
      getUsuarios();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const updateUsuario = async (id: string, dataForm: UsuarioUpdate) => {
    try {
      setLoading(true);
      const token = cookies.get("token");
      const { data } = await UsuariosServices.updateUsuario(
        id,
        dataForm,
        token
      );
      if (data.status === 401 || data.status === 400 || data.status === 404) {
        toast.error(data.message);
        return;
      }
      toast.success("Usuario actualizado correctamente");
      getUsuarios();
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteUsuario = async (id: number) => {
    Swal.fire({
      title: "Deseas borrar este usuario?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#ff570d",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result: any) => {
      if (result.isConfirmed) {
        const token = cookies.get("token");
        UsuariosServices.deleteUsuario(id, token)
          .then((_res) => {
            getUsuarios();
            Swal.fire("Usuario eliminado", "", "success");
          })
          .catch((erro) => {
            console.error(erro);
            Swal.fire("Error al eliminar el usuario", "", "error");
          });
      }
    });
  };

  useEffect(() => {
    getUsuarios();
    getRoles();
    getEntrenadores();
    getMembresias();
  }, []);

  return (
    <UsuariosContext.Provider
      value={{
        loading,
        openModalCreate,
        openModalInfo,
        usuarios,
        currentUsuario,
        roles,
        entrenadores,
        membresias,
        handleOpenModalCreate,
        handleCloseModalCreate,
        handleOpenModalInfo,
        handleCloseModalInfo,
        getUsuarios,
        getRoles,
        getEntrenadores,
        getMembresias,
        createUsuario,
        getUsuarioInfo,
        updateUsuario,
        deleteUsuario,
      }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};
