import { gymApi } from "../../../global/api/gymApi";

export const getClienteInfo = async (id: string) => {
  return await gymApi.get(`/usuarios/${id}`);
};

export const getRutinaEjercicio = async (id: string) => {
  return await gymApi.get(`/usuarios/get_rutinas_ejercicios/${id}`);
};

export const getMembresiaInfo = async (id: string) => {
  return await gymApi.get(`/usuarios/get_membresia_info/${id}`);
};

export const getComprobantePago = async (id: string) => {
  return await gymApi.get(`/usuarios/comprobante_pago/${id}`, {
    responseType: "blob",
  });
};
