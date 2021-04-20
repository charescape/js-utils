var JsUtils_Ajax = (function (exports) {
    'use strict';

    function ajaxCreate(axios, config) {
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
        const internalConfig = Object.assign(Object.assign({}, defaultConfig), config);
        // if (!isPlainObject(config.headers)) {
        //   config.headers = {};
        // }
        // @ts-ignore
        return axios.create(internalConfig);
        // instance.defaults.baseURL = 'https://api.example.com';
        // instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        // instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    exports.ajaxCreate = ajaxCreate;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
