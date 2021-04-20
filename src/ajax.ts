
import {AxiosInstance, AxiosRequestConfig, AxiosStatic} from "axios";

export function ajaxCreate(axios: AxiosStatic, config: AxiosRequestConfig): AxiosInstance {
  // see https://github.com/axios/axios/blob/master/lib/defaults.js
  const defaultConfig = {
    method: 'GET',
    timeout: 0,

    // paramsSerializer: function (params) {
    //   return Qs.stringify(params, {arrayFormat: 'brackets'})
    // },

    // see https://github.com/axios/axios/blob/master/lib/adapters/xhr.js#L126
    // see https://github.com/axios/axios/blob/master/test/specs/xsrf.spec.js#L70-L81
    // xsrfCookieName: 'XSRF-TOKEN', // default
    // xsrfHeaderName: 'X-XSRF-TOKEN', // default
    withCredentials: false,

    // can be: [arraybuffer] [document] [json] [text] [stream] [blob](browser only)
    responseType: 'json',
  };

  config = {...defaultConfig, config};

  // if (!isPlainObject(config.headers)) {
  //   config.headers = {};
  // }

  return axios.create(config);

  // instance.defaults.baseURL = 'https://api.example.com';
  // instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  // instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}
