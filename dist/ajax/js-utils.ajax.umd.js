(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.JsUtils_Ajax = {}));
}(this, (function (exports) { 'use strict';

    function create(axios) {
        return axios.create({
            timeout: 60 * 1000,
        });
    }

    exports.create = create;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
