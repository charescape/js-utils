export function isUndefined(value) {
  return value === undefined;
}

export function isNull(value) {
  return value === null;
}

export function isNil(value) {
  return value === undefined || value === null;
}


export function isTrue(value) {
  return value === true;
}

export function isFalse(value) {
  return value === false;
}

export function isBool(value) {
  return value === true || value === false;
}


export function isNumber(value) {
  return (typeof value === "number");
}

export function isString(value) {
  return (typeof value === "string");
}

export function isStringFilled(value) {
  return isString(value) && value.trim() !== "";
}

export function isStringEmpty(value) {
  return isString(value) && value.trim() === "";
}

export function isArray(value) {
  return Array.isArray(value);
}

export function isArrayFilled(value) {
  return isArray(value) && value.length > 0;
}

export function isArrayEmpty(value) {
  return isArray(value) && value.length === 0;
}

export function isObject(value) {
  return (typeof value === "object") && !isNil(value) && !isArray(value);
}

export function isObjectFilled(value) {
  return isObject(value) && Object.keys(value).length > 0;
}

export function isObjectEmpty(value) {
  return isObject(value) && Object.keys(value).length === 0;
}

export function isFunction(value) {
  return isObject(value) && (typeof value === "function");
}

export function isPlainObject(value) {
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

export function isStringContainsString(haystack, needle) {
  if (!isString(haystack) || !isString(needle)) {
    return false;
  }

  return haystack.indexOf(needle) !== -1;
}
