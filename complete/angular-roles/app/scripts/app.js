'use strict';

angular.module('angularjsOverviewApp', ['ngRoute', 'ngResource', 'ngAnimate', 'ngSanitize', 'corporate'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .value('employeeConfig', { url: 'data/users.json' })

  .value('roleConfig', { url: 'data/roles.json' });
