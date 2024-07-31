import { useContext, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import {
  Box,
  Button,
  Card,
  InputAdornment,
  OutlinedInput,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { EjerciciosContext } from "../context/EjerciciosContext";
import {
  ModalCreateEjercicio,
  ModalInfoEjercicio,
  TableEjercicios,
} from "../components";

const Ejercicios = () => {
  const [search, setSearch] = useState("");
  const { ejercicios, handleOpenModalCreate } = useContext(EjerciciosContext);

  const searchEjercicios = () => {
    return ejercicios.filter((ejercicio) => {
      return (
        search === "" ||
        ejercicio.nombre.toLowerCase().includes(search.toLowerCase())
      );
    });
  };

  return (
    <Stack spacing={3} sx={{ mt: { xs: "10%", sm: "10%" } }}>
      <Stack spacing={1}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          fontWeight="bold"
        >
          Gestion de Ejercicios
        </Typography>
      </Stack>
      <Stack spacing={3}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            color="warning"
            onClick={handleOpenModalCreate}
          >
            Crear Membresia
          </Button>
          <Card sx={{ p: 1 }}>
            <OutlinedInput
              defaultValue={search}
              fullWidth
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar usuario por nombre"
              startAdornment={
                <InputAdornment position="start">
                  <SvgIcon color="action" fontSize="small">
                    <MdOutlineSearch />
                  </SvgIcon>
                </InputAdornment>
              }
              sx={{ width: 450 }}
            />
          </Card>
        </Box>
        <TableEjercicios searchEjercicios={searchEjercicios} />
      </Stack>
      <ModalCreateEjercicio />
      <ModalInfoEjercicio />
    </Stack>
  );
};

export default Ejercicios;
