angular.module("app").controller('authCtrl', function ($scope, $state) {


    var ref = 'https://dtcustoms.firebaseio.com/';
    var auth = new Firebase(ref);

    $scope.login = function() {
        auth.authWithPassword({
            email: $scope.username,
            password: $scope.password
        }, function(error, user) {
            if(error) {
                console.log(error);
            } else {
                $state.go('admin')
            }
        })
    }



    $('.message a').click(function () {
        $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
    });

});
