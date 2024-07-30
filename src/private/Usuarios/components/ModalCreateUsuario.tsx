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
import { Controller } from "react-hook-form";
import { useStylesModal2 } from "../../../utils/modal/useStyleModal";
import { useContext, useState } from "react";
import { UsuariosContext } from "../context/UsuariosContext";
import ModalLoader from "../../../global/components/ModalLoader";

const ModalCreateUsuario = () => {
  const {
    loading,
    roles,
    membresias,
    entrenadores,
    openModalCreate,
    handleCloseModalCreate,
    createUsuario,
    methodsUsuario,
  } = useContext(UsuariosContext);
  const [rol, setRol] = useState("");

  const styles = useStylesModal2();

  const onSubmit = (data: any) => {
    console.log(data);
    //createUsuario(data);
  };

  return (
    <Modal
      open={openModalCreate}
      onClose={handleCloseModalCreate}
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
      <Fade in={openModalCreate}>
        <Box sx={styles}>
          <Typography
            variant="h6"
            component="h2"
            align="center"
            fontWeight={"bold"}
            fontSize={23}
            sx={{ mb: 2 }}
          >
            Crear Usuario
          </Typography>
          <form onSubmit={methodsUsuario.handleSubmit(onSubmit)}>
            <Grid container rowSpacing={2} columnSpacing={2}>
              <Grid item xs={4}>
                <Controller
                  name="cedula"
                  control={methodsUsuario.control}
                  defaultValue={""}
                  rules={{
                    required: "Campo requerido",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Debe contener solo números",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Cédula"
                      variant="outlined"
                      fullWidth
                      required
                      error={!!methodsUsuario?.errors?.cedula}
                      helperText={
                        methodsUsuario?.errors?.cedula
                          ? methodsUsuario.errors.cedula.message
                          : null
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Controller
                  name="nombre"
                  control={methodsUsuario.control}
                  defaultValue={""}
                  rules={{
                    required: "Campo requerido",
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Nombre"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) =>
                        field.onChange(e.target.value.toUpperCase())
                      }
                      error={!!methodsUsuario?.errors?.nombre}
                      helperText={
                        methodsUsuario?.errors?.nombre
                          ? methodsUsuario.errors.nombre.message
                          : null
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Controller
                  name="apellido"
                  control={methodsUsuario.control}
                  defaultValue={""}
                  rules={{
                    required: "Campo requerido",
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Apellido"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) =>
                        field.onChange(e.target.value.toUpperCase())
                      }
                      error={!!methodsUsuario?.errors?.apellido}
                      helperText={
                        methodsUsuario?.errors?.apellido
                          ? methodsUsuario.errors.apellido.message
                          : null
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Controller
                  name="username"
                  control={methodsUsuario.control}
                  defaultValue={""}
                  rules={{
                    required: "Campo requerido",
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Nombre de Usuario"
                      variant="outlined"
                      fullWidth
                      required
                      error={!!methodsUsuario?.errors?.username}
                      helperText={
                        methodsUsuario?.errors?.username
                          ? methodsUsuario.errors.username.message
                          : null
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Controller
                  name="password"
                  control={methodsUsuario.control}
                  defaultValue={""}
                  rules={{
                    required: "Campo requerido",
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Contraseña"
                      variant="outlined"
                      fullWidth
                      required
                      error={!!methodsUsuario?.errors?.password}
                      helperText={
                        methodsUsuario?.errors?.password
                          ? methodsUsuario.errors.password.message
                          : null
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Controller
                  name="telefono"
                  control={methodsUsuario.control}
                  defaultValue={""}
                  rules={{
                    required: "Campo requerido",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Debe contener solo números",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Teléfono"
                      variant="outlined"
                      fullWidth
                      required
                      error={!!methodsUsuario?.errors?.telefono}
                      helperText={
                        methodsUsuario?.errors?.telefono
                          ? methodsUsuario.errors.telefono.message
                          : null
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Controller
                  name="correo"
                  control={methodsUsuario.control}
                  defaultValue={""}
                  rules={{
                    required: "Campo requerido",
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "Correo no válido",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Correo Electrónico"
                      variant="outlined"
                      fullWidth
                      required
                      error={!!methodsUsuario?.errors?.email}
                      helperText={
                        methodsUsuario?.errors?.email
                          ? methodsUsuario.errors.email.message
                          : null
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Controller
                  name="peso"
                  control={methodsUsuario.control}
                  defaultValue={""}
                  rules={{
                    required: "Campo requerido",
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Peso"
                      variant="outlined"
                      type="number"
                      fullWidth
                      required
                      error={!!methodsUsuario?.errors?.peso}
                      helperText={
                        methodsUsuario?.errors?.peso
                          ? methodsUsuario.errors.peso.message
                          : null
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Controller
                  name="estatura"
                  control={methodsUsuario.control}
                  defaultValue={""}
                  rules={{
                    required: "Campo requerido",
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Estatura"
                      variant="outlined"
                      type="number"
                      fullWidth
                      required
                      error={!!methodsUsuario?.errors?.estatura}
                      helperText={
                        methodsUsuario?.errors?.estatura
                          ? methodsUsuario.errors.estatura.message
                          : null
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Controller
                  name="direccion"
                  control={methodsUsuario.control}
                  defaultValue={""}
                  rules={{
                    required: "Campo requerido",
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Dirección"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) =>
                        field.onChange(e.target.value.toUpperCase())
                      }
                      error={!!methodsUsuario?.errors?.direccion}
                      helperText={
                        methodsUsuario?.errors?.direccion
                          ? methodsUsuario.errors.direccion.message
                          : null
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Controller
                  name="rol_id"
                  control={methodsUsuario.control}
                  defaultValue={""}
                  rules={{
                    required: "Campo requerido",
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      label="Rol"
                      variant="outlined"
                      fullWidth
                      required
                      error={!!methodsUsuario?.errors?.rol}
                      onChange={(e) => setRol(e.target.value)}
                      helperText={
                        methodsUsuario?.errors?.rol
                          ? methodsUsuario.errors.rol.message
                          : null
                      }
                    >
                      {roles.map((rol) => (
                        <MenuItem key={rol.id} value={rol.id}>
                          {rol.nombre}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid>
              {rol === "3" && (
                <>
                  <Grid item xs={4}>
                    <Controller
                      name="especialidad"
                      control={methodsUsuario.control}
                      defaultValue={""}
                      rules={{
                        required: "Campo requerido",
                      }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Especialidad"
                          variant="outlined"
                          fullWidth
                          required
                          onChange={(e) =>
                            field.onChange(e.target.value.toUpperCase())
                          }
                          error={!!methodsUsuario?.errors?.especialidad}
                          helperText={
                            methodsUsuario?.errors?.especialidad
                              ? methodsUsuario.errors.especialidad.message
                              : null
                          }
                        />
                      )}
                    />
                  </Grid>
                </>
              )}
              <Grid item xs={4}>
                <Controller
                  name="entrenador_id"
                  control={methodsUsuario.control}
                  defaultValue={""}
                  rules={{
                    required: "Campo requerido",
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      label="Entrenador"
                      variant="outlined"
                      fullWidth
                      required
                      error={!!methodsUsuario?.errors?.entrenador}
                      helperText={
                        methodsUsuario?.errors?.entrenador
                          ? methodsUsuario.errors.entrenador.message
                          : null
                      }
                    >
                      {entrenadores.map((entrenador) => (
                        <MenuItem key={entrenador.id} value={entrenador.id}>
                          {entrenador.usuario.nombre}{" "}
                          {entrenador.usuario.apellido}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Controller
                  name="membresia_id"
                  control={methodsUsuario.control}
                  defaultValue={""}
                  rules={{
                    required: "Campo requerido",
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      label="Membresía"
                      variant="outlined"
                      fullWidth
                      required
                      error={!!methodsUsuario?.errors?.membresia}
                      helperText={
                        methodsUsuario?.errors?.membresia
                          ? methodsUsuario.errors.membresia.message
                          : null
                      }
                    >
                      {membresias.map((membresia) => (
                        <MenuItem key={membresia.id} value={membresia.id}>
                          {membresia.nombre}
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
                    mt: 3
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
                    onClick={handleCloseModalCreate}
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

export default ModalCreateUsuario;
