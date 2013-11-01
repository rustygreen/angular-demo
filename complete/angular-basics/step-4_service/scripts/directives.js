'use strict';

angular.module('demoApp')
  .directive('greeter', function () {
    return {
      restrict: 'EA',
      replace: true,
      template: '<div>' +
                  '<label>Name:</label>' +
                  '<input type="text" ng-model="yourName" placeholder="Enter a name here">' +
                  '<hr>' +
                  '<h1 ng-if="yourName">' +
                    'Hello {{yourName | humanize}}!' +
                  '</h1>' +


        '<label>Password:</label>' +
        '<input type="text" ng-model="password" placeholder="Enter your super secret password">' +
        '<input><button>Authenticate</button>' +

                '</div>',

      link: function($scope, authenticator){
        $scope.authenticated = authenticator.authenticate($scope.password);
      }
    };
  });