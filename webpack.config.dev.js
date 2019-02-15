var path                    = require("path");
const HtmlWebpackPlugin     = require("html-webpack-plugin");
const WebpackMd5Hash        = require("webpack-md5-hash");
const CopyWebpackPlugin     = require("copy-webpack-plugin");
const CleanWebpackPlugin    = require("clean-webpack-plugin");

module.exports = {    
    mode: "development",  
    entry: {
        'app':          path.join(__dirname, "./src/app/main.ts"),
        'vendor':       path.join(__dirname, "./src/app/vendor.ts"),
        'polyfills':    path.join(__dirname, "./src/app/polyfills.ts")
    },    
    module: {
        rules: [
            {
                test:       /\.ts$/,                
                loader:     ["babel-loader","ts-loader"],
                exclude: [  /node_modules/]
            },                                    
            {
                test:   /\.css$/,
                use:    ["style-loader","css-loader"]
            }            
        ]
    },
    plugins: [
        new CleanWebpackPlugin("dist", {}),  
        new CopyWebpackPlugin([
            { 
                from:   'src/assets', 
                to:     'assets'
            }
        ]),
        new HtmlWebpackPlugin({ // Generates default index.html
            filename: 'index.html',            
            template: __dirname + '/src/index.html'
        }),          
        new WebpackMd5Hash()
    ],
    resolve: {        
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devtool: "source-map",
    devServer: {
        contentBase: './src'
    }
};