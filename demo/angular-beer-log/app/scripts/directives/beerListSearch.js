angular.module('angularjsEcosystemApp').directive('beerDetails', function () {
  'use strict';

  return {
    restrict: 'EA',
    scope: {
      beer: '='
    },
    replace: true,
    template: '<div>\n    <div class="row">\n        <div class="btn-group pull-right search-item">\n            <button type="button" class="btn btn-default" ng-class="{\'btn-primary\': showSettings}" ng-click="showSettings=!showSettings"><i class="glyphicon glyphicon-cog"></i></button>\n        </div>\n    \n        <div class="input-group pull-right search-item">\n            <input type="text" class="form-control" placeholder="Search" ng-model="search">\n            <span class="input-group-addon glyphicon glyphicon-search"></span>\n        </div>\n    \n        <div class="btn-group pull-right search-item">\n            <button type="button" class="btn btn-default" ng-class="{\'btn-primary\': showActive}" ng-click="showActive=!showActive"><i class="glyphicon glyphicon-inbox"></i> Archived</button>\n            <button type="button" class="btn btn-default" ng-class="{\'btn-primary\': showLiked}" ng-click="showLiked=!showLiked"><i class="glyphicon glyphicon-inbox"></i> Liked</button>\n            <button type="button" class="btn btn-default" ng-class="{\'btn-primary\': showHated}" ng-click="showHated=!showHated"><i class="glyphicon glyphicon-inbox"></i> Hated</button>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-lg-6 col-lg-offset-6 ">\n            <div class="panel panel-warning" ng-show="showSettings">\n                <div class="panel-heading"><i class="glyphicon glyphicon-cog"></i> Settings</div>\n                <div class="panel-body">\n                    <input type="checkbox" ng-model="autoArchive"> Automatically Archive After Rating\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',

    link: function () {
    }
  };
});