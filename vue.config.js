// const BundleTracker=require("webpack-bundle-tracker");
//
// module.exports = {
//     publicPath: "https://admiring-colden-0ad582.netlify.com/",
//     outputDir: './dist/',
//
//     chainWebpack: config => {
//
//         config.optimization
//             .splitChunks(false)
//
//         config
//             .plugin('BundleTracker')
//             .use(BundleTracker, [{filename: '../frontend/webpack-stats.json'}])
//
//         config.resolve.alias
//             .set('__STATIC__', 'static')
//
//         config.devServer
//             .public('https://admiring-colden-0ad582.netlify.com')
//             .host('0.0.0.0')
//             .port(8080)
//             .hotOnly(true)
//             .watchOptions({poll: 1000})
//             .https(false)
//             .headers({"Access-Control-Allow-Origin": ["\*"]})
//             }
//         };