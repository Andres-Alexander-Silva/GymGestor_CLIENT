import { gymApi } from "../../../global/api/gymApi";
import { LoginForm, ChangePasswordForm } from "../interface/login.interface";

export const login = async (data: LoginForm) => {
  return gymApi.post("/login", data);
};

export const changePassword = async (data: ChangePasswordForm) => {
    return gymApi.post("/reset_password", data);
};

export const sendMailToken = async (email: string) => {
    return gymApi.post("/send_reset_password_email", { email });
}
