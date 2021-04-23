# Laravel Mix Alias

Add aliases to your source files.

## Requirements

⚠️ ⚠️ Only use this package with Laravel Mix v5 and below! The alias function was added to the core of v6. ⚠️ ⚠️

## Installation

```
npm install laravel-mix-alias --save
```

or

```
yarn add laravel-mix-alias
```

## Usage

Your `webpack.mix.js` could look like this:

```js
const mix = require('laravel-mix');
require('laravel-mix-alias');

mix.alias({
    '@': '/resources/js',
    '~': '/resources/sass',
});
```

or add them one by one

```js
const mix = require('laravel-mix');
require('laravel-mix-alias');

mix.alias('@', '/resources/js');
mix.alias('~', '/resources/sass');
```

Now you can import sass files from the path you specified

```scss
@import "~/variables";
```

Or import scripts from the path you specified

```js
import '@/script.js';
```

## Author

Maxim Vanhove
Web developer at [Starring Jane](https://starringjane.com)

 [![Twitter Follow](https://img.shields.io/twitter/follow/MrMaximVanhove.svg?style=social&logo=twitter&label=Follow)](https://twitter.com/MrMaximVanhove)
