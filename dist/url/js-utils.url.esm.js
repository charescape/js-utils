/*! JsUtils_Url 2022-01-05T08:09:37.945Z */

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

export { urlGetSearchParam, urlGetSearchParams, urlGetSearchString };
