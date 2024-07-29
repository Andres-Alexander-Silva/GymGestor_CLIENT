
const QuienesSomos = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
      <div>
        <h2 className="text-2xl font-bold text-red-600">Misión</h2>
        <p className="mt-2 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, fermentum sed leo ullamcorper aptent faucibus dui bibendum, magna quisque blandit vivamus nisi vehicula.
        </p>
        <h2 className="text-2xl font-bold text-red-600 mt-8">Visión</h2>
        <p className="mt-2 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, fermentum sed leo ullamcorper aptent faucibus dui bibendum, magna quisque blandit vivamus nisi vehicula.
        </p>
        <h2 className="text-2xl font-bold text-yellow-500 mt-8">Información de contacto</h2>
        <p className="mt-2 text-gray-700">
          <span className="font-bold">Administrador:</span> Anderson Sadat Martinez Gimenez
          <br />
          <span className="font-bold">Número:</span> 3xx-xxx-xxxx
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-red-600">Ubicación:</h2>
        <p className="mt-2 text-gray-700">
          Av. 9 #7-2 a 7-138, Cúcuta, Norte de Santander
        </p>
        <div className="mt-4">
          <img src="/path-to-your-map-image.jpg" alt="Mapa de ubicación" className="w-full rounded-lg shadow-md" />
        </div>
      </div>
      <div className="mt-8 text-gray-700 italic text-center md:col-span-2">
        "El gimnasio Más Fitness abrió sus puertas desde el año 2019, con el fin de lorem ipsum dolor sit amet consectetur adipiscing elit, fermentum sed leo ullamcorper aptent faucibus dui bibendum, magna quisque blandit vivamus nisi vehicula".
      </div>
    </div>
  );
};

export default QuienesSomos;
