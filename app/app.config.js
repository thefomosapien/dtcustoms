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
                controller: 'adminCtrl'
            })

        $urlRouterProvider.otherwise('/homepage');
    })