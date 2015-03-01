# Fabulous

[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Build status][travis-img]][travis-url]

Fabulous is a tiny, bare bones and kind of dumb highlighter for Node.js and the
browser.

It supports Internet Explorer 9+ and works with
[Browserify](http://browserify.org/).

## Installation

~~~ text
npm install fabulous
~~~

## Usage

### CLI

With the default JavaScript rules:

~~~
fabulous <input> <output>
~~~

### API

With the default JavaScript rules:

~~~ javascript
var fabulous = require('fabulous')

var str  = 'function foo() {}'
var code = fabulous(str)
// => "<span class="keyword">function</span> foo() {}"
~~~

You can also use your own custom (regexp) rules:

~~~ javascript
var fabulous = require('fabulous')

var str   = 'An apple, a banana and an orange.'
var words = fabulous(str, {
  fruit: /apple|banana|orange/g
})
// => "An <span class="fruit">apple</span>, a <span class="fruit">banana</span> and an <span class="fruit">orange</span>."
~~~

## Caveats

If an identical match with the exact same rule is present on the same line more
than once it'll only highlight the first occurrence:

~~~ javascript
var fabulous = require('fabulous')

var str  = 'var foo; var bar'
var code = fabulous(str)
// => "<span class="keyword">var</span> foo; var bar"
~~~

If something that matches a rule exists in another rule that rule will also be
wrapped:

~~~ javascript
var fabulous = require('fabulous')

var str  = "var str = 'function() {}'"
var code = fabulous(str)
// => "<span class="keyword">var</span> str = <span class="string">'<span class="keyword">function</span>() {}'</span>"
~~~

## Tests

[PhantomJS](http://phantomjs.org/) is required.

~~~ text
npm install
npm test
npm run browser
~~~

[npm-img]: https://img.shields.io/npm/v/fabulous.svg?style=flat-square
[npm-url]: https://npmjs.org/package/fabulous
[license-img]: http://img.shields.io/npm/l/fabulous.svg?style=flat-square
[license-url]: LICENSE
[travis-img]: https://img.shields.io/travis/gummesson/fabulous.svg?style=flat-square
[travis-url]: https://travis-ci.org/gummesson/fabulous
