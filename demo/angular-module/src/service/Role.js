angular.module('corporate').factory('Role', function ($resource, roleConfig) {
  'use strict';

  var defaults = angular.extend({
    url: '',
    params: {}
  }, roleConfig);

  return $resource(defaults.url, defaults.params);
});