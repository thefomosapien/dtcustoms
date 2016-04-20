angular.module("app").controller('navbarCtrl', function($window) {
    
angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 100) {
                 element.addClass('min');
                 console.log('Scrolled below header.');
             } else {
                 element.removeClass('min');
                 console.log('Header is in view.');
             }
        });


});