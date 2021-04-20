function isUndefined(value) {
    return value === undefined;
}
function isNull(value) {
    return value === null;
}
function isNil(value) {
    return value === undefined || value === null;
}
function isTrue(value) {
    return value === true;
}
function isFalse(value) {
    return value === false;
}
function isBool(value) {
    return value === true || value === false;
}
function isNumber(value) {
    return (typeof value === "number");
}
function isString(value) {
    return (typeof value === "string");
}
function isStringFilled(value) {
    return isString(value) && value.trim() !== "";
}
function isStringEmpty(value) {
    return isString(value) && value.trim() === "";
}
function isArray(value) {
    return Array.isArray(value);
}
function isArrayFilled(value) {
    return isArray(value) && value.length > 0;
}
function isArrayEmpty(value) {
    return isArray(value) && value.length === 0;
}
function isObject(value) {
    return (typeof value === "object") && !isNil(value) && !isArray(value);
}
function isObjectFilled(value) {
    return isObject(value) && Object.keys(value).length > 0;
}
function isObjectEmpty(value) {
    return isObject(value) && Object.keys(value).length === 0;
}
function isFunction(value) {
    return (typeof value === "function") && isObject(value);
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
function isStringContainsString(haystack, needle) {
    if (!isString(haystack) || !isString(needle)) {
        return false;
    }
    return haystack.indexOf(needle) !== -1;
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

function ajaxCreate(axios, config) {
    // see https://github.com/axios/axios/blob/master/lib/defaults.js
    var defaultConfig = {
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

export { ajaxCreate, isArray, isArrayEmpty, isArrayFilled, isBool, isFalse, isFunction, isNil, isNull, isNumber, isObject, isObjectEmpty, isObjectFilled, isPlainObject, isString, isStringContainsString, isStringEmpty, isStringFilled, isTrue, isUndefined };
