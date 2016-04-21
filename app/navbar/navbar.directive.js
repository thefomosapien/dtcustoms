angular.module('app').directive('navbarDir', function ($window) {

    return {
        restrict: 'E',
        templateUrl: 'navbar/navbar.html',
        link: function (scope, element, attrs) {
                    angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 313) {
                 scope.applyClass = true;
             } else {
                 scope.applyClass = false;
             }
            scope.$apply();
        });
        }
    };

})