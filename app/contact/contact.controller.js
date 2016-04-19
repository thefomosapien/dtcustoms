angular.module('app').controller('contactCtrl', function ($scope, $firebaseArray, contactService) {

    var formRef = contactService.createForm();


    //Create new Firebase array for each item//
    $scope.forms = $firebaseArray(formRef);

    $scope.addForm = function (formObj) {
        $scope.toppings.$add({
            name: formObj.name,
            phone: formObj.description,
            email: formObj.email,
            business: formObj.business,
            message: formObj.message
            
        })
    }