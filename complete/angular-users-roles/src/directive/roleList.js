angular.module('usersRoles').directive('roleList', function ($filter, Role) {
  'use strict';

  return {
    restrict: 'EA',
    scope: {
      //roles: '=',
      selectedRoles: '='
      //user: '='
    },
    replace: true,
    template:
      '<table class="table table-condensed table-hover">' +
      '<tr ng-repeat="role in roles">' +
        '<td>' +
          '<label>' +
            '<input type="checkbox" ng-model="role.active" ng-change="onChange(role)"> {{role.name}}' +
              '</label>' +
            '</td>' +
          '<td>' +
            '<i class="glyphicon glyphicon-question-sign" title="{{role.description}}"></i>' +
            '</td>' +
          '</tr>' +
        '</table>' +
      '</table>',

    link: function (scope, element, attr) {
      var getRoleById = function (id) {
        var foundRole = null;
        angular.forEach(scope.roles, function (role) {
          if (role.id === id) {
            foundRole = role;
            return false;
          }
        });

        return foundRole;
      };

      scope.roles = Role.query();
      scope.onChange = function () {
        if (scope.selectedRoles || attr.selectedRoles) {
          scope.selectedRoles = $filter('filter')(scope.roles, { active: true });
        }
      };

      scope.$watch('selectedRoles', function (roles, oldRoles) {
        if (roles && roles !== oldRoles) {
          angular.forEach(scope.roles, function (role) {
            role.active = false;
          });



//          angular.forEach(roles, function (role) {
//            var rl = getRoleById(role.id);
//            if (rl) {
//              console.log(rl.id, rl.active);
//              rl.active = role.active;
//            }
//          });
        }
      });

//      attr.$observe('user', function (user) {
//        if (!user) {
//          return;
//        }
//
//        user.roles = user.roles || [];
//        angular.forEach(user.roles, function (role) {
//          var rl = getRoleById(role.id);
//          if (rl) {
//            rl.active = role.active;
//          }
//        });
//      });

//      scope.selectedRoles = scope.selectedRoles || [];
//
//      scope.$watch('selectedRoles', function (value, oldValue) {
//        if (value !== oldValue){
//          angular.forEach(value, function (role) {
//            var foundRole = getRoleById(role.id);
//            if (foundRole){
//              console.log('setting', role.id, role.active);
//              foundRole.active = role.active;
//            }
//          });
//        }
//      });
    }
  };
});