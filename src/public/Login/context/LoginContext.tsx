import { createContext, useState } from "react";
import { toast } from "react-toastify";
import * as LoginServices from "../services/login.services";
import {
  LoginForm,
  LoginResponse,
  ChangePasswordForm,
} from "../interface/login.interface";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

interface LoginProviderProps {
  children: React.ReactNode;
}

interface LoginContextProps {
  login: (data: LoginForm) => void;
  changePassword: (data: ChangePasswordForm) => void;
  sendMailToken: (email: string) => void;
  user: LoginResponse;
  handleOpenModalChangePassword: () => void;
  handleCloseModalChangePassword: () => void;
  openModalChangePassword: boolean;
  loading: boolean;
  isSendMail: boolean;
}

export const LoginContext = createContext<LoginContextProps>({
  login: () => {},
  changePassword: () => {},
  sendMailToken: () => {},
  user: {} as LoginResponse,
  handleOpenModalChangePassword: () => {},
  handleCloseModalChangePassword: () => {},
  openModalChangePassword: false,
  loading: false,
  isSendMail: false,
});

const cookies = new Cookies();

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [user, setUser] = useState<LoginResponse>({} as LoginResponse);
  const [openModalChangePassword, setOpenModalChangePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSendMail, setIsSendMail] = useState(false);
  const navigate = useNavigate();

  const login = async (dataForm: LoginForm) => {
    try {
      setLoading(true);
      const { data } = await LoginServices.login(dataForm);
      setUser(data);
      if (data.status === 401) {
        toast.error(data.message);
        return;
      } else {
        cookies.set("token", data.token, { path: "/" });
        localStorage.setItem("user", data.response.username);
        localStorage.setItem("nameComplete", data.response.nombres + " " + data.response.apellidos)
        localStorage.setItem("rol_name", data.response.rol_name);
        localStorage.setItem("rol_id", data.response.rol_id);
        toast.success("Bienvenido!!");
        navigate("/inicio");
      }
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  const changePassword = async (dataForm: ChangePasswordForm) => {
    setLoading(true);
    try {
      const {data} = await LoginServices.changePassword(dataForm);
      toast.success(data.message);
      setOpenModalChangePassword(false);
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const sendMailToken = async (email: string) => {
    setLoading(true);
    try {
      await LoginServices.sendMailToken(email);
      toast.success("Correo enviado con éxito");
      setIsSendMail(true);
    } catch (error: any) {
      setIsSendMail(false);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModalChangePassword = () => {
    console.log("entra aca")
    setOpenModalChangePassword(true);
  };

  const handleCloseModalChangePassword = () => {
    setOpenModalChangePassword(false);
  };

  return (
    <LoginContext.Provider
      value={{
        login,
        changePassword,
        sendMailToken,
        user,
        handleOpenModalChangePassword,
        handleCloseModalChangePassword,
        openModalChangePassword,
        loading,
        isSendMail,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
