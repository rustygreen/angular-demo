angular.module('usersRoles').factory('Role', function ($resource, roleConfig) {

  var defaults = angular.extend({
    url: '',
    params: {}
  }, roleConfig);

  return $resource(defaults.url, defaults.params);
});