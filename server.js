#!/usr/bin/env node
var debug = require('debug')('kittenStuffs');
var app = require('../app');

app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000);
var ip = process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0"
var server = app.listen(app.get('port'), ip, function() {
  debug('Express server listening on port ' + server.address().port);
});
