import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as ClientesServices from "../service/clientes.services";
import {
  RutinaEjercicio,
  MembresiaInfo,
  ClienteInfo,
} from "../interface/clientes.interface";

interface ClientesProviderProps {
  children: React.ReactNode;
}

interface ClientesContextProps {
  loading: boolean;
  clienteInfo: ClienteInfo;
  membresiaInfo: MembresiaInfo;
  rutinaEjercicio: RutinaEjercicio[];
  getClienteInfo: () => void;
  getMembresiaInfo: () => void;
  getRutinaEjercicio: () => void;
  getComprobantePago: () => void;
}

export const ClientesContext = createContext<ClientesContextProps>({
  loading: false,
  clienteInfo: {} as ClienteInfo,
  membresiaInfo: {} as MembresiaInfo,
  rutinaEjercicio: [],
  getClienteInfo: () => {},
  getMembresiaInfo: () => {},
  getRutinaEjercicio: () => {},
  getComprobantePago: () => {},
});

export const ClientesProvider = ({ children }: ClientesProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [clienteInfo, setClienteInfo] = useState<ClienteInfo>(
    {} as ClienteInfo
  );
  const [membresiaInfo, setMembresiaInfo] = useState<MembresiaInfo>(
    {} as MembresiaInfo
  );
  const [rutinaEjercicio, setRutinaEjercicio] = useState<RutinaEjercicio[]>([]);

  const getClienteInfo = async () => {
    try {
      setLoading(true);
      const cedula = localStorage.getItem("cedula");
      const { data } = await ClientesServices.getClienteInfo(cedula!);
      setClienteInfo(data);
    } catch (error) {
      toast.error("Ocurrió un error al obtener la información del cliente");
    } finally {
      setLoading(false);
    }
  };

  const getMembresiaInfo = async () => {
    try {
      setLoading(true);
      const cedula = localStorage.getItem("cedula");
      const { data } = await ClientesServices.getMembresiaInfo(cedula!);
      setMembresiaInfo(data);
    } catch (error) {
      toast.error("Ocurrió un error al obtener la información de la membresía");
    } finally {
      setLoading(false);
    }
  };

  const getRutinaEjercicio = async () => {
    try {
      setLoading(true);
      const cedula = localStorage.getItem("cedula");
      const { data } = await ClientesServices.getRutinaEjercicio(cedula!);
      setRutinaEjercicio(data);
    } catch (error) {
      toast.error("Ocurrió un error al obtener la información de la rutina");
    } finally {
      setLoading(false);
    }
  };

  const getComprobantePago = async () => {
    try {
      setLoading(true);
      const cedula = localStorage.getItem("cedula");
      const response = await ClientesServices.getComprobantePago(cedula!);
      if (response.status === 200) {
        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "comprobante_pago.pdf");
        document.body.appendChild(link);
        link.click();
        link.remove();

        toast.success("Comprobante de pago obtenido con éxito");
      } else {
        toast.error("Ocurrió un error al obtener el comprobante de pago");
      }
    } catch (error) {
      toast.error("Ocurrió un error al obtener el comprobante de pago");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getClienteInfo();
    getMembresiaInfo();
    getRutinaEjercicio();
  }, []);

  return (
    <ClientesContext.Provider
      value={{
        loading,
        clienteInfo,
        membresiaInfo,
        rutinaEjercicio,
        getClienteInfo,
        getMembresiaInfo,
        getRutinaEjercicio,
        getComprobantePago,
      }}
    >
      {children}
    </ClientesContext.Provider>
  );
};
