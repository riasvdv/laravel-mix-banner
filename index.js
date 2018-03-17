let mix = require('laravel-mix');
let webpack = require('webpack');

class Banner {
    register(bannerConfig) {
        this.bannerConfig = bannerConfig;
    }

    webpackPlugins() {
        return new webpack.BannerPlugin(this.bannerConfig);
    }
}

mix.extend('banner', new Banner());
