
export function isUndefined(value: any): boolean {
  return Object.is(value, undefined);
}

export function isNull(value: any): boolean {
  return Object.is(value, null);
}

export function isNil(value: any): boolean {
  return isUndefined(value) || isNull(value);
}


export function isTrue(value: any): boolean {
  return Object.is(value, true);
}

export function isFalse(value: any): boolean {
  return Object.is(value, false);
}

export function isBoolean(value: any): boolean {
  return isTrue(value) || isFalse(value);
}


export function isNumber(value: any): boolean {
  return ((typeof value === "number") || (typeof value === "bigint")) && !Object.is(value, NaN);
}

export function isNumberZero(value: any): boolean {
  return isNumber(value) && (value == 0);
}

export function isString(value: any): boolean {
  return (typeof value === "string");
}

export function isStringFilled(value: any): boolean {
  return isString(value) && value.trim() !== "";
}

export function isStringEmpty(value: any): boolean {
  return isString(value) && value.trim() === "";
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}

export function isArrayFilled(value: any): boolean {
  return isArray(value) && value.length > 0;
}

export function isArrayEmpty(value: any): boolean {
  return isArray(value) && value.length === 0;
}

export function isObject(value: any): boolean {
  return (typeof value === "object") && !isNil(value) && !isArray(value);
}

export function isObjectFilled(value: any): boolean {
  return isObject(value) && Object.keys(value).length > 0;
}

export function isObjectEmpty(value: any): boolean {
  return isObject(value) && Object.keys(value).length === 0;
}

export function isFunction(value: any): boolean {
  return (typeof value === "function") && isObject(value);
}

export function isPlainObject(value: any): boolean {
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

export function isStringContainsString(haystack: any, needle: any): boolean {
  if (!isString(haystack) || !isString(needle)) {
    return false;
  }

  return haystack.indexOf(needle) !== -1;
}
