import axios from "axios";
import Cookies from "universal-cookie";

export const gymApi = axios.create({
  baseURL: import.meta.env.VITE_API_BACKEND_URL,
});

gymApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      redirectToLogin();
      clearAuthToken();
    }
    return Promise.reject(error);
  }
);

function redirectToLogin() {
  window.location.href = "/login";
}

function clearAuthToken() {
  const cookies = new Cookies();
  cookies.remove("token");
}
