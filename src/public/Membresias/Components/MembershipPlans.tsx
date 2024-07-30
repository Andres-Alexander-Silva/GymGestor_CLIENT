import { Box } from "@mui/material";
import CardMembresia from "./CardMembresia";
import { useContext } from "react";
import { MembresiasContext } from "../context/MembresiasContext";

const MembershipPlans = () => {
  const { membresias } = useContext(MembresiasContext);
  return (
    <section className="py-14">
      <div className="max-w-screen-lg mx-auto ">
        <h2 className="text-center text-3xl font-bold text-yellow-500 mb-4 mt-4">
          Elige tu membresía y <span className="text-orange-500">entrena</span>
        </h2>
        <Box
          sx={{
            display: "flex",
            gap: 5,
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          {membresias?.map((membresia) => (
            <CardMembresia
              key={membresia.id}
              nombre={membresia.nombre}
              descripcion={membresia.descripcion}
              duracion={membresia.duracion.toString()}
              costo={membresia.costo}
            />
          ))}
        </Box>
      </div>
    </section>
  );
};

export default MembershipPlans;
