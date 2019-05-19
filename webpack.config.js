
const path = require('path'); //for joining the path elements
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'), //we use the dirname var to get current dirname
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/, //regex that determines on which files this rule apply
                exclude: /node_modules/ //does not need to run on the node-modules files
            }, {
                test: /\.s?css$/,
                // use: ['style-loader', 'css-loader', 'sass-loader']
                use: CSSExtract.extract({
                    use: [{loader: 'css-loader', options: {sourceMap: true}},
                          {loader: 'sass-loader', options: {sourceMap: true}}]
                })
            }]
        },
        plugins: [CSSExtract],
        devtool: isProduction ? 'source-map' : 'inline-source-map', // for debug, we get the actual src files we wrote and not the bundle file on comments & errors in the browser console
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
}

