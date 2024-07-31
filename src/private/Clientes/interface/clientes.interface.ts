export interface RutinaEjercicio {
  rutina: Rutina;
}

export interface Rutina {
  id: number;
  nombre: string;
  descripcion: string;
  ejercicios: Ejercicio[];
}

export interface Ejercicio {
  id: number;
  nombre: string;
  descripcion: string;
  foto: string;
}

export interface MembresiaInfo {
  estado: string;
  fecha_fin: string;
  nombre: string;
  descripcion: string;
}

export interface ClienteInfo {
  cedula: string;
  nombre: string;
  apellido: string;
  username: string;
  telefono: string;
  foto: string;
  correo: string;
  peso: number;
  estatura: number;
  direccion: string;
  especialidad: string;
  entrenador_id: number;
  rol_id: number;
  estado: boolean;
}
