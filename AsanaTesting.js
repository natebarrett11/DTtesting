var asana = require('asana');

// replace with your personal access token. 
var personalAccessToken = '0/8101a7d35f928813d91f17c53e3cfd0e';

// Construct an Asana client
var client = asana.Client.create().useAccessToken(personalAccessToken);

// Get your user info
client.users.me()
  .then(function(me) {
    // Print out your information
    console.log('Hello world! ' + 'My name is ' + me.name + ' and my primary Asana workspace is ' + me.workspaces[0].name + '.');
});
