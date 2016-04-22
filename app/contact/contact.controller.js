angular.module('app').controller('contactCtrl', function ($scope, $firebaseArray, contactService) {

    var formRef = contactService.createForm();


    //Create new Firebase array for each item//
    $scope.forms = $firebaseArray(formRef);

    $scope.addForm = function (formObj) {
        $scope.forms.$add(formObj); ({
            name: formObj.name,
            phone: formObj.phone,
            email: formObj.email,
            business: formObj.business,
            message: formObj.message

        });
        console.log($scope.forms)
    }

    $(document).ready(function () {
        // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
        $('.modal-trigger').leanModal();
    });


});

