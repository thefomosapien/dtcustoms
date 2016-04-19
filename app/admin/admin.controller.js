angular.module('app').controller('adminCtrl', function ($scope, $firebaseArray) {


var baseUrl = "https://dtcustoms.firebaseio.com";
var formInstance = new Firebase(baseUrl + "/messages");
$scope.messages = $firebaseArray(formInstance);

});