export interface Response {
  usuario: Usuario;
  membresia: Membresia;
}

export interface Usuario {
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

export interface Membresia {
  id: number;
  estado: boolean;
  duracion: number;
  costo: string;
  descripcion: string;
  nombre: string;
}

export interface AsignarRutinaCliente {
    rutina_id: number;
    ejercicio_id: number;
}