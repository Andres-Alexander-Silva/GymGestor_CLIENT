import { gymApi } from "../../../global/api/gymApi";
import {
  EjercicioCreate,
  EjercicioUpdate,
} from "../interface/ejercicios.interface";

export const getEjercicios = async () => {
  return await gymApi.get("/ejercicio");
};

export const getEjercicio = async (id: number) => {
  return await gymApi.get(`/ejercicio/${id}`);
};

export const crearteEjercicio = async (data: EjercicioCreate) => {
  return await gymApi.post("/ejercicio", data);
};

export const updateEjercicio = async (id: number, data: EjercicioUpdate) => {
  return await gymApi.put(`/ejercicio/${id}`, data);
};

export const deleteEjercicio = async (id: number) => {
  return await gymApi.delete(`/ejercicio/${id}`);
};
