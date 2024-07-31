import { useContext } from "react";
import { Box } from "@mui/material";
import CardRutinaEjercicio from "./CardRutinaEjercicio";
import { ClientesContext } from "../context/ClientesContext";
import ModalLoader from "../../../global/components/ModalLoader";

const TableRutinaEjercicio = () => {
  const { rutinaEjercicio, loading } = useContext(ClientesContext);

  if (loading) return <ModalLoader />;

  return (
    <Box>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-11">
        {rutinaEjercicio.map((rutina: any) => (
          <CardRutinaEjercicio rutina={rutina.rutina} />
        ))}
      </div>
    </Box>
  );
};

export default TableRutinaEjercicio;
