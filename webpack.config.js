
let PATH_TO_YOUR_ENTRY_FILE = './src/index.ts';
let YOUR_DIST_FOLDER_PATH = './dist';
let PREFFERED_PORT = 9000
module.exports = {
  entry: PATH_TO_YOUR_ENTRY_FILE,
  devServer: {
    open: true,
    hot: true,
    static: YOUR_DIST_FOLDER_PATH,
    port: PREFFERED_PORT,
  },
  module: {
    rules: [
       {
          test: /\.(m?js|ts)$/,
          exclude: /(node_modules)/,
          use:  [`swc-loader`]
        }
    ]
  },
  resolve: {
    extensions: [`.js`, `.ts`],
  }
}