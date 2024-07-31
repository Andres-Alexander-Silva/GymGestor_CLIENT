import {
  Modal,
  Fade,
  TextField,
  Button,
  Box,
  Backdrop,
  Typography,
  Grid,
  MenuItem,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useStylesModal } from "../../../utils/modal/useStyleModal";
import { useContext } from "react";
import ModalLoader from "../../../global/components/ModalLoader";
import { ClientesAsignadosContext } from "../context/ClientesAsignados";
import { EjerciciosContext } from "../../Ejercicios/context/EjerciciosContext";
import { RutinasContext } from "../../Rutinas/context/RutinasContext";
import { AsignarRutinaCliente } from "../interface/clientes.interface";

interface ModalAsignarRutinaProps {
  idCliente: string;
}

const ModalAsignarRutina = ({ idCliente }: ModalAsignarRutinaProps) => {
  const { loading, openModalAsignarRutina, handleCloseModalAsignarRutina, asignarRutinaCliente } =
    useContext(ClientesAsignadosContext);
  const { rutinas } = useContext(RutinasContext);
  const { ejercicios } = useContext(EjerciciosContext);
  const style = useStylesModal();
  const methodsAsignarRutina = useForm<AsignarRutinaCliente>();

  const onSubmit = (data: AsignarRutinaCliente) => {
    console.log(data);
    console.log(idCliente);
    asignarRutinaCliente(data, idCliente);
    methodsAsignarRutina.reset();
    handleCloseModalAsignarRutina();
  };

  if (loading) return <ModalLoader />;

  return (
    <Modal
      open={openModalAsignarRutina}
      onClose={handleCloseModalAsignarRutina}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openModalAsignarRutina}>
        <Box sx={style}>
          <Typography
            variant="h6"
            component="h2"
            align="center"
            fontWeight={"bold"}
            fontSize={23}
            sx={{ mb: 2 }}
          >
            Asignar Rutina
          </Typography>
          <form onSubmit={methodsAsignarRutina.handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="rutina_id"
                  control={methodsAsignarRutina.control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      label="Rutina"
                      fullWidth
                      required
                      variant="outlined"
                    >
                      {rutinas.map((rutina) => (
                        <MenuItem key={rutina.id} value={rutina.id}>
                          {rutina.nombre}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="ejercicio_id"
                  control={methodsAsignarRutina.control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      label="Ejercicios"
                      fullWidth
                      required
                      variant="outlined"
                    >
                      {ejercicios.map((ejercicio) => (
                        <MenuItem key={ejercicio.id} value={ejercicio.id}>
                          {ejercicio.nombre}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    mt: 3,
                  }}
                >
                  <Button
                    variant="contained"
                    color="warning"
                    type="submit"
                    fullWidth
                  >
                    Crear
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    type="button"
                    onClick={handleCloseModalAsignarRutina}
                    fullWidth
                  >
                    Cancelar
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalAsignarRutina;
