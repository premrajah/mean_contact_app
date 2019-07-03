var app = angular.module('myApp', []);

app.controller('AppCtrl', function ($scope, $http) {
  console.log("Running from controller");

  // route to get data from
  $http.get('/contactlist').then(function (response) {
    console.log("Received requested Data");

    $scope.contactlist = response.data;
  });




});