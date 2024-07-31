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
import { MembresiasContext } from "../context/MembresiasContext";
import { MembresiaCreate } from "../interface/membresia.interface";

const ModalCreateMembresia = () => {
  const { loading, openModalCreate, handleCloseModalCreate, createMembresia } =
    useContext(MembresiasContext);
  const style = useStylesModal();
  const methodsMembresias = useForm<MembresiaCreate>();

  const onSubmit = (data: any) => {
    data.estado = data.estado === "true" ? true : false;
    console.log(data);
    createMembresia(data);
    methodsMembresias.reset();
    handleCloseModalCreate();
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
        <Box sx={style}>
          <Typography
            variant="h6"
            component="h2"
            align="center"
            fontWeight={"bold"}
            fontSize={23}
            sx={{ mb: 2 }}
          >
            Crear Membresias
          </Typography>
          <form onSubmit={methodsMembresias.handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Controller
                  name="nombre"
                  control={methodsMembresias.control}
                  defaultValue=""
                  rules={{ required: "Campo requerido" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Nombre"
                      error={!!methodsMembresias?.formState?.errors?.nombre}
                      helperText={
                        methodsMembresias?.formState?.errors?.nombre
                          ? methodsMembresias?.formState?.errors?.nombre.message
                          : null
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="descripcion"
                  control={methodsMembresias.control}
                  defaultValue=""
                  rules={{ required: "Campo requerido" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Descripcion"
                      error={
                        !!methodsMembresias?.formState?.errors?.descripcion
                      }
                      helperText={
                        methodsMembresias?.formState?.errors?.descripcion
                          ? methodsMembresias?.formState?.errors?.descripcion
                              .message
                          : null
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="costo"
                  control={methodsMembresias.control}
                  defaultValue=""
                  rules={{ required: "Campo requerido" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Precio"
                      error={!!methodsMembresias?.formState?.errors?.costo}
                      helperText={
                        methodsMembresias?.formState?.errors?.costo
                          ? methodsMembresias?.formState?.errors?.costo.message
                          : null
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="duracion"
                  control={methodsMembresias.control}
                  defaultValue={0}
                  rules={{ required: "Campo requerido" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Duracion"
                      error={!!methodsMembresias?.formState?.errors?.duracion}
                      helperText={
                        methodsMembresias.formState.errors.duracion
                          ? methodsMembresias.formState.errors.duracion.message
                          : null
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="estado"
                  control={methodsMembresias.control}
                  defaultValue={true}
                  rules={{ required: "Campo requerido" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      fullWidth
                      label="Estado"
                      error={!!methodsMembresias?.formState?.errors?.estado}
                      helperText={
                        methodsMembresias?.formState?.errors?.estado
                          ? methodsMembresias?.formState?.errors?.estado.message
                          : null
                      }
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

export default ModalCreateMembresia;
