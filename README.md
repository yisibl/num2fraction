# num2fraction

[![Build Status](https://travis-ci.org/yisibl/num2fraction.svg)](https://travis-ci.org/yisibl/num2fraction) 
[![NPM Downloads](https://img.shields.io/npm/dm/num2fraction.svg?style=flat)](https://www.npmjs.com/package/num2fraction) 
[![NPM Version](http://img.shields.io/npm/v/num2fraction.svg?style=flat)](https://www.npmjs.com/package/num2fraction) 
[![License](https://img.shields.io/npm/l/num2fraction.svg?style=flat)](http://opensource.org/licenses/MIT) 

> Number to fraction

## Installation

```console
npm install num2fraction
```

## Usage

```js
var n2f = require('num2fraction')

console.log(n2f(0))            // => 0
console.log(n2f(.2))           // => 1/5
console.log(n2f(1.3))          // => 13/10
console.log(n2f(1.4))          // => 7/5
console.log(n2f(1.5))          // => 3/2
console.log(n2f(2))            // => 2/1
console.log(n2f(3))            // => 3/1
console.log(n2f('3em'))        // => 3/1
console.log(n2f('1.5px'))      // => 3/2
```

## Changelog

### V1.0.0

> First release.

## License

[MIT](LICENSE)
