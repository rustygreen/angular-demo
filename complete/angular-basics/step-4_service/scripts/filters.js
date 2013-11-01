'use strict';

angular.module('demoApp')
  .filter('humanize', function () {
    return function (input) {
      var words = input.split(' ');
      angular.forEach(words, function (word, i) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      });

      return words.join(' ');
    };
  });