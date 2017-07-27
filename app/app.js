(function(){
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'ngCookies',
            'ngFileUpload',
            'ui.bootstrap',
            'ui.mask',
            'angular.filter',
            'ngMap',
            'toastr',
            'btford.socket-io',
            'ngProgress',
            'ui.tinymce' 
        ])
        .config(router);


    function router ($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('app', {
                abstract:true,
                url : '/',
                views : {
                    'topbar' : { 
                        templateUrl  : 'app/shared/nav/navbar.html',
                        controller   : 'NavCtrl',
                        controllerAs : 'vm'  
                    },
                    'sidebar' : { 
                        templateUrl  : 'app/shared/sidebar/sidebar.html',
                        controller   : 'SidebarCtrl',
                        controllerAs : 'vm'
                    },
                    'content' : { 
                        templateUrl  : 'app/components/content/content.html',
                        controller   : 'ContentCtrl',
                        controllerAs : 'vm'
                    }
                }            
            })

            .state('app.dashboard', {
                url             : 'dashboard',  
                templateUrl     : 'app/components/dashboard/dashboard.html',
                controller      : 'DashboardCtrl',
                controllerAs    : 'vm'
            })

            .state('login', {
                url : '/login',
                views : {
                    'content' : { 
                        templateUrl  : 'app/components/login/login.html',
                        controller   : 'LoginCtrl',
                        controllerAs : 'vm'
                    }
                }
            })

    }

})();