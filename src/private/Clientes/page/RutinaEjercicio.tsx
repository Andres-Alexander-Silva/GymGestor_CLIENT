import {
  Stack,
  Typography,
} from "@mui/material";
import { TableRutinaEjercicio } from "../components";

const RutinaEjercicio = () => {
  return (
    <Stack spacing={3} sx={{ mt: { xs: "10%", sm: "10%" } }}>
      <Stack spacing={1}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          fontWeight="bold"
        >
          Gestion de Rutina y Ejercicios
        </Typography>
      </Stack>
      <Stack spacing={3}>
        <TableRutinaEjercicio />
      </Stack>
    </Stack>
  );
};

export default RutinaEjercicio;
