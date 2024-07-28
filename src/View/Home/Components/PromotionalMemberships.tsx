

const PromotionalMemberships = () => {
  return (
    <div className="p-4 bg-gray-100 mt-8 shadow-md rounded-lg">
      <h2 className="text-center text-lg font-bold text-red-600">
        Membresía promocional
      </h2>
      <div className="flex justify-between items-center mt-4">
        <div className="w-1/2">
          <h3 className="text-yellow-500 font-semibold">
            Membresía Universitaria
          </h3>
          <ul className="mt-2 text-gray-700">
            <li className="flex justify-between">
              Membresía Básica{" "}
              <span className="text-red-600 font-bold">50.000</span>{" "}
              <span className="text-green-600 font-bold">35.000</span>
            </li>
            <li className="flex justify-between">
              Membresía FIT{" "}
              <span className="text-red-600 font-bold">70.000</span>{" "}
              <span className="text-green-600 font-bold">50.000</span>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            *Para acceder a la membresía universitaria debe presentar un
            comprobante que demuestre su matriculación en alguna entidad
            universitaria junto a su documento de identidad.
          </p>
        </div>
        <div className="w-1/2 text-center">
          <h3 className="text-gray-700 font-semibold">Precios Regulares</h3>
          <ul className="mt-2 text-gray-700">
            <li>
              Mes: <span className="text-red-600 font-bold">70.000</span>
            </li>
            <li>
              15 días: <span className="text-red-600 font-bold">45.000</span>
            </li>
            <li>
              Semana: <span className="text-red-600 font-bold">33.000</span>
            </li>
            <li>
              Día: <span className="text-red-600 font-bold">7.000</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PromotionalMemberships;
