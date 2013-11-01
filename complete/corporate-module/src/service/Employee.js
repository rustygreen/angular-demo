angular.module('corporate').factory('Employee', function ($resource, employeeConfig) {
  'use strict';

  var defaults = angular.extend({
    url: '',
    params: {}
  }, employeeConfig);

  return $resource(defaults.url, defaults.params);
});