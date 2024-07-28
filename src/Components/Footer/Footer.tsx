
import logo from "../../global/assets/logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <span className="text-xl font-extrabold">
            Más Fitness
          </span>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaFacebookF size="1.5em" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaInstagram size="1.5em" />
          </a>
        </div>
      </div>
      <div className="mt-4 text-center text-gray-500 text-sm">
        © 2024 Más Fitness. Todos los derechos reservados.
      </div>
    </div>
  );
};

export default Footer;
