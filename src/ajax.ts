import type * as Axios_T from "axios";
import type * as Qs_T from "qs";

declare const axios: Axios_T.AxiosStatic;
declare const Qs: typeof Qs_T;

export function ajaxCreate(config?: Axios_T.AxiosRequestConfig): Axios_T.AxiosInstance {
  // see https://github.com/axios/axios/blob/master/lib/defaults.js
  const defaultConfig = {
    method: 'GET',
    timeout: 0,

    paramsSerializer: (params: any): string => {
      return Qs.stringify(params, {arrayFormat: 'brackets'})
    },

    // see https://github.com/axios/axios/blob/master/lib/adapters/xhr.js#L126
    // see https://github.com/axios/axios/blob/master/test/specs/xsrf.spec.js#L70-L81
    // xsrfCookieName: 'XSRF-TOKEN', // default
    // xsrfHeaderName: 'X-XSRF-TOKEN', // default
    withCredentials: false,

    // can be: [arraybuffer] [document] [json] [text] [stream] [blob](browser only)
    responseType: 'json',
  };

  const internalConfig = {...defaultConfig, ...config};

  // if (!isPlainObject(config.headers)) {
  //   config.headers = {};
  // }

  // @ts-ignore
  return axios.create(internalConfig);

  // instance.defaults.baseURL = 'https://api.example.com';
  // instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  // instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}
