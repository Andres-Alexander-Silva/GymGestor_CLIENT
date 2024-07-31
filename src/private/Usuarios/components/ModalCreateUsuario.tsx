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
import { useContext, useState } from "react";
import { UsuariosContext } from "../context/UsuariosContext";
import ModalLoader from "../../../global/components/ModalLoader";
import { UsuarioCreate } from "../interface/usuarios.interfaces";

const ModalCreateUsuario = () => {
  const {
    loading,
    roles,
    membresias,
    entrenadores,
    openModalCreate,
    handleCloseModalCreate,
    createUsuario,
  } = useContext(UsuariosContext);
  const [rol, setRol] = useState("");
  const methodsUsuario = useForm<UsuarioCreate>()

  const styles = useStylesModal2();

  const onSubmitForm = (data: any) => {
    data.rol_id = parseInt(rol);
    console.log(data);
    createUsuario(data);
    methodsUsuario.reset();
  };

  if (loading) return <ModalLoader />;

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
          <form onSubmit={methodsUsuario.handleSubmit(onSubmitForm)}>
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
                      error={!!methodsUsuario?.formState?.errors?.cedula}
                      helperText={
                        methodsUsuario?.formState?.errors?.cedula
                          ? methodsUsuario?.formState?.errors?.cedula.message
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
                      error={!!methodsUsuario?.formState?.errors?.nombre}
                      helperText={
                        methodsUsuario?.formState?.errors?.nombre
                          ? methodsUsuario?.formState?.errors?.nombre.message
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
                      error={!!methodsUsuario?.formState?.errors?.apellido}
                      helperText={
                        methodsUsuario?.formState?.errors?.apellido
                          ? methodsUsuario?.formState?.errors?.apellido.message
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
                      error={!!methodsUsuario?.formState?.errors?.username}
                      helperText={
                        methodsUsuario?.formState?.errors?.username
                          ? methodsUsuario?.formState?.errors?.username.message
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
                      error={!!methodsUsuario?.formState?.errors?.password}
                      helperText={
                        methodsUsuario?.formState?.errors?.password
                          ? methodsUsuario?.formState?.errors?.password.message
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
                      error={!!methodsUsuario?.formState?.errors?.telefono}
                      helperText={
                        methodsUsuario?.formState?.errors?.telefono
                          ? methodsUsuario?.formState?.errors?.telefono.message
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
                      error={!!methodsUsuario?.formState?.errors?.correo}
                      helperText={
                        methodsUsuario?.formState?.errors?.correo
                          ? methodsUsuario?.formState?.errors?.correo.message
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
                  defaultValue={0.0}
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
                      error={!!methodsUsuario?.formState?.errors?.peso}
                      helperText={
                        methodsUsuario?.formState?.errors?.peso
                          ? methodsUsuario?.formState?.errors?.peso.message
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
                  defaultValue={0.0}
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
                      error={!!methodsUsuario?.formState?.errors?.estatura}
                      helperText={
                        methodsUsuario?.formState?.errors?.estatura
                          ? methodsUsuario?.formState?.errors?.estatura.message
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
                      error={!!methodsUsuario?.formState?.errors?.direccion}
                      helperText={
                        methodsUsuario?.formState?.errors?.direccion
                          ? methodsUsuario?.formState?.errors?.direccion.message
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
                  defaultValue={0}
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
                      value={rol}
                      error={!!methodsUsuario?.formState?.errors?.rol_id}
                      onChange={(e) => setRol(e.target.value)}
                      helperText={
                        methodsUsuario?.formState?.errors?.rol_id
                          ? methodsUsuario?.formState?.errors?.rol_id.message
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
                  defaultValue={0}
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
                      error={!!methodsUsuario?.formState?.errors?.entrenador_id}
                      helperText={
                        methodsUsuario?.formState?.errors?.entrenador_id
                          ? methodsUsuario?.formState?.errors?.entrenador_id.message
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
                  defaultValue={0}
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
                      error={!!methodsUsuario?.formState?.errors?.membresia_id}
                      helperText={
                        methodsUsuario?.formState?.errors?.membresia_id
                          ? methodsUsuario?.formState?.errors?.membresia_id.message
                          : null
                      }
                    >
                      <MenuItem value={0}>NINGUNA</MenuItem>
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
