import { useContext, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { ModalCreateUsuario, TableUsuarios } from "../components";
import { UsuariosContext } from "../context/UsuariosContext";
import { Box, Button, Card, InputAdornment, OutlinedInput, Stack, SvgIcon, Typography } from "@mui/material";

const Usuarios = () => {
  const { handleOpenModalCreate, usuarios } = useContext(UsuariosContext);
  const [search, setSearch] = useState("");

  const searchUsuarios = () => {
    return usuarios.filter((usuario) => {
      return (
        search === "" ||
        usuario.cedula.toLowerCase().includes(search.toLowerCase()) ||
        usuario.nombre.toLowerCase().includes(search.toLowerCase()) ||
        usuario.apellido.toLowerCase().includes(search.toLowerCase())
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
          Gestion de Usuarios
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
            Crear Usuario
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
        <TableUsuarios searchUsuarios={searchUsuarios} />
      </Stack>
      <ModalCreateUsuario />
    </Stack>
  );
};

export default Usuarios;
