import {AxiosInstance, AxiosStatic} from "axios";

export function create(axios: AxiosStatic): AxiosInstance {
  return axios.create({
    timeout: 60 * 1000,
  });
}
