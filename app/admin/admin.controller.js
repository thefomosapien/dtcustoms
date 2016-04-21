angular.module('app').controller('adminCtrl', function ($scope, $firebaseArray, authData) {


    var baseUrl = "https://dtcustoms.firebaseio.com";
    var formInstance = new Firebase(baseUrl + "/messages");
    var logout = new Firebase(baseUrl)
    
    $scope.messages = $firebaseArray(formInstance);

    var logoutFunc = function($scope) {
        logout.$unauth();
    }

}); 