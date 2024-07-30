import { gymApi } from "../../../global/api/gymApi";

export const getMembresias = async () => {
    return gymApi.get("/membresias");
}