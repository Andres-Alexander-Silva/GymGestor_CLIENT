import Cookies from "universal-cookie";

const cookies = new Cookies();

export const addAuthorizationHeader = (requestConfig: any, token: string) => {
  return {
    ...requestConfig,
    headers: {
      ...requestConfig.headers,
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getToken = cookies.get("token");