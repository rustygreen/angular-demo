'use strict';

angular.module('angularjsEcosystemApp').controller('MainCtrl', function ($window, $scope, angularFire, firebaseUrl) {
  angularFire(firebaseUrl, $scope, 'beers', []);
});