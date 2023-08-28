import { api } from "./api";

export const authServices = {
  singIn: (payload) => api.post("login", payload).then((res) => res.data),
};
