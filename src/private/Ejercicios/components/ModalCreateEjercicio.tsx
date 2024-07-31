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
import { useContext } from "react";
import ModalLoader from "../../../global/components/ModalLoader";
import { EjerciciosContext } from "../context/EjerciciosContext";
import { EjercicioCreate } from "../interface/ejercicios.interface";

const ModalCreateRutina = () => {
  const { loading, openModalCreate, handleCloseModalCreate, createEjercicio } =
    useContext(EjerciciosContext);
  const style = useStylesModal();
  const methodsRutinas = useForm<EjercicioCreate>();

  const onSubmit = (data: EjercicioCreate) => {
    const formData = {
      ...data,
      foto: "",
    };
    createEjercicio(formData);
    methodsRutinas.reset();
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
            Crear Rutina
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
                      fullWidth
                      variant="outlined"
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
                      fullWidth
                      variant="outlined"
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

export default ModalCreateRutina;
