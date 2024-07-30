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
}

export interface UsuarioCreate {
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
  password: string;
  rol_id: number;
  membresia_id: number;
}

export interface UsuarioUpdate {
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
  password: string;
}

export interface Rol {
  id: number;
  nombre: string;
}

export interface Membresia {
  id: number;
  estado: boolean;
  duracion: number;
  costo: string;
  descripcion: string;
  nombre: string;
}

export interface Entrenador {
  id: number;
  especialidad: string;
  usuario_id: number;
  usuario: Usuario;
}