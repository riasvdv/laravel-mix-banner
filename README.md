<p align="center">
<a href="https://www.npmjs.com/package/laravel-mix-banner"><img src="https://img.shields.io/npm/v/laravel-mix-banner.svg" alt="NPM"></a>
<a href="https://npmcharts.com/compare/laravel-mix-banner?minimal=true"><img src="https://img.shields.io/npm/dt/laravel-mix-banner.svg" alt="NPM"></a>
<a href="https://www.npmjs.com/package/laravel-mix-banner"><img src="https://img.shields.io/npm/l/laravel-mix-banner.svg" alt="NPM"></a>
</p>

# Laravel Mix Banner

This extension provides instant Webpack Banner support to your Mix (v2.1 and up) builds.

## Usage

First, install the extension.

```
npm install laravel-mix-banner --save-dev
```

Then, require it within your `webpack.mix.js` file, like so:

```js
let mix = require('laravel-mix');

require('laravel-mix-banner');

mix
    .js('resources/assets/js/app.js', 'public/js')
    .less('resources/assets/less/app.less', 'public/css')
    .banner({
        banner: (function () {
            return [
                '/**',
                ' * @project        Laravel Mix Banner',
                ' * @author         Rias',
                ' * @build          2018-03-17 17:00 GMT+1',
                ' * @release        0.1.1',
                ' *',
                ' */',
                '',
            ].join('\n');
        })(),
        raw: true,
    });
```

And you're done! Compile everything down with `npm run dev`.
