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
import { ModalCreateRutina, ModalInfoRutina, TableRutinas } from "../components";
import { RutinasContext } from "../context/RutinasContext";

const Rutinas = () => {
  const [search, setSearch] = useState("");
  const { rutinas, handleOpenModalCreate } = useContext(RutinasContext);

  const searchRutinas = () => {
    return rutinas.filter((rutina) => {
      return (
        search === "" ||
        rutina.nombre.toLowerCase().includes(search.toLowerCase())
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
          Gestion de Rutinas
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
        <TableRutinas searchRutinas={searchRutinas} />
      </Stack>
      <ModalCreateRutina />
      <ModalInfoRutina />
    </Stack>
  );
};

export default Rutinas;
