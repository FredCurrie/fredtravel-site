
const path = require("path");
module.exports = {
    entry: "./app/assets/scripts/app.js",
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "App.js"
    },
    module: {
        rules: [ // use to be loaders but is now "rules:"
                {
                    loaders: "babel-loader", // need to have -loader after babel
                    query: {
                        presets: ["es2015"]
                    },
                    test: /\.js$/,
                    exclude: /node_modules/
            }
        ]
    }
}

/*const path = require('path');

module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "App.js"
    },
    
    module: {
        loaders: [
            {
                loader: 'babel',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
} */

