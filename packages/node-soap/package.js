Package.describe({
  name: 'chenroth:node-soap',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

// this instructs the package which npm modules to download
Npm.depends({
  'node-soap': '1.0.0'
  // other modules...
  });

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // this is the file where we would require the npm module and assign it to a global variable
  // you have to specify it's for server only, as Npm.require() doesn't exist in client
  api.addFiles('node-soap.js', 'server');

  // this is where we instruct the package which global variable to export to the project
  // you have to specify it's for server only, as npm modules don't apply to client
  api.export('SoapClient', 'server');
});
