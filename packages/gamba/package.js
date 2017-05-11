Package.describe({
  name: "gamba"
});

Package.onUse( function(api) {

  api.use([
    'vulcan:core',
    'vulcan:theme-fuji',
    'vulcan:places',
    'vulcan:cloudinary',

    'fourseven:scss@4.5.0',
  ]);

  api.mainModule('server.js', 'server');
  api.mainModule('client.js', 'client');
  
  api.addFiles([
    'lib/stylesheets/style.scss'
  ], ['client']);

  api.addAssets([
    'lib/assets/markdown/about.md'
  ], ['server', 'client']);
  
});
