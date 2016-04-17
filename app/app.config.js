angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('navbar', {
                url: '',
                templateUrl: 'navbar/navbar.html'
            })
            
            .state('contact', {
                url: '/contact',
                templateUrl: 'contact/contact.html',
                // controller: 'contactCtrl',
                // controllerAs: 'vmContact'
                parent: 'navbar'
            })

            .state('homepage', {
                url: '/homepage',
                templateUrl: 'homepage/homepage.html',
                // controller: 'homepageCtrl',
                // controllerAs: 'vmHomepage'
                parent: 'navbar'
            })

            .state('whatwedo', {
                url: '/whatwedo',
                templateUrl: 'whatwedo/whatwedo.html',
                // controller: 'whatwedoCtrl',
                // controllerAs: 'vmWhatWeDo'
                parent: 'navbar'
            })

            .state('whoweare', {
                url: '/whoweare',
                templateUrl: 'whoweare/whoweare.html',
                // controller: 'whoweareCtrl',
                // controllerAs: 'vmWhoWeAre'
                parent: 'navbar'
            })

        $urlRouterProvider.otherwise('/');
    })