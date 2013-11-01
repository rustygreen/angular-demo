angular.module('corporate').filter('age', function () {
  'use strict';

  return function (fromDate, toDate) {
    var elapsed = (toDate ? new Date(toDate) : new Date()) - new Date(fromDate);
    var sec = elapsed * 0.001;
    return Math.floor(sec / 31536000);
  };
});