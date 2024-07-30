import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LoginForm } from "../interface/login.interface";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import useShowPassword from "../../../hooks/useShowPassword";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const FormLogin = () => {
  const { loading, handleOpenModalChangePassword, login } =
    useContext(LoginContext);
  const { handleClickShowPassword, showPassword, handleMouseDownPassword } =
    useShowPassword();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log(data);
    login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <Controller
          control={control}
          name="username"
          rules={{ required: true }}
          defaultValue=""
          render={({ field }) => (
            <TextField
              fullWidth
              {...field}
              type="text"
              label="Nombre de usuario"
              error={!!errors.username}
              helperText={errors.username ? "Campo requerido" : null}
              autoComplete="new-password"
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{ required: true }}
          defaultValue=""
          render={({ field }) => (
            <TextField
              fullWidth
              {...field}
              type={showPassword ? "text" : "password"}
              label="Contraseña"
              error={!!errors.password}
              helperText={errors.password ? "Campo requerido" : null}
              autoComplete="new-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <FiEye /> : <FiEyeOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Typography
          variant="body2"
          color="#ff570d"
          onClick={handleOpenModalChangePassword}
          sx={{ cursor: "pointer" }}
        >
          ¿Olvidaste tu contraseña?
        </Typography>
        <Button
          sx={{ mt: 3 }}
          color="warning"
          fullWidth
          size="large"
          variant="contained"
          type="submit"
          disabled={loading}
        >
          Iniciar sesión
        </Button>
      </Stack>
    </form>
  );
};

export default FormLogin;
