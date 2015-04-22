Meteor.startup (function () {
  WebApp.addHtmlAttributeHook( function (request) { return {'lang' : 'pt-BR', 'dir' : 'ltr'} });
});