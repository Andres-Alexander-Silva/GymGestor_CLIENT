export interface LoginForm {
  username: string;
  password: string;
}

export interface ChangePasswordForm {
  token: string;
  new_password: string;
}

export interface User {
  username: string;
  nombres: string;
  apellidos: string;
  rol_id: number;
  rol_name: string;
}

export interface LoginResponse {
  response: LoginResponse;
  token: string;
  message: string;
  status: number;
}
