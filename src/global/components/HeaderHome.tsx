import { Button } from "@mui/material";
import logo from "../../global/assets/logo.png";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";

const HeaderHome = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-orange-500 z-50">
      <div className="bg-orange-500 flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <span className="text-white text-xl  sm:text-3xl font-extrabold">
            Más Fitness
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login" style={{ textDecoration: "none"}}>
            <Button
              sx={{
                backgroundColor: "#e11d48",
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
            >
              Iniciar sesión
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full bg-gray-700 flex justify-between px-4 py-2">
        <Link to="/" className="text-white text-xl hover:text-gray-300">
          <IoMdHome />
        </Link>
        <div className="flex space-x-4">
          <Link to="/membresias" className="text-white hover:text-gray-300">
            Membresias
          </Link>
          <Link to="/quienes-somos" className="text-white hover:text-gray-300">
            Quienes somos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
