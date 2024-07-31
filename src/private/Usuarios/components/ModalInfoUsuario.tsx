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
import { useStylesModal2 } from "../../../utils/modal/useStyleModal";
import { useContext, useEffect } from "react";
import { UsuariosContext } from "../context/UsuariosContext";
import ModalLoader from "../../../global/components/ModalLoader";
import { UsuarioUpdate } from "../interface/usuarios.interfaces";

const ModalInfoUsuario = () => {
  const {
    loading,
    entrenadores,
    openModalInfo,
    handleCloseModalInfo,
    updateUsuario,
    currentUsuario,
  } = useContext(UsuariosContext);
  const methodsUsuario = useForm<UsuarioUpdate>();

  const styles = useStylesModal2();

  useEffect(() => {
    if (currentUsuario.cedula) {
      methodsUsuario.setValue("cedula", currentUsuario.cedula);
      methodsUsuario.setValue("nombre", currentUsuario.nombre);
      methodsUsuario.setValue("apellido", currentUsuario.apellido);
      methodsUsuario.setValue("telefono", currentUsuario.telefono);
      methodsUsuario.setValue("direccion", currentUsuario.direccion);
      methodsUsuario.setValue("peso", currentUsuario.peso);
      methodsUsuario.setValue("estatura", currentUsuario.estatura);
      methodsUsuario.setValue("correo", currentUsuario.correo);
      methodsUsuario.setValue("username", currentUsuario.username);
      methodsUsuario.setValue("entrenador_id", currentUsuario.entrenador_id);
      methodsUsuario.setValue("especialidad", currentUsuario.especialidad);
      methodsUsuario.setValue("estado", currentUsuario.estado);
    }
  });

  const onSubmit = (data: UsuarioUpdate) => {
    console.log(data);
    updateUsuario(currentUsuario.cedula, data);
    methodsUsuario.reset();
    handleCloseModalInfo();
  };

  if (loading) return <ModalLoader />;

  return (
    <Modal
      open={openModalInfo}
      onClose={handleCloseModalInfo}
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
      <Fade in={openModalInfo}>
        <Box sx={styles}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Información del usuario
          </Typography>
          <form onSubmit={methodsUsuario.handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Controller
                  name="cedula"
                  control={methodsUsuario.control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      {...field}
                      label="Cédula"
                      variant="outlined"
                      disabled
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="nombre"
                  control={methodsUsuario.control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      {...field}
                      label="Nombre"
                      variant="outlined"
                      onChange={(e) =>
                        field.onChange(e.target.value.toUpperCase())
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="apellido"
                  control={methodsUsuario.control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      {...field}
                      label="Apellido"
                      variant="outlined"
                      onChange={(e) =>
                        field.onChange(e.target.value.toUpperCase())
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="telefono"
                  control={methodsUsuario.control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      {...field}
                      label="Teléfono"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="direccion"
                  control={methodsUsuario.control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      {...field}
                      label="Dirección"
                      variant="outlined"
                      onChange={(e) =>
                        field.onChange(e.target.value.toUpperCase())
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="peso"
                  control={methodsUsuario.control}
                  defaultValue={0.0}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      {...field}
                      label="Peso"
                      variant="outlined"
                      type="number"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="estatura"
                  control={methodsUsuario.control}
                  defaultValue={0.0}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      {...field}
                      label="Estatura"
                      variant="outlined"
                      type="number"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="correo"
                  control={methodsUsuario.control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      {...field}
                      label="Correo"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="username"
                  control={methodsUsuario.control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      {...field}
                      label="Nombre de usuario"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="entrenador_id"
                  control={methodsUsuario.control}
                  render={({ field }) => (
                    <TextField
                      select
                      fullWidth
                      {...field}
                      label="Entrenador"
                      variant="outlined"
                    >
                      {entrenadores.map((entrenador) => (
                        <MenuItem key={entrenador.id} value={entrenador.id}>
                          {entrenador.usuario.nombre} {entrenador.usuario.apellido}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="especialidad"
                  control={methodsUsuario.control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      {...field}
                      label="Especialidad"
                      variant="outlined"
                      onChange={(e) =>
                        field.onChange(e.target.value.toUpperCase())
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="estado"
                  control={methodsUsuario.control}
                  render={({ field }) => (
                    <TextField
                      select
                      fullWidth
                      {...field}
                      label="Estado"
                      variant="outlined"
                    >
                      <MenuItem value={"true"}>Activo</MenuItem>
                      <MenuItem value={"false"}>Inactivo</MenuItem>
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
                    type="submit"
                    variant="contained"
                    color="warning"
                    fullWidth
                  >
                    Actualizar
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    type="button"
                    onClick={handleCloseModalInfo}
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

export default ModalInfoUsuario;
