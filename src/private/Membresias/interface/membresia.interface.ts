export interface Membresia {
  id: number;
  estado: boolean;
  duracion: number;
  costo: string;
  descripcion: string;
  nombre: string;
}

export interface MembresiaCreate {
  estado: boolean;
  duracion: number;
  costo: string;
  descripcion: string;
  nombre: string;
}

export interface MembresiaUpdate {
  estado: boolean;
  duracion: number;
  costo: string;
  descripcion: string;
  nombre: string;
}
