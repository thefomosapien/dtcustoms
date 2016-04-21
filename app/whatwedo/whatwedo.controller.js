angular.module("app").controller('whatwedoCtrl', function ($scope, whatwedoService) {

    $(document).ready(function () {
        $('.materialboxed').materialbox();
    })

    $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });


});