# Laravel Mix Banner

This extension provides instant Webpack Banner support to your Mix (v2.1 and up) builds.

## Usage

First, install the extension.

```
npm install laravel-mix-banner
```

Then, require it within your `webpack.mix.js` file, like so:

```js
let mix = require('laravel-mix');

require('laravel-mix-banner');

mix
    .js('resources/assets/js/app.js', 'public/js')
    .less('resources/assets/less/app.less', 'public/css')
    .banner(config);
```

And you're done! Compile everything down with `npm run dev`.
