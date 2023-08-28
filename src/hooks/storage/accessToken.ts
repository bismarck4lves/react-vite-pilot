import { IStorage } from "./interfaces";
import { projectName } from "config";

export function useStorageAccessToken(): IStorage {
  const valueKey = `@${projectName}:accessToken`;
  const get = () => JSON.parse(localStorage.getItem(valueKey));
  const set = (val) => localStorage.setItem(valueKey, JSON.stringify(val));
  const destroy = () => localStorage.removeItem(valueKey);
  return {
    get,
    set,
    destroy,
  };
}

export function useStorageRefreshToken(): IStorage {
  const valueKey = `@${projectName}:refreshToken`;

  const get = () => JSON.parse(localStorage.getItem(valueKey));
  const set = (val) => localStorage.setItem(valueKey, JSON.stringify(val));
  const destroy = () => localStorage.removeItem(valueKey);
  return {
    get,
    set,
    destroy,
  };
}
