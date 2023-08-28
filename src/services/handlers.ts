import { AxiosRequestConfig } from "axios";

export const requestInterceptor = async (config: AxiosRequestConfig) => {
  const token = ""; // implementar captura de token

  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
};
