angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('contact', {
            url: '/contact',
            templateUrl: 'contact/contact.html',
            controller: 'contactCtrl'
        })

        .state('homepage', {
            url: '/homepage',
            templateUrl: 'homepage/homepage.html',
            controller: 'homepageCtrl'
        })

        .state('whatwedo', {
            url: '/whatwedo',
            templateUrl: 'whatwedo/whatwedo.html'
            // controller: 'whatwedoCtrl'
        })

        .state('whoweare', {
            url: '/whoweare',
            templateUrl: 'whoweare/whoweare.html'
            // controller: 'whoweareCtrl'
        })

        .state('auth', {
            url: '/auth',
            templateUrl: 'auth/auth.html',
            controller: 'authCtrl'

        })

        .state('admin', {
            url: '/admin',
            templateUrl: 'admin/admin.html',
            controller: 'adminCtrl',
            resolve: {
                authData: function (adminService, $q) {
                    var deferred = $q.defer();
                    var authRef = adminService.auth();
                    console.log(authRef);
                    return authRef.$requireAuth().then(function(data) {
                        console.log(data);
                    });
                    // authRef.$waitForAuth().then(function(data) {
                    //     if(data) {
                    //         deferred.resolve(data)
                    //         return deferred.promise
                    //     } else {
                    //         deferred.reject()
                    //         // return false;
                    //     }
                    // });
                    
                }
            }
        })

    $urlRouterProvider.otherwise('/homepage');
})