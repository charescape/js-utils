'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

  let prototypeOf = value;
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

exports.isArray = isArray;
exports.isArrayEmpty = isArrayEmpty;
exports.isArrayFilled = isArrayFilled;
exports.isBool = isBool;
exports.isFalse = isFalse;
exports.isFunction = isFunction;
exports.isNil = isNil;
exports.isNull = isNull;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isObjectEmpty = isObjectEmpty;
exports.isObjectFilled = isObjectFilled;
exports.isPlainObject = isPlainObject;
exports.isString = isString;
exports.isStringContainsString = isStringContainsString;
exports.isStringEmpty = isStringEmpty;
exports.isStringFilled = isStringFilled;
exports.isTrue = isTrue;
exports.isUndefined = isUndefined;
