// ```
// server.js
// (c) 2016 David Newman
// david.r.niciforovic@gmail.com
// server.js may be freely distributed under the MIT license
// ```

// *server.js*

// Require babel hook included to load all subsequent files required by node
// with the extensions .es6, .es, .jsx, .js and transpile them with babel.
// This will also automatically require the polyfill.
'use strict';
require("babel-register");

// Load server configuration
exports = module.exports = require('./app-server');
