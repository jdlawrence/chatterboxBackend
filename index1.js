var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();

var api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/chatterbox', // Connection string for your MongoDB database
  // cloud: '/home/myApp/cloud/main.js', // Absolute path to your Cloud Code
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: 'hackreactor',
  // masterKey: 'hackreactor', // Keep this key secret!
  masterKey: '', // Keep this key secret!
  restAPIKey: 'hackreactor',
  // fileKey: 'optionalFileKey',
  serverURL: 'http://localhost:1339/parse' // Don't forget to change to https if needed
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

app.get('/', function(req, res) {
  res.end('common');
});

app.listen(1339, function() {
  console.log('parse-server-example running on port 1339.');
});