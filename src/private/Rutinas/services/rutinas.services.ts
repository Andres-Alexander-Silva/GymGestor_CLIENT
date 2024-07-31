import { gymApi } from "../../../global/api/gymApi";
import { RutinaCreate, RutinaUpdate } from "../interface/rutinas.interface";

export const getRutinas = async () => {
    return await gymApi.get("/rutina");
};

export const getRutina = async (id: string) => {
    return await gymApi.get(`/rutina/${id}`);
};

export const crearteRutina = async (data: RutinaCreate) => {
    return await gymApi.post("/rutina", data);
}

export const updateRutina = async (id: string, data: RutinaUpdate) => {
    return await gymApi.put(`/rutina/${id}`, data);
}

export const deleteRutina = async (id: number) => {
    return await gymApi.delete(`/rutina/${id}`);
}