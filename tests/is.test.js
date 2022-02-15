const JsUtils = require('../dist/js-utils.umd');

// Undefined, Null
test('isUndefined', () => {
  expect(JsUtils.isUndefined( undefined )).toBe(true);

  expect(JsUtils.isUndefined( null )).toBe(false);
});

test('isNull', () => {
  expect(JsUtils.isNull( null )).toBe(true);

  expect(JsUtils.isNull( undefined )).toBe(false);
});

test('isNil', () => {
  expect(JsUtils.isNil( null )).toBe(true);
  expect(JsUtils.isNil( undefined )).toBe(true);
});


// Boolean
test('isTrue', () => {
  expect(JsUtils.isTrue( true )).toBe(true);

  expect(JsUtils.isTrue( false )).toBe(false);
});

test('isFalse', () => {
  expect(JsUtils.isFalse( true )).toBe(false);

  expect(JsUtils.isFalse( false )).toBe(true);
});

test('isBoolean', () => {
  expect(JsUtils.isBoolean( true )).toBe(true);
  expect(JsUtils.isBoolean( false )).toBe(true);
});


// Number
test('isNumber', () => {
  expect(JsUtils.isNumber( 1 )).toBe(true);
  expect(JsUtils.isNumber( +1 )).toBe(true);
  expect(JsUtils.isNumber( -1 )).toBe(true);
  expect(JsUtils.isNumber( 0 )).toBe(true);
  expect(JsUtils.isNumber( 0.0 )).toBe(true);
  expect(JsUtils.isNumber( 0.00 )).toBe(true);
  expect(JsUtils.isNumber( 0x0 )).toBe(true);
  expect(JsUtils.isNumber( -0 )).toBe(true);
  expect(JsUtils.isNumber( -0.0 )).toBe(true);
  expect(JsUtils.isNumber( -0.00 )).toBe(true);
  expect(JsUtils.isNumber( -0x0 )).toBe(true);
  expect(JsUtils.isNumber( 0n )).toBe(true);
  expect(JsUtils.isNumber( 0x0n )).toBe(true);

  expect(JsUtils.isNumber( NaN )).toBe(false);
  expect(JsUtils.isNumber( Number.NaN )).toBe(false);
  expect(JsUtils.isNumber( null )).toBe(false);
  expect(JsUtils.isNumber( undefined )).toBe(false);
  expect(JsUtils.isNumber( '' )).toBe(false);
  expect(JsUtils.isNumber( ' ' )).toBe(false);
  expect(JsUtils.isNumber( '0' )).toBe(false);
  expect(JsUtils.isNumber( '0.0' )).toBe(false);
  expect(JsUtils.isNumber( false )).toBe(false);
  expect(JsUtils.isNumber( {} )).toBe(false);
});

// Integer
test('isInteger', () => {
  expect(JsUtils.isInteger( 0 )).toBe(true);
  expect(JsUtils.isInteger( 1 )).toBe(true);
  expect(JsUtils.isInteger( -1 )).toBe(true);

  expect(JsUtils.isInteger( NaN )).toBe(false);
  expect(JsUtils.isInteger( Number.NaN )).toBe(false);
  expect(JsUtils.isInteger( null )).toBe(false);
  expect(JsUtils.isInteger( undefined )).toBe(false);
  expect(JsUtils.isInteger( '' )).toBe(false);
  expect(JsUtils.isInteger( ' ' )).toBe(false);
  expect(JsUtils.isInteger( '0' )).toBe(false);
  expect(JsUtils.isInteger( false )).toBe(false);
  expect(JsUtils.isInteger( {} )).toBe(false);
});

// Integeric
test('isIntegeric', () => {
  expect(JsUtils.isIntegeric( 0 )).toBe(true);
  expect(JsUtils.isIntegeric( 1 )).toBe(true);
  expect(JsUtils.isIntegeric( -1 )).toBe(true);

  expect(JsUtils.isIntegeric( '0' )).toBe(true);
  expect(JsUtils.isIntegeric( '-0' )).toBe(false);
  expect(JsUtils.isIntegeric( '+0' )).toBe(false);
  expect(JsUtils.isIntegeric( '00' )).toBe(false);

  expect(JsUtils.isIntegeric( '1' )).toBe(true);
  expect(JsUtils.isIntegeric( '-1' )).toBe(true);

  expect(JsUtils.isIntegeric( '123' )).toBe(true);
  expect(JsUtils.isIntegeric( '-123' )).toBe(true);

  expect(JsUtils.isIntegeric( '0123' )).toBe(false);

  expect(JsUtils.isIntegeric( NaN )).toBe(false);
  expect(JsUtils.isIntegeric( Number.NaN )).toBe(false);
  expect(JsUtils.isIntegeric( null )).toBe(false);
  expect(JsUtils.isIntegeric( undefined )).toBe(false);
  expect(JsUtils.isIntegeric( '' )).toBe(false);
  expect(JsUtils.isIntegeric( ' ' )).toBe(false);
  expect(JsUtils.isIntegeric( false )).toBe(false);
  expect(JsUtils.isIntegeric( {} )).toBe(false);
});


// String
test('isString', () => {
  expect(JsUtils.isString( 'abc' )).toBe(true);
  expect(JsUtils.isString( '0' )).toBe(true);
  expect(JsUtils.isString( '' )).toBe(true);
  expect(JsUtils.isString( ' ' )).toBe(true);

  expect(JsUtils.isString( NaN )).toBe(false);
  expect(JsUtils.isString( Number.NaN )).toBe(false);
  expect(JsUtils.isString( null )).toBe(false);
  expect(JsUtils.isString( undefined )).toBe(false);
  expect(JsUtils.isString( false )).toBe(false);
  expect(JsUtils.isString( {} )).toBe(false);
});

test('isStringFilled', () => {
  expect(JsUtils.isStringFilled( 'abc' )).toBe(true);
  expect(JsUtils.isStringFilled( '0' )).toBe(true);

  expect(JsUtils.isStringFilled( '' )).toBe(false);
  expect(JsUtils.isStringFilled( ' ' )).toBe(false);
});

test('isStringEmpty', () => {
  expect(JsUtils.isStringEmpty( '' )).toBe(true);
  expect(JsUtils.isStringEmpty( ' ' )).toBe(true);

  expect(JsUtils.isStringEmpty( 'abc' )).toBe(false);
  expect(JsUtils.isStringEmpty( '0' )).toBe(false);
});


// Array
test('isArray', () => {
  expect(JsUtils.isArray( [] )).toBe(true);
  expect(JsUtils.isArray( [1] )).toBe(true);
  expect(JsUtils.isArray( new Array() )).toBe(true);
  expect(JsUtils.isArray( new Array('a', 'b', 'c', 'd') )).toBe(true);
  expect(JsUtils.isArray( new Array(3) )).toBe(true);
  expect(JsUtils.isArray( Array.prototype )).toBe(true);

  expect(JsUtils.isArray(  )).toBe(false);
  expect(JsUtils.isArray( {} )).toBe(false);
  expect(JsUtils.isArray( null )).toBe(false);
  expect(JsUtils.isArray( undefined )).toBe(false);
  expect(JsUtils.isArray( 17 )).toBe(false);
  expect(JsUtils.isArray( 'Array' )).toBe(false);
  expect(JsUtils.isArray( true )).toBe(false);
  expect(JsUtils.isArray( false )).toBe(false);
  expect(JsUtils.isArray( new Uint8Array(32) )).toBe(false);
  expect(JsUtils.isArray( { __proto__: Array.prototype } )).toBe(false);
});

test('isArrayEmpty', () => {
  expect(JsUtils.isArrayEmpty( [] )).toBe(true);
  expect(JsUtils.isArrayEmpty( new Array() )).toBe(true);
  expect(JsUtils.isArrayEmpty( Array.prototype )).toBe(true);

  expect(JsUtils.isArrayEmpty( [1] )).toBe(false);
  expect(JsUtils.isArrayEmpty( new Array('a', 'b', 'c', 'd') )).toBe(false);
  expect(JsUtils.isArrayEmpty( new Array(3) )).toBe(false);
});

test('isArrayFilled', () => {
  expect(JsUtils.isArrayFilled( [1] )).toBe(true);
  expect(JsUtils.isArrayFilled( new Array('a', 'b', 'c', 'd') )).toBe(true);
  expect(JsUtils.isArrayFilled( new Array(3) )).toBe(true);

  expect(JsUtils.isArrayFilled( [] )).toBe(false);
  expect(JsUtils.isArrayFilled( new Array() )).toBe(false);
  expect(JsUtils.isArrayFilled( Array.prototype )).toBe(false);
});


// Object
test('isObject', () => {
  function ObjectConstructor() {}
  ObjectConstructor.prototype.constructor = Object;

  function FnFoo() { this.a = 1 }


  expect(JsUtils.isObject( {} )).toBe(true);
  expect(JsUtils.isObject( {foo: 'bar'} )).toBe(true);
  expect(JsUtils.isObject( {valueOf: 0} )).toBe(true);
  expect(JsUtils.isObject( /foo/ )).toBe(true);

  expect(JsUtils.isObject( Math )).toBe(true);
  expect(JsUtils.isObject( Object.prototype )).toBe(true);
  expect(JsUtils.isObject( Object.create(null) )).toBe(true);
  expect(JsUtils.isObject( Object.create(Object.prototype) )).toBe(true);
  expect(JsUtils.isObject( Object.create({}) )).toBe(true);
  expect(JsUtils.isObject( Object.create({foo: 'bar'}) )).toBe(true);

  (function () {
    expect(JsUtils.isObject(arguments)).toBe(true);
  })();
  (function (a, b) {
    expect(JsUtils.isObject(arguments)).toBe(true);
  })('a', 'b');

  expect(JsUtils.isObject( {constructor: FnFoo} )).toBe(true);
  expect(JsUtils.isObject( new ObjectConstructor )).toBe(true);
  expect(JsUtils.isObject( new FnFoo )).toBe(true);

  const foo = new FnFoo; foo.constructor = Object;
  expect(JsUtils.isObject(foo)).toBe(true);


  // not Nil, not Array
  expect(JsUtils.isObject( null )).toBe(false);
  expect(JsUtils.isObject( undefined )).toBe(false);
  expect(JsUtils.isObject( [] )).toBe(false);
  expect(JsUtils.isObject( ['foo', 'bar'] )).toBe(false);
  expect(JsUtils.isObject( new Array() )).toBe(false);
  expect(JsUtils.isObject( new Array('a', 'b', 'c', 'd') )).toBe(false);
  expect(JsUtils.isObject( new Array(3) )).toBe(false);
  expect(JsUtils.isObject( Array.prototype )).toBe(false);

  // not others
  expect(JsUtils.isObject( 'abc' )).toBe(false);
  expect(JsUtils.isObject( 1 )).toBe(false);
  expect(JsUtils.isObject( 1n )).toBe(false);
  expect(JsUtils.isObject( Error )).toBe(false);
  expect(JsUtils.isObject( NaN )).toBe(false);
  expect(JsUtils.isObject( Number.NaN )).toBe(false);
  expect(JsUtils.isObject( function () {} )).toBe(false);
});

test('isObjectEmpty', () => {
  expect(JsUtils.isObjectEmpty( {} )).toBe(true);
  expect(JsUtils.isObjectEmpty( /foo/ )).toBe(true);
  expect(JsUtils.isObjectEmpty( Math )).toBe(true);
  expect(JsUtils.isObjectEmpty( Object.prototype )).toBe(true);
  expect(JsUtils.isObjectEmpty( Object.create(null) )).toBe(true);
  expect(JsUtils.isObjectEmpty( Object.create(Object.prototype) )).toBe(true);
  expect(JsUtils.isObjectEmpty( Object.create({}) )).toBe(true);

  expect(JsUtils.isObjectEmpty( Object.create({foo: 'bar'}) )).toBe(true);

  (function () {
    expect(JsUtils.isObjectEmpty(arguments)).toBe(true);
  })();


  expect(JsUtils.isObjectEmpty( {foo: 'bar'} )).toBe(false);
  expect(JsUtils.isObjectEmpty( {valueOf: 0} )).toBe(false);
  (function (a, b) {
    expect(JsUtils.isObjectEmpty(arguments)).toBe(false);
  })('a', 'b');
});

test('isObjectFilled', () => {
  expect(JsUtils.isObjectFilled( {foo: 'bar'} )).toBe(true);
  expect(JsUtils.isObjectFilled( {valueOf: 0} )).toBe(true);
  (function (a, b) {
    expect(JsUtils.isObjectFilled(arguments)).toBe(true);
  })('a', 'b');

  expect(JsUtils.isObjectFilled( {} )).toBe(false);
  expect(JsUtils.isObjectFilled( /foo/ )).toBe(false);
  expect(JsUtils.isObjectFilled( Math )).toBe(false);
  expect(JsUtils.isObjectFilled( Object.prototype )).toBe(false);
  expect(JsUtils.isObjectFilled( Object.create(null) )).toBe(false);
  expect(JsUtils.isObjectFilled( Object.create(Object.prototype) )).toBe(false);
  expect(JsUtils.isObjectFilled( Object.create({}) )).toBe(false);

  expect(JsUtils.isObjectFilled( Object.create({foo: 'bar'}) )).toBe(false);

  (function () {
    expect(JsUtils.isObjectFilled(arguments)).toBe(false);
  })();
});


// Function
test('isFunction', () => {
  expect(JsUtils.isFunction( function () {} )).toBe(true);
  expect(JsUtils.isFunction( Array.isArray )).toBe(true);
  expect(JsUtils.isFunction( Error )).toBe(true);

  expect(JsUtils.isFunction(  )).toBe(false);
  expect(JsUtils.isFunction( {} )).toBe(false);
  expect(JsUtils.isFunction( null )).toBe(false);
  expect(JsUtils.isFunction( undefined )).toBe(false);
  expect(JsUtils.isFunction( 17 )).toBe(false);
  expect(JsUtils.isFunction( '' )).toBe(false);
  expect(JsUtils.isFunction( true )).toBe(false);
  expect(JsUtils.isFunction( false )).toBe(false);
});

// Symbol
test('isSymbol', () => {
  expect(JsUtils.isSymbol( Symbol() )).toBe(true);
  expect(JsUtils.isSymbol( Symbol('foo') )).toBe(true);

  expect(JsUtils.isSymbol(  )).toBe(false);
  expect(JsUtils.isSymbol( function () {} )).toBe(false);
  expect(JsUtils.isSymbol( {} )).toBe(false);
  expect(JsUtils.isSymbol( null )).toBe(false);
  expect(JsUtils.isSymbol( undefined )).toBe(false);
  expect(JsUtils.isSymbol( 17 )).toBe(false);
  expect(JsUtils.isSymbol( '' )).toBe(false);
  expect(JsUtils.isSymbol( true )).toBe(false);
  expect(JsUtils.isSymbol( false )).toBe(false);
});


// Others
test('isPlainObject', () => {
  function ObjectConstructor() {}
  ObjectConstructor.prototype.constructor = Object;

  function FnFoo() { this.a = 1 }

  expect(JsUtils.isPlainObject( {} )).toBe(true);
  expect(JsUtils.isPlainObject( {foo: 'bar'} )).toBe(true);
  expect(JsUtils.isPlainObject( {valueOf: 0} )).toBe(true);
  expect(JsUtils.isPlainObject( Object.prototype )).toBe(true);
  expect(JsUtils.isPlainObject( Object.create(null) )).toBe(true);
  expect(JsUtils.isPlainObject( Object.create(Object.prototype) )).toBe(true);

  expect(JsUtils.isPlainObject( {constructor: FnFoo} )).toBe(true);

  expect(JsUtils.isPlainObject( Object.create({}) )).toBe(false);
  expect(JsUtils.isPlainObject( Object.create({foo: 'bar'}) )).toBe(false);
  expect(JsUtils.isPlainObject( new ObjectConstructor )).toBe(false);

  expect(JsUtils.isPlainObject( /foo/ )).toBe(false);
  expect(JsUtils.isPlainObject( new FnFoo )).toBe(false);
  expect(JsUtils.isPlainObject( Math )).toBe(false);

  (function () {
    expect(JsUtils.isPlainObject(arguments)).toBe(false);
  })();
  (function (a, b) {
    expect(JsUtils.isPlainObject(arguments)).toBe(false);
  })('a', 'b');

  const foo = new FnFoo; foo.constructor = Object;
  expect(JsUtils.isPlainObject(foo)).toBe(false);
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
  expect(JsUtils.isNumberZero( NaN )).toBe(false);
  expect(JsUtils.isNumberZero( Number.NaN )).toBe(false);
});

test('isFalsyValue', () => {
  expect(JsUtils.isFalsyValue( false )).toBe(true);

  // from isNumberZero
  expect(JsUtils.isFalsyValue( 0 )).toBe(true);
  expect(JsUtils.isFalsyValue( 0.0 )).toBe(true);
  expect(JsUtils.isFalsyValue( 0.00 )).toBe(true);
  expect(JsUtils.isFalsyValue( 0.000 )).toBe(true);
  expect(JsUtils.isFalsyValue( 0x0 )).toBe(true);
  expect(JsUtils.isFalsyValue( -0 )).toBe(true);
  expect(JsUtils.isFalsyValue( -0.0 )).toBe(true);
  expect(JsUtils.isFalsyValue( -0.00 )).toBe(true);
  expect(JsUtils.isFalsyValue( -0.000 )).toBe(true);
  expect(JsUtils.isFalsyValue( -0x0 )).toBe(true);
  expect(JsUtils.isFalsyValue( 0n )).toBe(true);
  expect(JsUtils.isFalsyValue( 0x0n )).toBe(true);
  expect(JsUtils.isFalsyValue( NaN )).toBe(true);
  expect(JsUtils.isFalsyValue( Number.NaN )).toBe(true);

  // from isStringEmpty
  expect(JsUtils.isFalsyValue( '' )).toBe(true);
  expect(JsUtils.isFalsyValue( ' ' )).toBe(true);
  expect(JsUtils.isFalsyValue( '  ' )).toBe(true);

  expect(JsUtils.isFalsyValue( null )).toBe(true);
  expect(JsUtils.isFalsyValue( undefined )).toBe(true);
});

test('isStringContainsString', () => {
  expect(JsUtils.isStringContainsString( '', '' )).toBe(true);
  expect(JsUtils.isStringContainsString( ' ', '' )).toBe(true);
  expect(JsUtils.isStringContainsString( '', ' ' )).toBe(false);

  expect(JsUtils.isStringContainsString( 'abc', 'a')).toBe(true);
  expect(JsUtils.isStringContainsString( 'abc', 'd')).toBe(false);

  expect(JsUtils.isStringContainsString( '123', '1')).toBe(true);
  expect(JsUtils.isStringContainsString( '123', '23')).toBe(true);
  expect(JsUtils.isStringContainsString( 123, 1)).toBe(false);
  expect(JsUtils.isStringContainsString( '123', 1)).toBe(false);

  expect(JsUtils.isStringContainsString( [], '')).toBe(false);
  expect(JsUtils.isStringContainsString( ['1', '2', '3'], '1')).toBe(false);
  expect(JsUtils.isStringContainsString( ['1', '2', '3'], '2')).toBe(false);
});

test('isStringContainsChChars', () => {
  expect(JsUtils.isStringContainsChChars( '你好' )).toBe(true);
  expect(JsUtils.isStringContainsChChars( '你好abc' )).toBe(true);
  expect(JsUtils.isStringContainsChChars( 'abc哈哈' )).toBe(true);

  expect(JsUtils.isStringContainsChChars( '？' )).toBe(false);
  expect(JsUtils.isStringContainsChChars( '¥' )).toBe(false);

  expect(JsUtils.isStringContainsChChars( '' )).toBe(false);
  expect(JsUtils.isStringContainsChChars( ' ' )).toBe(false);
  expect(JsUtils.isStringContainsChChars( '-' )).toBe(false);
  expect(JsUtils.isStringContainsChChars( '?' )).toBe(false);
  expect(JsUtils.isStringContainsChChars( '$' )).toBe(false);
  expect(JsUtils.isStringContainsChChars( '123' )).toBe(false);
  expect(JsUtils.isStringContainsChChars( 'abc' )).toBe(false);
});
