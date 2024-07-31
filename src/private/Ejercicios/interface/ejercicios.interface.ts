export interface Ejercicio {
  nombre: string;
  descripcion: string;
  foto: string;
  id: number;
}

export interface EjercicioCreate {
  nombre: string;
  descripcion: string;
  foto: string;
}

export interface EjercicioUpdate {
  nombre: string;
  descripcion: string;
  foto: string;
}