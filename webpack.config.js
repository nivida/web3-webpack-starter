const path = require('path');

module.exports = {
  resolve: {
    alias: {
      lodash: path.resolve(__dirname, "node_modules/lodash"),
      'bn.js': path.resolve(__dirname, "node_modules/bn.js"),
    }
  }
};