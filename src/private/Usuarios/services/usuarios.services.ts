import { gymApi } from "../../../global/api/gymApi";
import { addAuthorizationHeader } from "../../../utils/token";
import { UsuarioCreate, UsuarioUpdate } from "../interface/usuarios.interfaces";

export const getUsuarios = async (token: string) => {
    const config = addAuthorizationHeader({}, token);
    return await gymApi.get("/usuarios", config);
}

export const getUsuario = async (id: number, token: string) => {
    const config = addAuthorizationHeader({}, token);
    return await gymApi.get(`/usuarios/${id}`, config);
}

export const createUsuario = async (data: UsuarioCreate, token: string) => {
    const config = addAuthorizationHeader({}, token);
    return await gymApi.post("/usuarios", data, config);
}

export const updateUsuario = async (id: number, data: UsuarioUpdate, token: string) => {
    const config = addAuthorizationHeader({}, token);
    return await gymApi.put(`/usuarios/${id}`, data, config);
}

export const deleteUsuario = async (id: number, token: string) => {
    const config = addAuthorizationHeader({}, token);
    return await gymApi.delete(`/usuarios/${id}`, config);
}

export const getRoles = async () => {
    return await gymApi.get("/roles");
}

export const getMembresias = async () => {
    return await gymApi.get("/membresias");
}

export const getEntrenadores = async (token: string) => {
    const config = addAuthorizationHeader({}, token);
    return await gymApi.get("/entrenador", config);
}