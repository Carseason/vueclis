const path = require('path')
const event = process.env.npm_lifecycle_event
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        port: 8080,
        proxy: "http://127.0.0.1:8201",
    },
    productionSourceMap: event == "build" ? false : true,
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            },
        },
    },
    transpileDependencies: event == "build" ? ["node_modules", "element-ui"] : []
}