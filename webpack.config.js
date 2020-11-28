const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'ts-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    publicPath: 'public',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};
// * webpack setup

// - we need to define to the webpack the source and public files
// - entry is the first file it looks into
// - output - set up for output, we define here the filename and the absolute path
//   - for the path we need to import a node module for path (path module above)
//     - '__dirname' looks at where the current directory is, 'public' put the public folder in the end
// - we need to tell webpack to compile 'index.ts' to 'bundle.js', we do this with the 'module' property
//   - module just tells node.js that there is a file somewhere in the project
//   - we put here a test, which tests every file, if the file passes the test, then it does something.
//     - the test is a regex, that checks if the file is a '.ts' file
//   - we specify that we want to compile just .ts file in the source folder (include: [path.resolve(__dirname, 'source')])