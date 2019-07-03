var app = angular.module('myApp', []);

app.controller('AppCtrl', function ($scope, $http) {
  console.log("Running from controller");

  // route to get data from
  $http.get('/contactlist').then(function (response) {
    console.log("Received requested GET Data");

    $scope.contactlist = response.data;
  });

  $scope.addContact = function(){
    console.log($scope.contact);

    $http.post('/contactlist', $scope.contact).then(function(response){
      console.log("Received requested POST data");
      console.log(response.data);
    });
  }


});