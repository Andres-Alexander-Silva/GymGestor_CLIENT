import { useState, useEffect } from "react";
import { Modal, Fade, Button, Box, Backdrop, Typography } from "@mui/material";

const useStyles = () => {
  return {
    position: "fixed",
    bottom: 20,
    left: 350,
    right: 0,
    width: "50%",
    bgcolor: "#FFFFFF",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };
};

const ModalCookies = () => {
  const [open, setOpen] = useState(false);
  const styles = useStyles();

  const handleOpen = () => {
    localStorage.getItem("cookiesAccepted") == "true" ? setOpen(false) : setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("cookiesAccepted", "true");
  };

  useEffect(() => {
    handleOpen();
  }, []);

  return (
    <Modal
      open={open}
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
      <Fade in={open}>
        <Box sx={styles}>
          <Typography variant="h2" id="modal-modal-title" sx={{ color: "#000"}}>
            Política de Cookies
          </Typography>
          <Typography variant="body1" id="modal-modal-description" sx={{ color: "#000"}}>
            Utilizamos cookies para asegurarnos de brindarte la mejor
            experiencia en nuestro sitio web. Al continuar utilizando este
            sitio, estás de acuerdo con nuestro uso de cookies. Puedes revisar
            nuestra Política de Cookies para obtener más información.
          </Typography>
          <Button
            onClick={handleClose}
            variant="contained"
            color="warning"
            sx={{
              mt: 2,
            }}
          >
            Aceptar
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalCookies;