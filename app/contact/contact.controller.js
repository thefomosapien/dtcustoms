angular.module('app').controller('contactCtrl', function ($scope, $firebaseArray, contactService) {

    var formRef = contactService.createForm();


    //Create new Firebase array for each item//
    $scope.forms = $firebaseArray(formRef);

    $scope.addForm = function (formObj) {
        $scope.forms.$add({
            name: formObj.name,
            phone: formObj.phone,
            email: formObj.email,
            business: formObj.business,
            message: formObj.message

        });
        console.log($scope.forms)
    }
});