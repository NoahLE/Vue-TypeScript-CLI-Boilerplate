const path = require("path");

module.exports = {
    // where to output the build files
    outputDir: 'derp',

    // where to put the static assets (js / img / font / etc)
    // assetsDir: 'derp-rs',
    
    // other settings 
    lintOnSave: true,
    productionSourceMap: false,

    // use the full build with in-browser compiler?
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    // we will probably start using this when we use templates
    runtimeCompiler: false,

    // tweak internal webpack configuration.
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => {},

    configureWebpack: {
        entry: {
            fileone: "./src/main",
            filetwo: "./src/dash"
        },
        output: {
            // path: path.resolve(__dirname, "derpy"),
            filename: "./js/[name].js"
        }
    },

    css: {
        // extract all CSS into a single file for production
        extract: true,

        // enable CSS source maps
        sourceMap: false,

        // options to pass to the CSS leaders
        loaderOptions: {},

        // CSS modules - cool feature but not used at this time
        modules: false
    },

    // use thread-loader for babel & TS in production build
    parallel: require('os').cpus().length > 1,

    // options for progressive web app functionality
    // pwa: {},

    // webpack development server settings
    devServer: {
        open: process.platform === 'darwin',
        disableHostCheck: false,
        host: '0.0.0.0',
        port: 8075,
        https: false,
        // HMR?
        hotOnly: false,
        proxy: null,
        // before: app => {}
    },

    // 3rd party plugin options
    pluginOptions: {

    }
};