angular.module('angularjsEcosystemApp').directive('beerList', function () {
  'use strict';

  return {
    restrict: 'EA',
    scope: {
      beers: '=',
      search: '@',
      autoArchive: '@'
    },
    transclude: true,
    replace: true,
    template: '<div class="list-group beer-log">\n\n    <div class="add-beer-container">\n        <button ng-hide="addBeer" ng-click="addBeer=true" class="btn btn-success"><i class="glyphicon glyphicon-plus"></i> Add Beer</button>\n        <form ng-show="addBeer" role="form">\n            <div class="form-group">\n                <label>Beer Name</label>\n                <input type="text" required class="form-control" placeholder="Enter Beer Name" ng-model="newBeer.name">\n            </div>\n            <div class="form-group">\n                <label>Beer Type</label>\n                <input type="text" required class="form-control" placeholder="Enter Beer Type" ng-model="newBeer.type">\n            </div>\n            <div class="form-group">\n                <label>Beer Description</label>\n                <input type="text" class="form-control" placeholder="Enter Beer Description" ng-model="newBeer.description">\n            </div>\n            <div class="form-group">\n                <label>Beer Image Url</label>\n                <input type="text" class="form-control" placeholder="Enter Beer Name" ng-model="newBeer.image">\n            </div>\n\n            <button class="btn btn-danger" ng-click="addBeer=false"><i class="glyphicon glyphicon-remove"></i> Cancel</button>\n            <button class="btn btn-success" ng-disabled="form.$invalid" ng-click="saveBeer()"><i class="glyphicon glyphicon-floppy-disk"></i> Save Beer</button>\n        </form>\n    </div>\n\n    <div class="list-group-item beer" ng-class="{like: beer.likes>beer.hates, hate: beer.hates>beer.likes}" ng-repeat="beer in beers | filter:search"\n         ng-show="!beer.archived">\n        <h4 class="list-group-item-heading">{{beer.name}}\n            <small>{{beer.type}}</small>\n        </h4>\n\n        <div class="row">\n            <div class="col-lg-1 col-md-1 col-sm-4">\n                            <span class="thumbnail">\n                                <img class="img-responsive" src="{{beer.image}}" alt="...">\n                            </span>\n            </div>\n            <div class="col-lg-11 col-md-11 col-sm-8">\n\n                <div class="btn-group btn-group-lg pull-right">\n                    <button type="button" ng-click="like(beer)" class="btn btn-success">\n                        <i class="glyphicon glyphicon-thumbs-up"></i> Like ({{beer.likes}})\n                    </button>\n                    <button type="button" ng-click="hate(beer)" class="btn btn-danger">\n                        <i class="glyphicon glyphicon-thumbs-down"></i> Hate ({{beer.hates}})\n                    </button>\n                </div>\n\n                <strong>Brewery: </strong>{{beer.brewery}}\n                <br/>\n                <strong>Beer Type: </strong>{{beer.type}}\n\n                <p class="list-group-item-text">{{beer.description}}</p>\n\n                <div class="btn-group btn-group-sm">\n                    <button type="button" ng-click="remove(beer)" class="btn btn-default"><i\n                            class="glyphicon glyphicon-trash"></i> Delete\n                    </button>\n                    <button ng-hide="beer.archived" type="button" ng-click="beer.archived=true" class="btn btn-default"><i\n                            class="glyphicon glyphicon-inbox"></i> Archive\n                    </button>\n                    <button ng-show="beer.archived" type="button" ng-click="beer.archived=false" class="btn btn-default"><i\n                            class="glyphicon glyphicon-inbox"></i> Un-Archive\n                    </button>\n                    <a href="http://www.google.com/search?q={{beer.name}}&btnI" target="_blank" class="btn btn-default"><i\n                            class="glyphicon glyphicon-question-sign"></i> Info\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',

    link: function (scope) {
      var onRated = function (beer) {
        if (scope.autoArchive === true || scope.autoArchive === 'true') {
          beer.archived = true;
        }
      };

      scope.settings = {
        autoArchive: false
      };

      scope.remove = function (beer) {
        var index = scope.beers.indexOf(beer);
        scope.beers.splice(index, 1);
      };

      scope.like = function (beer) {
        beer.likes = beer.likes || 0;
        beer.likes++;
        onRated(beer);
      };

      scope.hate = function (beer) {
        beer.hates = beer.likes || 0;
        beer.hates++;
        onRated(beer);
      };

      scope.saveBeer = function () {
        if (scope.newBeer){
          scope.beers.push(scope.newBeer);
        }

        scope.addBeer = false;
        scope.newBeer = null;
      };
    }
  };
});