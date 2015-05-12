global.lio = require('..');
global.lioc = require('leash.io-client');
global.request = require('superagent');
global.should = require('should');

/**
 * Listen shortcut that fires a callback on an ephemeral port.
 */
global.listen = function (opts, fn) {
  if ('function' === typeof opts) {
    fn = opts;
    opts = {};
  }

  var e = global.lio.listen(null, opts, function() {
    fn(e.httpServer.address().port);
  });

  return e;
};
