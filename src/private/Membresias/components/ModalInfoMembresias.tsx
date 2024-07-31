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
import { useContext, useEffect } from "react";
import ModalLoader from "../../../global/components/ModalLoader";
import { MembresiasContext } from "../context/MembresiasContext";
import { MembresiaUpdate } from "../interface/membresia.interface";

const ModalUpdateMembresia = () => {
  const {
    loading,
    openModalInfo,
    handleCloseModalInfo,
    updateMembresia,
    currentMembresia,
  } = useContext(MembresiasContext);
  const methodsMembresias = useForm<MembresiaUpdate>();
  const style = useStylesModal();

  useEffect(() => {
    if (currentMembresia.id) {
      methodsMembresias.setValue("nombre", currentMembresia.nombre);
      methodsMembresias.setValue("descripcion", currentMembresia.descripcion);
      methodsMembresias.setValue("costo", currentMembresia.costo);
      methodsMembresias.setValue("duracion", currentMembresia.duracion);
      methodsMembresias.setValue("estado", currentMembresia.estado);
    }
  }, [currentMembresia]);

  const onSubmit = (data: any) => {
    if (data.estado !== true) {
      data.estado = data.estado === "true" ? true : false;
    }
    console.log(data);
    updateMembresia(currentMembresia.id, data);
    methodsMembresias.reset();
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
        <Box sx={style}>
          <Typography
            variant="h6"
            component="h2"
            align="center"
            fontWeight={"bold"}
            fontSize={23}
            sx={{ mb: 2 }}
          >
            Actualizar Membresias
          </Typography>
          <form onSubmit={methodsMembresias.handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Controller
                  name="nombre"
                  control={methodsMembresias.control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Nombre"
                      fullWidth
                      variant="outlined"
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="descripcion"
                  control={methodsMembresias.control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Descripcion"
                      fullWidth
                      variant="outlined"
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="costo"
                  control={methodsMembresias.control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Costo"
                      fullWidth
                      variant="outlined"
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="duracion"
                  control={methodsMembresias.control}
                  defaultValue={0}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Duracion"
                      fullWidth
                      variant="outlined"
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="estado"
                  control={methodsMembresias.control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      label="Estado"
                      fullWidth
                      variant="outlined"
                      required
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

export default ModalUpdateMembresia;
