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
                  '<h1 ng-if="yourName">Hello {{yourName | humanize}}!</h1>' +
                '</div>',

      link: function(){

      }
    };
  });