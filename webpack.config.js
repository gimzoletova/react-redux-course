const webpack = require('webpack');
const path = require('path'); //for joining the path elements
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'developement';
if (process.env.NODE_ENV === 'developement') {
    require('dotenv').config({path: '.env.developement'})//creates env_vars for firebase from the file that keeps them: .env.developement. 
}//                                                         can do the same for test and prod when making different db's for them

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'), //we use the dirname var to get current dirname
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
                    fallback: 'style-loader', 
                    use: [{loader: 'css-loader', options: {sourceMap: true}},
                          {loader: 'sass-loader', options: {sourceMap: true}}]
                })
            }]
        },
        plugins: [
            new ExtractTextPlugin('styles.css'),
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map', // for debug, we get the actual src files we wrote and not the bundle file on comments & errors in the browser console
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
}

