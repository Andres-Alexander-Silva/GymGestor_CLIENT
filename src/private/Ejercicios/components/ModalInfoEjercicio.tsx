import {
  Modal,
  Fade,
  TextField,
  Button,
  Box,
  Backdrop,
  Typography,
  Grid,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useStylesModal } from "../../../utils/modal/useStyleModal";
import { useContext, useEffect } from "react";
import ModalLoader from "../../../global/components/ModalLoader";
import { EjercicioUpdate } from "../interface/ejercicios.interface";
import { EjerciciosContext } from "../context/EjerciciosContext";

const ModalInfoEjercicio = () => {
  const {
    loading,
    openModalInfo,
    handleCloseModalInfo,
    updateEjercicio,
    currentEjercicio,
  } = useContext(EjerciciosContext);
  const methodsRutinas = useForm<EjercicioUpdate>();
  const style = useStylesModal();

  useEffect(() => {
    if (currentEjercicio.id) {
      methodsRutinas.setValue("nombre", currentEjercicio.nombre);
      methodsRutinas.setValue("descripcion", currentEjercicio.descripcion);
    }
  }, [currentEjercicio]);

  const onSubmit = (data: EjercicioUpdate) => {
    const formData = {
        ...data,
        foto: "",
      };
    updateEjercicio(currentEjercicio.id, formData);
    methodsRutinas.reset();
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
            Actualizar Rutina
          </Typography>
          <form onSubmit={methodsRutinas.handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="nombre"
                  control={methodsRutinas.control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Nombre"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="descripcion"
                  control={methodsRutinas.control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Descripción"
                      variant="outlined"
                      fullWidth
                    />
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

export default ModalInfoEjercicio;
