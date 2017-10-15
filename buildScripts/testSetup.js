// This file isn't transpiled, so must use CommonJs and ES5

// Require babel to transpile before our test runs
require('babel-register')();

// Disabled webpack features that Mocha isn't understand
require.extensions['.css'] = function () {};
