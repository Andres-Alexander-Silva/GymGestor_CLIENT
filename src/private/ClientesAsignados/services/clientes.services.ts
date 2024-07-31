import { gymApi } from "../../../global/api/gymApi";
import { AsignarRutinaCliente } from "../interface/clientes.interface";

export const getClientes = async (id: number) => {
    return await gymApi.get(`/entrenador/clientes_asignados/${id}`);
}

export const asignarRutinaCliente = async (data: AsignarRutinaCliente, id: string) => {
    return await gymApi.post(`/entrenador/asignar_rutina/${id}`, data);
}