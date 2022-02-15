/*! JsUtils_Url 2022-02-15T08:34:25.526Z */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.JsUtils_Url = {}));
})(this, (function (exports) { 'use strict';

    // Undefined, Null
    function isUndefined(value) {
        return Object.is(value, undefined);
    }
    function isNull(value) {
        return Object.is(value, null);
    }
    function isNil(value) {
        return isUndefined(value) || isNull(value);
    }
    // String
    function isString(value) {
        return (typeof value === "string");
    }

    function urlGetSearchString(from) {
        if (!isString(from)) {
            from = window.location.search;
        }
        // @ts-ignore
        var result = from.trimStart();
        if (result.charAt(0) === '?') {
            result = result.replace(/^[?]+/, '');
        }
        return result;
    }
    function urlGetSearchParams(from) {
        var ss = urlGetSearchString(from);
        return Qs.parse(ss);
    }
    function urlGetSearchParam(param, from) {
        var params = urlGetSearchParams(from);
        if (!isNil(params[param])) {
            return params[param];
        }
        return null;
    }

    exports.urlGetSearchParam = urlGetSearchParam;
    exports.urlGetSearchParams = urlGetSearchParams;
    exports.urlGetSearchString = urlGetSearchString;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
