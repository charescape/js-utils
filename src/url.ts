import type * as Qs_T from "qs";
import {isNil, isString, isStringEmpty} from "./is";

declare const Qs: typeof Qs_T;

export function urlGetSearchString(url?: string): string {
  if (typeof url === "undefined") {
    url = window.location.search;
  }
  if (!isString(url)) {
    url = window.location.search;
  }

  if (url.charAt(0) === '?') {
    url = url.replace(/^[?]+/, '');
  }

  return url;
}

export function urlGetSearchParams(url?: string): object {
  const ss: string = urlGetSearchString(url);

  if (isStringEmpty(ss)) {
    return {};
  }

  return Qs.parse(ss);
}

export function urlGetSearchParam(param: string, url?: string): any {
  const params: any = urlGetSearchParams(url);

  if (!isNil(params[param])) {
    return params[param];
  }

  return null;
}
