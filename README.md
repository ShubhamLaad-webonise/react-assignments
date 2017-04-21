# React-Setup
Beginners can clone this repository and start working on it.

Requirements & Things to do:-

1.) You have to install Node and NPM on your system.

2.) Clone this repository in a folder.

3.) Run a command on terminal "npm install".

4.) It will automatically install packages which are present in package.json file.

5.) Run a command on terminal "npm start". It will run the application on your browser.

6.) I have used PORT 8080, so you have to simply run on browser "http://localhost:8080"

NOTE: You can change the PORT in web.config.js file.


For sass
refer this link
https://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html

1>To compile SASS files, you need a SASS loader of course, but also a CSS and a style loaders. Indeed, Webpack understands only JS. Basically explained, when we write a require('style.scss'), SASS loader turns it into style.css, which should then be turned into JavaScript with CSS loader, and finally embedded as styles using the style loader.

=> npm install --save-dev sass-loader css-loader style-loader
=> npm install --save sass-loader css-loader style-loader (run both commands)

This will add sass-loader css-loader style-loader versions in your package.json

2>As usual, add a new loader into our configuration:

            {
                test: /\.sass$/,
                loaders: ['style', 'css', 'sass']
            }

3> For other user they only need to run
=> npm install -d
for installing all new dependencies



Upgrade package.jason dependencies

1>Installation
$npm install -g npm-check-updates

2>Usage
Show any new dependencies for the project in the current directory:
$ncu

3>Upgrade
$ ncu -u
You can include or exclude specific packages using the --filter and --reject options. They accept strings, comma-delimited lists, or regular expressions:

#Upgrade webpack version 2

output path should be absolute
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },

Loaders change
Use babel-loader in place of babel
Change syntex of style sass css and other loaders
        {
          test: /\.sass$/,
          use: [
              'style-loader', // creates style nodes from JS strings
              'css-loader', // translates CSS into CommonJS
              'sass-loader' // compiles Sass to CSS]
            ]
        }
