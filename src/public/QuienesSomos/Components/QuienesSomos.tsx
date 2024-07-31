import ubicacionGym from "../../../global/assets/ubicacionGym.png";

const QuienesSomos = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
      <div>
        <h2 className="text-2xl font-bold text-red-600">Misión</h2>
        <p className="mt-2 text-gray-700">
          Brindar el servicio profesional en el cuidado de la salud y calidad de
          vida de la comunidad a través de la práctica del ejercicio, con
          productos y servicios saludables que les permita desempeñarse mejor.
        </p>
        <h2 className="text-2xl font-bold text-red-600 mt-8">Visión</h2>
        <p className="mt-2 text-gray-700">
          Acompañar los sueños de sentirse mejor en su estado de salud física y
          desarrollo de autoestima de los usuarios, con un equipo eficaz y
          profesional de alto desempeño.
        </p>
        <h2 className="text-2xl font-bold text-yellow-500 mt-8">
          Información de contacto
        </h2>
        <p className="mt-2 text-gray-700">
          <span className="font-bold">Administrador:</span> Anderson Sadat
          Martinez Gimenez
          <br />
          <span className="font-bold">Número:</span> 322-302-1979
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-red-600">Ubicación:</h2>
        <p className="mt-2 text-gray-700">
          Av. 9 #7-2 a 7-138, Cúcuta, Norte de Santander
        </p>
        <div className="mt-4">
          <img
            src={ubicacionGym}
            alt="Mapa de ubicación"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="mt-8 text-gray-700 italic text-center md:col-span-2">
        "El gimnasio más fitness abrió sus puertas en 2019, con el fin de
        transformar vidas a través del deporte y la salud. Nuestro objetivo es
        proporcionar un espacio donde cada persona pueda alcanzar su máximo
        potencial físico y mental, rodeado de una comunidad de apoyo y
        motivación.".
      </div>
    </div>
  );
};

export default QuienesSomos;
