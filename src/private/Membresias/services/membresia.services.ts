import { gymApi } from "../../../global/api/gymApi";
import { MembresiaCreate, MembresiaUpdate } from "../interface/membresia.interface";

export const getMembresias = async () => {
    return await gymApi.get("/membresias");
}

export const getMembresia = async (id: number) => {
    return await gymApi.get(`/membresias/${id}`);
}

export const createMembresia = async (data: MembresiaCreate) => {
    return await gymApi.post("/membresias", data);
}

export const updateMembresia = async (id: number, data: MembresiaUpdate) => {
    return await gymApi.put(`/membresias/${id}`, data);
}

export const deleteMembresia = async (id: number) => {
    return await gymApi.delete(`/membresias/${id}`);
}