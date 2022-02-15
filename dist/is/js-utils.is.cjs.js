/*! JsUtils_Is 2022-02-15T08:34:25.519Z */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

exports.isArray = isArray;
exports.isArrayEmpty = isArrayEmpty;
exports.isArrayFilled = isArrayFilled;
exports.isBoolean = isBoolean;
exports.isFalse = isFalse;
exports.isFalsyValue = isFalsyValue;
exports.isFunction = isFunction;
exports.isInteger = isInteger;
exports.isIntegeric = isIntegeric;
exports.isNil = isNil;
exports.isNull = isNull;
exports.isNumber = isNumber;
exports.isNumberZero = isNumberZero;
exports.isObject = isObject;
exports.isObjectEmpty = isObjectEmpty;
exports.isObjectFilled = isObjectFilled;
exports.isPlainObject = isPlainObject;
exports.isString = isString;
exports.isStringContainsChChars = isStringContainsChChars;
exports.isStringContainsString = isStringContainsString;
exports.isStringEmpty = isStringEmpty;
exports.isStringFilled = isStringFilled;
exports.isSymbol = isSymbol;
exports.isTrue = isTrue;
exports.isUndefined = isUndefined;
