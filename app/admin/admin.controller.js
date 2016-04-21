angular.module('app').controller('adminCtrl', function ($scope, $firebaseArray, authData) {


var baseUrl = "https://dtcustoms.firebaseio.com";
var formInstance = new Firebase(baseUrl + "/messages");
$scope.messages = $firebaseArray(formInstance);

var logout = new Firebase(baseUrl)
logout.$unauth();

});