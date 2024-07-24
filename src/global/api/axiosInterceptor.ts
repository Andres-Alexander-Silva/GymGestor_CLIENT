import Cookies from "universal-cookie";
import { gymApi } from "./gymApi";

const addAuthorizationHeader = (config: any) => {
  const cookies = new Cookies();
  const token = cookies.get("token");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
};

const handleUnauthorizedError = (error: any) => {
  if (error.response && error.response.status === 401) {
    redirectToLogin();
    clearAuthToken();
  }
  return Promise.reject(error);
};

gymApi.interceptors.request.use(addAuthorizationHeader, (error) =>
  Promise.reject(error)
);
gymApi.interceptors.response.use(
  (response) => response,
  handleUnauthorizedError
);

function redirectToLogin() {
  window.location.href = "/login";
}

function clearAuthToken() {
  const cookies = new Cookies();
  cookies.remove("token");
}