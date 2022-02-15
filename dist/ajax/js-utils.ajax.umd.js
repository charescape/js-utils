/*! JsUtils_Ajax 2022-02-15T08:34:25.531Z */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.JsUtils_Ajax = {}));
})(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function ajaxCreate(config) {
        // see https://github.com/axios/axios/blob/master/lib/defaults.js
        var defaultConfig = {
            method: 'GET',
            timeout: 0,
            paramsSerializer: function (params) {
                return Qs.stringify(params, { arrayFormat: 'brackets' });
            },
            // see https://github.com/axios/axios/blob/master/lib/adapters/xhr.js#L126
            // see https://github.com/axios/axios/blob/master/test/specs/xsrf.spec.js#L70-L81
            // xsrfCookieName: 'XSRF-TOKEN', // default
            // xsrfHeaderName: 'X-XSRF-TOKEN', // default
            withCredentials: false,
            // can be: [arraybuffer] [document] [json] [text] [stream] [blob](browser only)
            responseType: 'json',
        };
        var internalConfig = __assign(__assign({}, defaultConfig), config);
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

}));
