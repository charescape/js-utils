const JsUtils = require('../dist/js-utils.umd');

const test_uri = 'https://www.bing.com/search';
const test_search = 'q=charCodeAt+charAt&cvid=3c2184e70cf940719395813b412dc5cd&aqs=edge..69i57.4334j0j4&FORM=ANAB01&PC=U531';
const test_params = {
  "q": "charCodeAt charAt",
  "cvid": "3c2184e70cf940719395813b412dc5cd",
  "aqs": "edge..69i57.4334j0j4",
  "FORM": "ANAB01",
  "PC": "U531",
};

test('urlGetSearchString', () => {
  // expect(JsUtils.urlGetSearchString(test_uri + "?" + test_search)).toBe(test_search);
  expect(JsUtils.urlGetSearchString("?" + test_search)).toBe(test_search);
  expect(JsUtils.urlGetSearchString(test_search)).toBe(test_search);

  expect(JsUtils.urlGetSearchString("??" + test_search)).toBe(test_search);
  expect(JsUtils.urlGetSearchString("  ??" + test_search)).toBe(test_search);
  expect(JsUtils.urlGetSearchString("  " + test_search)).toBe(test_search);

  expect(JsUtils.urlGetSearchString(test_search + " ")).toBe(test_search + " ");
  expect(JsUtils.urlGetSearchString(test_search + "?")).toBe(test_search + "?");
  expect(JsUtils.urlGetSearchString(test_search + "? ")).toBe(test_search + "? ");
});

test('urlGetSearchParams', () => {
  // expect(JsUtils.urlGetSearchParams(test_uri + "?" + test_search)).toStrictEqual(test_params);
  expect(JsUtils.urlGetSearchParams("?" + test_search)).toStrictEqual(test_params);
  expect(JsUtils.urlGetSearchParams(test_search)).toStrictEqual(test_params);

  expect(JsUtils.urlGetSearchParams("??" + test_search)).toStrictEqual(test_params);
  expect(JsUtils.urlGetSearchParams("  ??" + test_search)).toStrictEqual(test_params);
  expect(JsUtils.urlGetSearchParams("  " + test_search)).toStrictEqual(test_params);

  expect(JsUtils.urlGetSearchParams(test_search + " ")).toStrictEqual({...test_params, PC: test_params.PC + " "});
  expect(JsUtils.urlGetSearchParams(test_search + "?")).toStrictEqual({...test_params, PC: test_params.PC + "?"});
  expect(JsUtils.urlGetSearchParams(test_search + "? ")).toStrictEqual({...test_params, PC: test_params.PC + "? "});
});

test('urlGetSearchParam', () => {
  // expect(JsUtils.urlGetSearchParam("aqs", test_uri + "?" + test_search)).toBe(test_params.aqs);
  expect(JsUtils.urlGetSearchParam("aqs", "?" + test_search)).toBe(test_params.aqs);
  expect(JsUtils.urlGetSearchParam("aqs", test_search)).toBe(test_params.aqs);

  expect(JsUtils.urlGetSearchParam("aqs", "??" + test_search)).toBe(test_params.aqs);
  expect(JsUtils.urlGetSearchParam("aqs", "  ??" + test_search)).toBe(test_params.aqs);
  expect(JsUtils.urlGetSearchParam("aqs", "  " + test_search)).toBe(test_params.aqs);

  expect(JsUtils.urlGetSearchParam("aqs", test_search + " ")).toBe( test_params.aqs);
  expect(JsUtils.urlGetSearchParam("aqs", test_search + "?")).toBe(test_params.aqs);
  expect(JsUtils.urlGetSearchParam("aqs", test_search + "? ")).toBe(test_params.aqs);
});
