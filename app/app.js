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
            'ui.tinymce',
            'ui.grid', 
            'ui.grid.pinning',
            'ui.grid.pagination',
            'ui.grid.resizeColumns',
            'ui.grid.moveColumns',
            'ui.grid.saveState',
            'ui.grid.grouping'
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

            .state('app.dynamic-table', {
                url             : 'dynamic-table',  
                templateUrl     : 'app/components/dynamic-table/dynamic-table.html',
                controller      : 'DynamicTableCtrl',
                controllerAs    : 'vm'
            })

            .state('app.directive-dropdown', {
                url             : 'directive-dropdown',  
                templateUrl     : 'app/components/sample/directive-dropdown.html',
                controller      : 'DirectiveDropdownCtrl',
                controllerAs    : 'vm'
            })

            .state('app.uigridtable', {
                url             : 'uigridtable',  
                templateUrl     : 'app/components/sample/uigridtable.html',
                controller      : 'UiGridTableCtrl',
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