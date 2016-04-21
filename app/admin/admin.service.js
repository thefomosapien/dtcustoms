angular.module('app').service('adminService', function ($firebaseAuth) {

    var myFirebaseRef = new Firebase("https://dtcustoms.firebaseio.com/");

    var ref = 'https://dtcustoms.firebaseio.com/';
    var auth = new Firebase(ref);
    var authRef = $firebaseAuth(auth);
    
    this.auth = function() {
        return authRef;
    }


});

