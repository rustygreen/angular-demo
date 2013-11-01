angular.module('usersRoles').directive('userList', function ($filter, User) {
  'use strict';

  return {
    restrict: 'EA',
    scope: {
      //users: '=',
      selectedUsers: '='
    },
    transclude: true,
    replace: true,
    template: '<div class="list-group">' +
                '<a href="" ng-click="onSelectionChange(user)" class="list-group-item user"' +
                'ng-class="{active:user.active}" ng-repeat="user in users">' +

                  '<div class="row">' +
                    '<div class="col-lg-4 col-md-4 col-sm-4">' +
                    '<span class="thumbnail">' +
                    '<img class="img-responsive" src="{{user.image}}" alt="...">' +
                    '</span>' +
                    '</div>' +
                    '<div class="col-lg-8 col-md-8 col-sm-8">' +
                    '<h4 class="list-group-item-heading">{{user.firstName}} {{user.lastName}}' +
                    '<small> {{user.title}}</small>' +
                    '<i ng-show="user.active" class="glyphicon glyphicon-check pull-right"></i>' +
                    '<i ng-hide="user.active" class="glyphicon glyphicon-unchecked pull-right"></i>' +
                    '</h4>' +
                    '<hr>' +
                    '<strong><i class="glyphicon glyphicon-briefcase"></i> Department: </strong>{{user.department}}' +
                    '<br/>' +
                    '<strong><i class="glyphicon glyphicon-calendar"></i> Start Date: </strong>{{user.startDate | date}} (4 years)' +
                    '<br/>' +
                    '<strong><i class="glyphicon glyphicon-phone"></i> Phone: </strong>{{user.phone}}' +
                    '<br/>' +
                    '<strong><i class="glyphicon glyphicon-envelope"></i> Email: </strong>{{user.email}}' +
                    '<br/>' +
      '<div ng-transclude></div>' +
                    '</div>' +
                  '</div>' +
                '</a>' +
              '</div>',

    link: function (scope, element, attr) {
      scope.users = User.query();

      scope.onSelectionChange = function (user) {
        if (attr.hasOwnProperty('singleSelection')){
          angular.forEach(scope.users, function (usr) {
            usr.active = (user === usr && !user.active);
          });
        } else {
          user.active = !user.active;
        }

        if (scope.selectedUsers || attr.selectedUsers) {
          scope.selectedUsers = $filter('filter')(scope.users, { active: true });
        }
      };
    }
  };
});