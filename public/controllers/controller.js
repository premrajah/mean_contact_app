var app = angular.module('myApp', []);

app.controller('AppCtrl', function ($scope, $http) {
  console.log("Running from controller");

  // Function to refresh the page
  var refresh = function () {
    // route to get data from
    $http.get('/contactlist').then(function (response) {
      console.log("Received requested GET Data");

      $scope.contactlist = response.data;
    }).catch(function (err) {
      console.log("An error occurred: " + err);
    });
  }
  refresh();

  $scope.addContact = function () {
    console.log($scope.contact);

    if ($scope.myForm.$valid) {
      $http.post('/contactlist', $scope.contact).then(function (response) {
        console.log("Received requested POST data");
        console.log(response.data);
        refresh();
        $scope.contact = ''; // clear input boxes
      }).catch(function (err) {
        console.log("An error occurred: " + err);
      });
    }
  }

  $scope.remove = function (id) {
    console.log(id);
    $http.delete('/contactlist/' + id).then(function (response) {
      console.log("Received requested DELETE data " + response.data.deletedCount);
      refresh();
    }).catch(function (err) {
      console.log("An error occurred: " + err);
    }); // send id to server api
  }


});