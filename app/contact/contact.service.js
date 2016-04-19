angular.module('app').service('adminService', function ($firebaseArray) {

    //Creating a new Firebase database and it's URL//
    var baseUrl = "https://dtcustoms.firebaseio.com"

    this.createForm = function () {
        var formInstance = new Firebase(baseUrl + "/messages");
        return formInstance;
    }