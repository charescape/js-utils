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
  return isObject(value) && (typeof value === "function");
}

function isPlainObject(value) {
  if (!isObject(value)) {
    return false;
  }

  // eg: Math [object Math], Error [object Function] ...
  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return false;
  }

  // from lodash
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

export { isArray, isArrayEmpty, isArrayFilled, isBool, isFalse, isFunction, isNil, isNull, isNumber, isObject, isObjectEmpty, isObjectFilled, isPlainObject, isString, isStringContainsString, isStringEmpty, isStringFilled, isTrue, isUndefined };
