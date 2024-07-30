import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { useStylesModal } from "../../../utils/modal/useStyleModal";
import { Controller, useForm } from "react-hook-form";
import ModalLoader from "../../../global/components/ModalLoader";
import { ChangePasswordForm } from "../interface/login.interface";
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const ModalChangePassword = () => {
  const {
    loading,
    isSendMail,
    sendMailToken,
    changePassword,
    openModalChangePassword,
    handleCloseModalChangePassword,
  } = useContext(LoginContext);
  const style = useStylesModal();
  const methodsChangePassword = useForm<ChangePasswordForm>();
  const methodsSendMail = useForm();

  if (loading) {
    return <ModalLoader />;
  }

  const onSendMail = (data: any) => {
    sendMailToken(data.email);
  };

  const onChangePassword = (data: ChangePasswordForm) => {
    console.log(data);
    changePassword(data);
  };

  return (
    <Modal
      open={openModalChangePassword}
      onClose={handleCloseModalChangePassword}
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
      <Fade in={openModalChangePassword}>
        <Box sx={style}>
          <Typography
            variant="h4"
            id="modal-modal-title"
            color={"#ff570d"}
            align="center"
            mb={2}
          >
            Recuperación de Contraseña
          </Typography>
          <Typography
            variant="h6"
            id="modal-modal-title"
            color={"#000000"}
            align="center"
            mb={2}
            fontSize={16}
          >
            Por favor digite su correo electronico, le enviaremos un token de
            verificacion
          </Typography>
          <form onSubmit={methodsSendMail.handleSubmit(onSendMail)}>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Controller
                  name="email"
                  control={methodsSendMail.control}
                  rules={{
                    required: "El correo es requerido",
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "Correo no válido",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Correo Electrónico"
                      variant="outlined"
                      type="email"
                      error={fieldState.invalid}
                      helperText={fieldState.error?.message}
                      fullWidth
                    />
                  )}
                />
                <Button
                  variant="contained"
                  color="warning"
                  type="submit"
                  sx={{ ml: 2 }}
                >
                  Enviar Token
                </Button>
              </Box>
            </Stack>
          </form>
          {isSendMail && (
            <form
              onSubmit={methodsChangePassword.handleSubmit(onChangePassword)}
              style={{ marginTop: "1rem" }}
            >
              <Controller
                name="token"
                control={methodsChangePassword.control}
                rules={{ required: "El token es requerido" }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Token"
                    variant="outlined"
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    fullWidth
                    sx={{
                      mb: 2,
                    }}
                  />
                )}
              />
              <Controller
                name="new_password"
                control={methodsChangePassword.control}
                rules={{ required: "La nueva contraseña es requerida" }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Nueva Contraseña"
                    type="password"
                    variant="outlined"
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    fullWidth
                  />
                )}
              />
              <Button
                variant="contained"
                color="warning"
                type="submit"
                sx={{ mt: 2 }}
              >
                Cambiar
              </Button>
            </form>
          )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalChangePassword;
