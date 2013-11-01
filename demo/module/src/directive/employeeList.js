angular.module('corporate').directive('employeeList', function ($filter, Employee) {
  'use strict';

  return {
    restrict: 'EA',
    scope: {
      selectedEmployees: '='
    },
    transclude: true,
    replace: true,
    template: '<div class="list-group">' +
                '<div class="list-group-item user" ng-class="{active:employee.active}" ng-repeat="employee in employees">' +
                  '<div class="row">' +
                    '<div class="col-lg-4 col-md-4 col-sm-4">' +
                    '<span class="thumbnail">' +
                    '<img class="img-responsive" src="{{employee.image}}" alt="...">' +
                    '</span>' +
                    '</div>' +
                    '<div class="col-lg-8 col-md-8 col-sm-8">' +
                    '<a href="" ng-click="onSelectionChange(employee)">' +
                    '<h4 class="list-group-item-heading">{{employee.firstName}} {{employee.lastName}}' +
                      '<small> {{employee.title}}</small>' +
                      '<i ng-show="employee.active" class="glyphicon glyphicon-check pull-right"></i>' +
                      '<i ng-hide="employee.active" class="glyphicon glyphicon-unchecked pull-right"></i>' +
                    '</h4>' +
                    '</a>' +
                    '<hr>' +
                    '<strong><i class="glyphicon glyphicon-briefcase"></i> Department: </strong>{{employee.department}}' +
                    '<br/>' +
                    '<strong><i class="glyphicon glyphicon-calendar"></i> Start Date: </strong>{{employee.startDate | date}} ({{employee.startDate | age}} years)' +
                    '<br/>' +
                    '<strong><i class="glyphicon glyphicon-phone"></i> Phone: </strong>{{employee.phone}}' +
                    '<br/>' +
                    '<strong><i class="glyphicon glyphicon-envelope"></i> Email: </strong>{{employee.email}}' +
                    '<br/>' +
                    '<div ng-transclude></div>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
              '</div>',

    link: function (scope, element, attr) {
      scope.employees = Employee.query();

      scope.onSelectionChange = function (employee) {
        if (attr.hasOwnProperty('singleSelection')) {
          angular.forEach(scope.employees, function (usr) {
            usr.active = (employee === usr && !employee.active);
          });
        } else {
          employee.active = !employee.active;
        }

        if (scope.selectedEmployees || attr.selectedEmployees) {
          scope.selectedEmployees = $filter('filter')(scope.employees, { active: true });
        }
      };
    }
  };
});