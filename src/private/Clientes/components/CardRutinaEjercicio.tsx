import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { Rutina } from "../interface/clientes.interface";
import Ejercicio from "../../../global/assets/ejercicio.jpeg";

interface CardRutinaEjercicioProps {
  rutina: Rutina;
}

const CardRutinaEjercicio = ({ rutina }: CardRutinaEjercicioProps) => {
  return (
    <Card variant="outlined" className="mb-4">
      <CardContent className="w-full">
        <Typography variant="h5" component="div">
          {rutina.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {rutina.descripcion}
        </Typography>
        <div className="mt-4">
          {rutina.ejercicios.map((ejercicio) => (
            <Card key={ejercicio.id} className="mb-2">
              <div className="relative">
                <img
                  src={Ejercicio}
                  alt={ejercicio.nombre}
                  className="w-full h-40 object-cover"
                />
              </div>
              <CardContent>
                <Typography variant="h6" component="div">
                  {ejercicio.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {ejercicio.descripcion}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardRutinaEjercicio;
