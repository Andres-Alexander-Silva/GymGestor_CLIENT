import { IoPeopleCircle } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    <div
      style={{ backgroundColor: "#D9D9D9" }}
      className="fixed top-16 left-0 h-screen w-64 text-black p-4"
    >
      <ul className="space-y-4 mt-6">
        <li>
          <Link to="/inicio" className="block p-2 hover:bg-orange-200 rounded">
            <div className="flex">
              <FaHome className="text-2xl mr-4 mt-0.5" />
              <Typography
                variant="h6"
                component="h2"
                align="left"
                fontWeight={"bold"}
              >
                INICIO
              </Typography>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/inicio/usuarios"
            className="block p-2 hover:bg-orange-200 rounded"
          >
            <div className="flex">
              <IoPeopleCircle className="text-2xl mr-4 mt-0.5" />
              <Typography
                variant="h6"
                component="h2"
                align="left"
                fontWeight={"bold"}
              >
                USUARIOS
              </Typography>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/inicio/membresias"
            className="block p-2 hover:bg-orange-200 rounded"
          >
            <div className="flex">
              <FaAddressCard className="text-2xl mr-4 mt-0.5" />
              <Typography
                variant="h6"
                component="h2"
                align="left"
                fontWeight={"bold"}
              >
                MEMBRESIAS
              </Typography>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;
