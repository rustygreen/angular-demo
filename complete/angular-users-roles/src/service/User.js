angular.module('usersRoles').factory('User', function ($resource, userConfig) {

  var defaults = angular.extend({
    url: '',
    params: {}
  }, userConfig);

  return $resource(defaults.url, defaults.params);
});