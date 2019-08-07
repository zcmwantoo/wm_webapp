const path = require("path");
const srcRoot = path.resolve(__dirname,"./src");
const devPath = path.resolve(__dirname,"dev");
const pageDir = path.resolve(srcRoot,"page");

module.exports = {
    entry : {

    },
    output : {

    },
    module : {
        // loader
        rules : [
            { test : /\.css$/ , use : ["style-loader","css-loader"] , include : srcRoot},
            { test : /\.scss$/ , use : ["style-loader","css-loader","sass-loader"],include : srcRoot}
        ]
    }
}