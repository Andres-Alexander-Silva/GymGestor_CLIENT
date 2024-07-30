import { Button } from "@mui/material";
import logo from "../../global/assets/logo.png";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const HeaderHomePrivate = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleLogout = () => {
    Swal.fire({
      text: "¿Quieres cerrar sesión?",
      icon: "question",
      iconColor: "#00B3FF",
      animation: true,
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#ff570d",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("entra");
        cookies.remove("token", { path: "/" });
        navigate("/");
      }
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-orange-500 z-50">
      <div className="bg-orange-500 flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <span className="text-white text-xl sm:text-3xl font-extrabold">
            Más Fitness
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            sx={{
              backgroundColor: "#8b0a00",
              color: "#ffffff",
              fontSize: "0.75rem",
              fontWeight: "bold",
              paddingY: "0.25rem",
              paddingX: "1rem",
              borderRadius: "9999px",
              "&:hover": {
                backgroundColor: "#b91c1c",
              },
            }}
            onClick={handleLogout}
          >
            Cerrar sesión
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderHomePrivate;
