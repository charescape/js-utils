export function isUndefined(value) {
  return value === undefined;
}

export function isNull(value) {
  return value === null;
}

export function isNil(value) {
  return isUndefined(value) || isNull(value);
}

export function isTrue(value) {
  return value === true;
}

export function isFalse(value) {
  return value === false;
}

export function isArray(value) {
  return Array.isArray(value);
}

export function isObject(value) {
  return (typeof value === 'object') && !isNil(value) && !isArray(value);
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
