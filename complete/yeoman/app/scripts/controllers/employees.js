'use strict';

angular.module('yeomanApp')
  .controller('EmployeesCtrl', function ($scope) {
    $scope.employees = [
      {
        "id": 0,
        "firstName": "Rusty",
        "lastName": "Green",
        "sex": "male",
        "title": "Developer",
        "department": "Mobile Development",
        "startDate": "2011-10-31T18:24:22.261Z",
        "phone": "7178318869",
        "email": "rusty@rustygreen.com",
        "image": "http://1.bp.blogspot.com/-JDpHnTdEOas/T9jI6tAKBFI/AAAAAAAADQw/eR37B-_uv5o/s1600/silhouette-male-bust-md.png"
      },
      {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe",
        "sex": "female",
        "title": "Developer",
        "department": "Mobile Development",
        "startDate": "2009-10-21T18:24:22.261Z",
        "phone": "7178318869",
        "email": "rusty@rustygreen.com",
        "image": "http://1.bp.blogspot.com/-JDpHnTdEOas/T9jI6tAKBFI/AAAAAAAADQw/eR37B-_uv5o/s1600/silhouette-male-bust-md.png"
      },
      {
        "id": 1,
        "firstName": "Jane",
        "lastName": "Smith",
        "sex": "female",
        "title": "Boss",
        "department": "Marketing",
        "startDate": "2005-11-10T18:24:22.261Z",
        "phone": "7178318869",
        "email": "rusty@rustygreen.com",
        "image": "http://1.bp.blogspot.com/-JDpHnTdEOas/T9jI6tAKBFI/AAAAAAAADQw/eR37B-_uv5o/s1600/silhouette-male-bust-md.png"
      },
      {
        "id": 1,
        "firstName": "Bob",
        "lastName": "Smith",
        "sex": "male",
        "title": "Tester",
        "department": "Mobile Development",
        "startDate": "2001-8-20T18:24:22.261Z",
        "phone": "7178318869",
        "email": "rusty@rustygreen.com",
        "image": "http://1.bp.blogspot.com/-JDpHnTdEOas/T9jI6tAKBFI/AAAAAAAADQw/eR37B-_uv5o/s1600/silhouette-male-bust-md.png"
      },
      {
        "id": 1,
        "firstName": "Jeff",
        "lastName": "Miesemer",
        "sex": "male",
        "title": "Boss",
        "department": "Mobile Development",
        "startDate": "2001-8-20T18:24:22.261Z",
        "phone": "7178318869",
        "email": "rusty@rustygreen.com",
        "image": "http://1.bp.blogspot.com/-JDpHnTdEOas/T9jI6tAKBFI/AAAAAAAADQw/eR37B-_uv5o/s1600/silhouette-male-bust-md.png"
      },
      {
        "id": 1,
        "firstName": "Jamie",
        "lastName": "Muir",
        "sex": "male",
        "title": "Boss",
        "department": "Mobile Development",
        "startDate": "2001-8-20T18:24:22.261Z",
        "phone": "7178318869",
        "email": "rusty@rustygreen.com",
        "image": "http://1.bp.blogspot.com/-JDpHnTdEOas/T9jI6tAKBFI/AAAAAAAADQw/eR37B-_uv5o/s1600/silhouette-male-bust-md.png"
      }
    ];
  });
