'use strict';

angular.module('demoApp')
  .service('authenticator', function () {
    var superSecretSafePassword = 'password';

    return {
      authenticate: function(password){
        return password = superSecretSafePassword;
      }
    };
  });