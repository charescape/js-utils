var JsUtils_Ajax = (function (exports) {
    'use strict';

    function create(axios) {
        return axios.create({
            timeout: 60 * 1000,
        });
    }

    exports.create = create;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
