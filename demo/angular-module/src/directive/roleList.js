angular.module('corporate').directive('roleList', function ($filter, Role) {
  'use strict';

  return {
    restrict: 'EA',
    scope: {
      selectedRoles: '='
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
      scope.roles = Role.query();
      scope.onChange = function () {
        if (scope.selectedRoles || attr.selectedRoles) {
          scope.selectedRoles = $filter('filter')(scope.roles, { active: true });
        }
      };
    }
  };
});