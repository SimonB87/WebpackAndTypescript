# Webpack and Typescript notes

## Set Up
- initialize TS: `tsc --init`
- initialize npm: `npm init`
  - Instal dependancies to development section: `npm install webpack webpack-cli ts-loader -D`
    - Webpack CLI allows us to run webpack commands from command line
    - TS-loader helps us ho to compile TS to JS
- Instal TS like a local development dependancy: `npm install typescript -D`
- We need to create a webpack config file: `webpack.config.js`

## Webpack.config.js
- Comments in the file itslef

## Build command
- We added a build command for Webpack in the package.json file
  - "build": "webpack",
  - run in terminal in the folder with the repository: `npm run build`
  - 10:26 video 3

## Webpack Development Server
- We want to install the Webpack Development Server `npm install webpack-dev-server -D`
- Add a new script to run the server `"serve": "webpack serve",`
- Dev server ca not rebuild the project
  - Specify the public in output to recompile automatically: `publicPath: 'public',`
  - Note: we still I need to terminate the serve function, run `npm run build` and run `npm run serve` for it to work.

## Adding module files
- Webpack doest know how to resolve adding module .js files
- Add a resolve property to webpack config js file : `resolve: { extensions: ['.ts', '.js'] },`

# Source map
- this creatd a link between our public nad src files
- enables in ts config: `"sourceMap": true,`
- in webpack config js file enable: `devtool: 'eval-source-map',`