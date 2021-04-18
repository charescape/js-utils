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

export function isPlainObject(value) {
  if (!isObject(value)) {
    return false;
  }
  if (isUndefined(value.constructor)) {
    return true;
  }
  if (!isObject(value.constructor.prototype)) {
    return false;
  }
  if (value.constructor.prototype.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  return true;
}
