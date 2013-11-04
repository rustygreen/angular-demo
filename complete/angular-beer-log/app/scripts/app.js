'use strict';

angular.module('angularjsEcosystemApp', ['ngRoute', 'ngResource', 'ngAnimate', 'ngSanitize', 'firebase'])
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

  .value('firebaseUrl', 'https://beer-list.firebaseio.com/');