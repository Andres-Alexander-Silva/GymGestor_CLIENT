import HeaderHome from "../../../global/components/HeaderHome";
import Footer from "../../../global/components/Footer";
import { FormLogin, ModalChangePassword, ModalCookies } from "../components";
import { Card, Typography } from "@mui/material";
import LogoGym from "../../../global/assets/logo.png";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderHome />
      <ModalCookies />
      <main className="flex-grow">
        <section className="max-w-screen-xl mx-auto md:px-8 justify-center flex">
          <Card
            sx={{
              width: "30%",
              p: "1rem",
              boxShadow: "2px 2px 10px 5px rgba(0, 0, 0, 0.1)",
              mt: "14%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={LogoGym}
              alt="Logo GymGestor"
              style={{
                width: "45%",
                height: "auto",
              }}
            />
            <Typography
              variant="h6"
              component="h2"
              align="center"
              sx={{ mb: 2 }}
            >
              Bienvenido, Inicia Sesion
            </Typography>
            <FormLogin />
            <ModalChangePassword />
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
