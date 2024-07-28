
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
          <button className="bg-red-700 text-xs text-white font-bold py-1 px-4 rounded-full hover:bg-red-900">
            Iniciar sesión
          </button>
        </div>
      </div>
      <div className="w-full bg-gray-700 flex justify-between px-4 py-2">
        <Link to="/" className="text-white text-xl hover:text-gray-300">
          <IoMdHome  />
        </Link>
        <div className="flex space-x-4">
          <Link to="/planes" className="text-white hover:text-gray-300">
            Planes
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
