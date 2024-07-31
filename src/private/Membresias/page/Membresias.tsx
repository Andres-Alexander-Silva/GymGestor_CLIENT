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
import {
  ModalCreateMembresia,
  ModalInfoMembresia,
  TableMembresias,
} from "../components";
import { MembresiasContext } from "../context/MembresiasContext";

const Membresias = () => {
  const [search, setSearch] = useState("");
  const { membresias, handleOpenModalCreate } = useContext(MembresiasContext);

  const searchMembresias = () => {
    return membresias.filter((membresia) => {
      return (
        search === "" ||
        membresia.nombre.toLowerCase().includes(search.toLowerCase())
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
          Gestion de Membresias
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
        <TableMembresias searchMembresias={searchMembresias} />
      </Stack>
      <ModalCreateMembresia />
      <ModalInfoMembresia />
    </Stack>
  );
};

export default Membresias;
