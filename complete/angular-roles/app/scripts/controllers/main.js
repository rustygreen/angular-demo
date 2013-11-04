'use strict';

angular.module('angularjsOverviewApp')
  .controller('MainCtrl', function ($scope, Role) {
    $scope.selectedUsers = [];
    $scope.selectedRoles = [];

    $scope.roles = Role.query();

    $scope.$watch('selectedRoles', function (value, oldValue) {
      if (value && value !== oldValue) {
        angular.forEach($scope.selectedUsers, function (user) {
          user.roles = value;
        });
      }
    });

    $scope.$watch('selectedUsers', function (value, oldValue) {
      if (value && value !== oldValue && value.length) {
        $scope.selectedRoles = value;
//        angular.forEach($scope.selectedUsers, function(user){
//          user.roles = value;
//        });
      }
    });
  });
