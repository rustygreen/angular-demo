'use strict';

angular.module('yeomanApp')
  .directive('employeeList', function () {
    return {
      // Isolated scope.
      scope:{
        employees: '='
      },
      template: '<h1>Employees</h1>\n<div class="row">\n    <div class="input-group pull-right search-item">\n        <input type="text" class="form-control" placeholder="Search" ng-model="search">\n        <span class="input-group-addon glyphicon glyphicon-search"></span>\n    </div>\n</div>\n\n<div class="row">\n    <div class="list-group">\n        <div class="list-group-item" ng-repeat="employee in employees | filter:search">\n            <div class="row">\n                <div class="col-lg-4">\n                    <span class="thumbnail">\n                        <img class="img-responsive" src="{{employee.image}}" alt="">\n                    </span>\n                </div>\n                <div class="col-lg-8">\n                    <h4 class="list-group-item-heading">{{employee.firstName}} {{employee.lastName}}\n                        <small> {{employee.title}}</small>\n                    </h4>\n                    <hr>\n                    <strong><i class="glyphicon glyphicon-briefcase"></i> Department: </strong>{{employee.department}}\n                    <br/>\n                    <strong><i class="glyphicon glyphicon-calendar"></i> Start Date: </strong>{{employee.startDate | date}}\n                    <br/>\n                    <strong><i class="glyphicon glyphicon-phone"></i> Phone: </strong>{{employee.phone}}\n                    <br/>\n                    <strong><i class="glyphicon glyphicon-envelope"></i> Email: </strong>{{employee.email}}\n                    <br/>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
