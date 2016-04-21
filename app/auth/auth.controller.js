angular.module("app").controller('authCtrl', function ($scope, $state, $q) {

    var ref = 'https://dtcustoms.firebaseio.com/';
    var auth = new Firebase(ref);

    $scope.login = function () {
        var deferred = $q.defer();
        auth.authWithPassword({
            email: $scope.username,
            password: $scope.password
        }, function (error, user) {
            if (error) {
                deferred.reject(error);
            } else {
                deferred.resolve(user)
            }
        });
        deferred.promise.then(function (dude) {
            $state.go('admin');
        });
    }



    $('.message a').click(function () {
        $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
    });

});
