import { useContext, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import {
  Box,
  Card,
  InputAdornment,
  OutlinedInput,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { TableClientesAsignados } from "../components";
import { ClientesAsignadosContext } from "../context/ClientesAsignados";

const ClientesAsignados = () => {
  const [search, setSearch] = useState("");
  const { clientes } = useContext(ClientesAsignadosContext);

  const searchClientes = () => {
    return clientes.filter((cliente) => {
      return (
        search === "" ||
        cliente.usuario.cedula.toLowerCase().includes(search.toLowerCase()) ||
        cliente.usuario.nombre.toLowerCase().includes(search.toLowerCase()) ||
        cliente.usuario.apellido.toLowerCase().includes(search.toLowerCase())
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
          Gestion de Clientes Asignados
        </Typography>
      </Stack>
      <Stack spacing={3}>
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
            gap: 2,
            justifyContent: "end",
          }}
        >
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
              sx={{ width: 270 }}
            />
          </Card>
        </Box>
        <TableClientesAsignados searchClientes={searchClientes} />
      </Stack>
    </Stack>
  );
};

export default ClientesAsignados;
