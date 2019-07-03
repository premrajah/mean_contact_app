var app = angular.module('myApp', []);


app.controller('AppCtrl', function($scope) {
  console.log("Running from controller");

  person1 = {
    name: "Prem Rajah",
    email: "prem@rajah.com",
    number: "07595 400 243"
  }
  person2 = {
    name: "James Bond",
    email: "james@bond.com",
    number: "07595 123 456"
  }
  person3 = {
    name: "John Smith",
    email: "john@smith.com",
    number: "07595 789 654"
  }

  var contactList = [person1, person2, person3];

  $scope.contactList = contactList;
});

