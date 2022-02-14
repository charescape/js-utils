import type * as Qs_T from "qs";
import {isNil, isString} from "./is";

declare const Qs: typeof Qs_T;

export function urlGetSearchString(from?: string): string {
  if (!isString(from)) {
    from = window.location.search;
  }

  // @ts-ignore
  let result: string = from.trimStart();

  if (result.charAt(0) === '?') {
    result = result.replace(/^[?]+/, '');
  }

  return result;
}

export function urlGetSearchParams(from?: string): object {
  const ss: string = urlGetSearchString(from);

  return Qs.parse(ss);
}

export function urlGetSearchParam(param: string, from?: string): any {
  const params: any = urlGetSearchParams(from);

  if (!isNil(params[param])) {
    return params[param];
  }

  return null;
}
