var app = angular.module('myApp', []);

app.controller('AppCtrl', function ($scope, $http) {
  console.log("Running from controller");

  // Function to refresh the page
  var refresh = function () {
    // route to get data from
    $http.get('/contactlist')
      .then(function (response) {
        console.log("Received requested GET Data");

        $scope.contactlist = response.data;
      })
      .catch(function (err) {
        console.log("AppCtrl - An error occurred: " + err);
      });
  }
  refresh();

  $scope.addContact = function () {
    console.log("AddContact Info: " + $scope.contact);

    if ($scope.myForm.$valid) {
      $http.post('/contactlist', $scope.contact)
        .then(function (response) {
          console.log("Received requested POST data");
          console.log(response.data);
          refresh();
          ClearInputFields();
        })
        .catch(function (err) {
          console.log("AddContact - An error occurred: " + err);
        });
    }
  }
  // end addContact()

  $scope.remove = function (id) {
    console.log("Remove id: " + id);
    $http.delete('/contactlist/' + id)
      .then(function (response) {
        console.log("Received requested DELETE data " + response.data.deletedCount);
        refresh();
      })
      .catch(function (err) {
        console.log("REMOVE - An error occurred: " + err);
      });
  }
  // end remove()

  $scope.edit = function (id) {
    console.log("Edit id: " + id)

    $http.get('/contactlist/' + id)
      .then(function (response) {
        $scope.contact = response.data; // put response into input boxes
        refresh();
      })
      .catch(function (err) {
        console.log("EDIT - An error occurred: " + err);
      });
  };
  // end edit()

  $scope.update = function () {
    console.log("Update info: " + $scope.contact._id);

    $http.put('/contactlist/' + $scope.contact._id, $scope.contact)
      .then(function (response) {
        refresh();
        ClearInputFields();
      })
      .catch(function (err) {
        console.log("PUT - An error occurred: " + err);
      });;

  }
  // end update()

  function ClearInputFields() {
    $scope.contact.name = ''; 
    $scope.contact.email = ''; 
    $scope.contact.number = ''; 
  }


});