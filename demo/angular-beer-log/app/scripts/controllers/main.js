'use strict';

angular.module('angularjsEcosystemApp').controller('MainCtrl', function ($scope) {
  $scope.beers = [
    {
      "name": "Guinness Draught",
      "brewery": "Guinness",
      "type": "Stout",
      "image": "http://gigfy.com/GreatGuinness.jpg",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "likes": 0,
      "hates": 0
    },
    {
      "name": "Boston Lager",
      "brewery": "Boston Beer Company",
      "type": "Lager",
      "image": "http://www.chow.com/blog-media/2012/02/106973_StoryInline_220x300_SA_BostonLager.jpg",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "likes": 0,
      "hates": 0
    },
    {
      "name": "Guinness Draught",
      "brewery": "Guinness",
      "type": "Stout",
      "image": "http://gigfy.com/GreatGuinness.jpg",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "likes": 0,
      "hates": 0
    },
    {
      "name": "Boston Lager",
      "brewery": "Boston Beer Company",
      "type": "Lager",
      "image": "http://www.chow.com/blog-media/2012/02/106973_StoryInline_220x300_SA_BostonLager.jpg",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "likes": 0,
      "hates": 0
    }
  ];
});