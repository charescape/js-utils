const JsUtils = require('../dist/js-utils.umd');

test('isPlainObject', () => {
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

test('isNumber', () => {
  expect(JsUtils.isNumber( 1 )).toBe(true);
  expect(JsUtils.isNumber( 0 )).toBe(true);
  expect(JsUtils.isNumber( +1 )).toBe(true);
  expect(JsUtils.isNumber( -1 )).toBe(true);

  expect(JsUtils.isNumber( Number.NaN )).toBe(false);
  expect(JsUtils.isNumber( NaN )).toBe(false);
});

test('isNumberZero', () => {
  expect(JsUtils.isNumberZero( 0 )).toBe(true);
  expect(JsUtils.isNumberZero( 0.0 )).toBe(true);
  expect(JsUtils.isNumberZero( 0.00 )).toBe(true);
  expect(JsUtils.isNumberZero( 0.000 )).toBe(true);
  expect(JsUtils.isNumberZero( 0x0 )).toBe(true);
  expect(JsUtils.isNumberZero( -0 )).toBe(true);
  expect(JsUtils.isNumberZero( -0.0 )).toBe(true);
  expect(JsUtils.isNumberZero( -0.00 )).toBe(true);
  expect(JsUtils.isNumberZero( -0.000 )).toBe(true);
  expect(JsUtils.isNumberZero( -0x0 )).toBe(true);
  expect(JsUtils.isNumberZero( 0n )).toBe(true);
  expect(JsUtils.isNumberZero( 0x0n )).toBe(true);


  expect(JsUtils.isNumberZero( null )).toBe(false);
  expect(JsUtils.isNumberZero( undefined )).toBe(false);
  expect(JsUtils.isNumberZero( '' )).toBe(false);
  expect(JsUtils.isNumberZero( ' ' )).toBe(false);
  expect(JsUtils.isNumberZero( '0' )).toBe(false);
  expect(JsUtils.isNumberZero( '0.0' )).toBe(false);
  expect(JsUtils.isNumberZero( false )).toBe(false);
  expect(JsUtils.isNumberZero( 1 )).toBe(false);
  expect(JsUtils.isNumberZero( 0.1 )).toBe(false);
  expect(JsUtils.isNumberZero( 0.01 )).toBe(false);
  expect(JsUtils.isNumberZero( -1 )).toBe(false);
  expect(JsUtils.isNumberZero( -0.1 )).toBe(false);
  expect(JsUtils.isNumberZero( -0.01 )).toBe(false);
  expect(JsUtils.isNumberZero( Number.NaN )).toBe(false);
  expect(JsUtils.isNumberZero( NaN )).toBe(false);
});
