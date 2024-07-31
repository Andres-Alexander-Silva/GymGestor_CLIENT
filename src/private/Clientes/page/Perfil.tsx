import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ClientesContext } from "../context/ClientesContext";

const Perfil = () => {
  const { clienteInfo, membresiaInfo, getComprobantePago } = useContext(ClientesContext);

  console.log(membresiaInfo);

  return (
    <Stack spacing={3} sx={{ mt: { xs: "10%", sm: "10%" } }}>
      <Stack spacing={1}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          fontWeight="bold"
        >
          Perfil de Usuario
        </Typography>
      </Stack>
      <Stack spacing={3}>
        <Card
          sx={{
            width: { xs: "100%", sm: 1000 },
            backgroundColor: "#FFF",
            borderRadius: "0.5rem",
            boxShadow: "0 0 1rem rgba(0, 0, 0, 0.2)",
            mt: 10,
            p: "1rem",
            display: "flex",
            gap: 2,
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "50%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid container rowSpacing={2} columnSpacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  component="h2"
                  align="left"
                  fontWeight={"bold"}
                  fontSize={23}
                  sx={{ mb: 2, ml: 2 }}
                  color={"#ff570d"}
                >
                  Informacion Personal
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h6"
                  component="h2"
                  align="justify"
                  fontWeight={"bold"}
                  fontSize={20}
                  sx={{ ml: 2 }}
                >
                  Cedula: <p className="font-normal">{clienteInfo.cedula}</p>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h6"
                  component="h2"
                  align="justify"
                  fontWeight={"bold"}
                  fontSize={20}
                  sx={{ ml: 2 }}
                >
                  Usuario: <p className="font-normal">{clienteInfo.username}</p>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h6"
                  component="h2"
                  align="justify"
                  fontWeight={"bold"}
                  fontSize={20}
                  sx={{ ml: 2 }}
                >
                  Nombre: <p className="font-normal">{clienteInfo.nombre}</p>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h6"
                  component="h2"
                  align="justify"
                  fontWeight={"bold"}
                  fontSize={20}
                  sx={{ ml: 2 }}
                >
                  Apellido: <p className="font-normal">{clienteInfo.apellido}</p>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  component="h2"
                  align="justify"
                  fontWeight={"bold"}
                  fontSize={20}
                  sx={{ ml: 2 }}
                >
                  Correo: <p className="font-normal">{clienteInfo.correo}</p>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h6"
                  component="h2"
                  align="justify"
                  fontWeight={"bold"}
                  fontSize={20}
                  sx={{ ml: 2 }}
                >
                  Telefono: <p className="font-normal">{clienteInfo.telefono}</p>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h6"
                  component="h2"
                  align="justify"
                  fontWeight={"bold"}
                  fontSize={20}
                  sx={{ ml: 2 }}
                >
                  Estatura: <p className="font-normal">{clienteInfo.estatura}m</p> 
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h6"
                  component="h2"
                  align="justify"
                  fontWeight={"bold"}
                  fontSize={20}
                  sx={{ ml: 2 }}
                >
                  Peso: <p className="font-normal">{clienteInfo.peso} Kg</p> 
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "50%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Grid container rowSpacing={2} columnSpacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  component="h2"
                  align="left"
                  fontWeight={"bold"}
                  fontSize={23}
                  sx={{ mb: 2, ml: 2 }}
                  color={"#ff570d"}
                >
                  Informacion Membresia
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  component="h2"
                  align="justify"
                  fontWeight={"bold"}
                  fontSize={20}
                  sx={{ ml: 2 }}
                >
                  Membresia: <p className="font-normal">{membresiaInfo.nombre}</p>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  component="h2"
                  align="justify"
                  fontWeight={"bold"}
                  fontSize={20}
                  sx={{ ml: 2 }}
                >
                  Descripcion: <p className="font-normal">{membresiaInfo.descripcion}</p>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  component="h2"
                  align="justify"
                  fontWeight={"bold"}
                  fontSize={20}
                  sx={{ ml: 2 }}
                >
                  Vence: <p className="font-normal">{membresiaInfo.fecha_fin.split("T")[0]}</p>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                    variant="contained"
                    color="warning"
                    onClick={() => getComprobantePago()}
                    sx={{ ml: 2 }}
                >
                    Generar Comprobante de Pago
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Stack>
    </Stack>
  );
};

export default Perfil;
