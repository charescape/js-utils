/*! JsUtils 2022-02-15T08:34:25.500Z */

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
// Boolean
function isTrue(value) {
    return Object.is(value, true);
}
function isFalse(value) {
    return Object.is(value, false);
}
function isBoolean(value) {
    return isTrue(value) || isFalse(value);
}
// Number
function isNumber(value) {
    return ((typeof value === "number") || (typeof value === "bigint")) && !Object.is(value, NaN);
}
function isInteger(value) {
    return Number.isInteger(value);
}
function isIntegeric(value) {
    if (isInteger(value)) {
        return true;
    }
    if (isString(value)) {
        if (value === "0") {
            return true;
        }
        if (value.charAt(0) === "-") {
            value = value.slice(1);
        }
        if (/^[1-9]\d*$/.test(value)) {
            return true;
        }
    }
    return false;
}
// String
function isString(value) {
    return (typeof value === "string");
}
function isStringFilled(value) {
    return isString(value) && value.trim() !== "";
}
function isStringEmpty(value) {
    return isString(value) && value.trim() === "";
}
// Array
function isArray(value) {
    return Array.isArray(value);
}
function isArrayFilled(value) {
    return isArray(value) && value.length > 0;
}
function isArrayEmpty(value) {
    return isArray(value) && value.length === 0;
}
// Object
function isObject(value) {
    return (typeof value === "object") && !isNull(value) && !isArray(value);
}
function isObjectFilled(value) {
    return isObject(value) && Object.keys(value).length > 0;
}
function isObjectEmpty(value) {
    return isObject(value) && Object.keys(value).length === 0;
}
function isPlainObject(value) {
    if (!isObject(value)) {
        return false;
    }
    // eg: Math [object Math], Error [object Function] ...
    if (Object.prototype.toString.call(value) !== "[object Object]") {
        return false;
    }
    // following lodash: https://github.com/lodash/lodash/blob/master/isPlainObject.js#L34-L41
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }
    var prototypeOf = value;
    while (Object.getPrototypeOf(prototypeOf) !== null) {
        prototypeOf = Object.getPrototypeOf(prototypeOf);
    }
    return Object.getPrototypeOf(value) === prototypeOf;
}
// Function
function isFunction(value) {
    return (typeof value === "function");
}
// Symbol
function isSymbol(value) {
    return (typeof value === "symbol");
}
// Others
function isFalsyValue(value) {
    return isNil(value) || isFalse(value) || Object.is(value, NaN) || isNumberZero(value) || isStringEmpty(value);
}
function isStringContainsString(haystack, needle) {
    if (!isString(haystack) || !isString(needle)) {
        return false;
    }
    return haystack.indexOf(needle) !== -1;
}
function isNumberZero(value) {
    return isNumber(value) && (value == 0);
}
function isStringContainsChChars(value) {
    if (!isString(value)) {
        return false;
    }
    return /[\u4e00-\u9fa5]+/g.test(value);
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

function swalToast(config) {
    config = __assign({ 
        // title: "...",
        // icon: "success",
        toast: true, showConfirmButton: false, timer: 3000 }, config);
    return Swal.fire(config);
}
function swalToastSuccess(config) {
    config.icon = "success";
    return swalToast(config);
}
function swalAlert(config) {
    config = __assign({ 
        // html: `<p>...</p>`,
        // confirmButtonText: 'Close',
        width: 500, iconHtml: '<i class="bi bi-exclamation-circle text-primary"></i>', customClass: {
            icon: 'border-0 mt-0 mb-3',
            confirmButton: 'btn btn-primary px-4 py-2',
        }, showClass: {
            popup: 'animate__animated animate__fadeInUp animate__faster',
            backdrop: 'swal2-backdrop-show',
        }, hideClass: {
            popup: 'animate__animated animate__fadeOutDown animate__faster',
            backdrop: 'swal2-backdrop-hide',
        } }, config);
    return Swal.fire(config);
}

export { ajaxCreate, isArray, isArrayEmpty, isArrayFilled, isBoolean, isFalse, isFalsyValue, isFunction, isInteger, isIntegeric, isNil, isNull, isNumber, isNumberZero, isObject, isObjectEmpty, isObjectFilled, isPlainObject, isString, isStringContainsChChars, isStringContainsString, isStringEmpty, isStringFilled, isSymbol, isTrue, isUndefined, swalAlert, swalToast, swalToastSuccess, urlGetSearchParam, urlGetSearchParams, urlGetSearchString };
