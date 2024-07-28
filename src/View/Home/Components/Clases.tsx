import { IoMdTime } from "react-icons/io";
import { IoBatteryChargingOutline } from "react-icons/io5"
type Clase = {
  nombre: string;
  imagen: string;
  duracion: string;
  intensidad: string;
  descripcion: string;
};

const clases: Clase[] = [
  {
    nombre: "Rumba",
    imagen: "https://decanaturadeestudiantes.uniandes.edu.co/sites/default/files/Banners/rumba-aerobica-640x480.jpg", 
    duracion: "45 min",
    intensidad: "Alta",
    descripcion:
      "Clase grupal que combina diferentes ritmos musicales con el fin de mejorar la coordinación y la expresión corporal. Fortalece el trabajo cardiovascular y ayuda a reducir el porcentaje de grasa.",
  },
  {
    nombre: "Combat",
    imagen: "https://cabtfe.es/wp-content/uploads/2021/12/Body-Combat.jpg", 
    duracion: "30/45 min",
    intensidad: "Alta",
    descripcion:
      "Clase grupal donde combinas movimientos y golpes de artes marciales, ayuda a la quema de grasa, quita el estrés y te da energía.",
  },
  {
    nombre: "Funcional",
    imagen: "https://static.wixstatic.com/media/0df7eb_dc2f02c21f694b21ae7c35ba2693e1ce~mv2.jpg/v1/fill/w_640,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0df7eb_dc2f02c21f694b21ae7c35ba2693e1ce~mv2.jpg",
    duracion: "30/45 min",
    intensidad: "Alta",
    descripcion:
      "Clase grupal donde encontraremos variedad de ejercicios que fortalecen todo tu cuerpo, tonificación, aumentando tu resistencia y quema de grasa.",
  },
  {
    nombre: "Cycling",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ36IjgptW_9FXqZz5zH9AQVI-8pIiV1llyw&s",
    duracion: "45 min",
    intensidad: "Alta",
    descripcion:
      "Entrenamiento cardiovascular y aeróbico que se realiza en bicicleta estática al ritmo de la música, te ayuda a mejorar la resistencia y quema de grasa.",
  },
];

const Clases = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-14">
      <h2 className="text-center text-2xl font-bold text-red-600 mt-9 mb-8">
        Conoce nuestras clases exclusivas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {clases.map((clase, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={clase.imagen}
              alt={clase.nombre}
              className="w-full h-48 object-cover"
            />
            <div className="bg-yellow-500 p-3 text-lg  text-center">
                <h3 className="font-bold">
                  {clase.nombre}
                </h3>
              </div>
            <div className="p-4">
              

              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <span className="text-gray-600 font-semibold"><IoMdTime /></span>
                  <span className="ml-2 text-gray-700"> {clase.duracion}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 font-semibold">
                  <IoBatteryChargingOutline />
                  </span>
                  <span className="ml-2 text-gray-700">{clase.intensidad}</span>
                </div>
              </div>
              <p className="mt-4 text-gray-700 text-sm">{clase.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clases;
