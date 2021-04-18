const JsUtils = require('../dist/js-utils.umd');

test('JsUtils.isPlainObject', () => {
  function ObjectConstructor() {}
  ObjectConstructor.prototype.constructor = Object;

  function FnFoo() { this.a = 1 }

  expect(JsUtils.isPlainObject( {} )).toBe(true);
  expect(JsUtils.isPlainObject( {foo: 'bar'} )).toBe(true);
  expect(JsUtils.isPlainObject( {valueOf: 0} )).toBe(true);
  expect(JsUtils.isPlainObject( Object.create(null) )).toBe(true);
  expect(JsUtils.isPlainObject( Object.create(Object.prototype) )).toBe(true);

  expect(JsUtils.isPlainObject( {constructor: FnFoo} )).toBe(true);

  expect(JsUtils.isPlainObject( Object.create({}) )).toBe(false);
  expect(JsUtils.isPlainObject( Object.create({foo: 'bar'}) )).toBe(false);
  expect(JsUtils.isPlainObject( new ObjectConstructor )).toBe(false);

  expect(JsUtils.isPlainObject( /foo/ )).toBe(false);
  expect(JsUtils.isPlainObject( function () {} )).toBe(false);
  expect(JsUtils.isPlainObject( 1 )).toBe(false);
  expect(JsUtils.isPlainObject( ['foo', 'bar'] )).toBe(false);
  expect(JsUtils.isPlainObject( new FnFoo )).toBe(false);
  expect(JsUtils.isPlainObject( null )).toBe(false);
  expect(JsUtils.isPlainObject( Math )).toBe(false);
  expect(JsUtils.isPlainObject( Error )).toBe(false);

  (function () {
    expect(JsUtils.isPlainObject(arguments)).toBe(false);
  })();
  (function (a, b) {
    expect(JsUtils.isPlainObject(arguments)).toBe(false);
  })('a', 'b');

  const foo = new FnFoo; foo.constructor = Object;
  expect(JsUtils.isPlainObject(foo)).toBe(false);
});
