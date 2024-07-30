import { Card } from "@mui/material";

interface CardMembresiaProps {
  nombre: string;
  descripcion: string;
  duracion: string;
  costo: string;
}

const CardMembresia = ({
  nombre,
  descripcion,
  duracion,
  costo,
}: CardMembresiaProps) => {
  return (
    <Card sx={{
        width: { xs: "100%", sm: 300},
        backgroundColor: "#FFF",
        borderRadius: "1rem",
        boxShadow: "0 0 1rem rgba(0, 0, 0, 0.2)",
        mt: 4,
        p: "2rem"
    }} className="rounded-lg shadow-lg">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-orange-500">{nombre}</h3>
        <p className="text-muted-foreground">
          {descripcion}
        </p>
        <div className="flex items-end gap-2">
          <span className="text-4xl font-bold">${costo}</span>
          <span className="text-muted-foreground text-sm">/mes</span>
        </div>
        <div className="text-muted-foreground">
          <p>Duración: {duracion}</p>
        </div>
      </div>
    </Card>
  );
};

export default CardMembresia;
