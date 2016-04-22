angular.module('app').controller('adminCtrl', function ($scope, $firebaseArray, authData) {


    var baseUrl = "https://dtcustoms.firebaseio.com";
    var formInstance = new Firebase(baseUrl + "/messages");
    var logout = new Firebase(baseUrl)

    $scope.messages = $firebaseArray(formInstance);

    $scope.deleteAll = function() {
    var deleteRef = new Firebase('https://dtcustoms.firebaseio.com/messages');

    deleteRef.remove();
    // All data at the database location for user 'fred' has been deleted
    // (including any child data)

    };
}); 