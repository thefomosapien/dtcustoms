angular.module("app").controller('authCtrl', function ($scope) {


    var ref = ('https://dtcustoms.firebaseio.com/');
    var auth = new Firebase(ref);
    var usersRef = new Firebase(ref + 'users/');
    var users = $firebaseArray(usersRef);


    // Create a callback which logs the current auth state
    function authDataCallback(authData) {
        if (authData) {
            console.log("User " + authData.uid + " is logged in with " + authData.provider);
        } else {
            console.log("User is logged out");
        }
    }
    // Register the callback to be fired every time auth state changes
    var ref = new Firebase("https://dtcustoms.firebaseio.com");
    ref.onAuth(authDataCallback);







    $('.message a').click(function () {
        $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
    });

});
