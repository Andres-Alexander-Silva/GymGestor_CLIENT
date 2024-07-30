import { Box, Modal, Typography } from "@mui/material";
import Loader from "./Loader";

const ModalLoader = () => {
  return (
    <Modal
      open={true}
      aria-labelledby="modal-loader"
      aria-describedby="loading-modal"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "rgba(255, 255, 255,0.9)",
        }}
      >
        <Loader />
        <Typography variant="h5" fontWeight={"bold"} id="modal-loader" color="#ff570d">
          Cargando...
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalLoader;