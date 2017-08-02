;(function (){
    'use strict';

    angular
        .module('app')
        .controller('UiGridTableCtrl', UiGridTableCtrl);

    UiGridTableCtrl.$inject = ['$scope', '$state', '$timeout', 'ModalService', 'QueryService', 'logger','uiGridConstants'];

    function UiGridTableCtrl ($scope, $state,$timeout, ModalService, QueryService, logger, uiGridConstants) {
        var vm                  = this;
        
        // variables
        vm.titleHeader          = 'Ui Grid Table'; 
        vm.data                 = {};

        vm.init                 = init;

        init();

        function init() {
            //vm.categories = DUMMY.categories; 
            tableConfiguration();
            vm.gridOptions.data = DUMMY.names;
        }

        vm.change_test = change_test;
        vm.display_test = display_test;
        
        function display_test(column) {
            console.log(column.visible);
            if (column.visible === true || typeof column.visible === 'undefined')
               column.visible = false;
            else 
               column.visible = true;

            // //vm.new_gridstate = {"columns":[{"name":"indexof","visible":true,"width":43,"sort":{},"filters":[{}],"pinned":""},{"name":"last_name","visible":true,"width":"*","sort":{},"filters":[{}],"pinned":""},{"name":"first_name","visible":true,"width":"*","sort":{},"filters":[{}],"pinned":""}],"scrollFocus":{},"selection":[],"grouping":{},"treeView":{},"pagination":{"paginationCurrentPage":1,"paginationPageSize":5}};
            // //vm.gridOptions.columnDefs = [{name:'sadsd'}];
            // vm.gridOptions.columnDefs[1].visible = false;
            rsr();  
        }

        function change_test() {
            //vm.new_gridstate = {"columns":[{"name":"indexof","visible":true,"width":43,"sort":{},"filters":[{}],"pinned":""},{"name":"last_name","visible":true,"width":"*","sort":{},"filters":[{}],"pinned":""},{"name":"first_name","visible":true,"width":"*","sort":{},"filters":[{}],"pinned":""}],"scrollFocus":{},"selection":[],"grouping":{},"treeView":{},"pagination":{"paginationCurrentPage":1,"paginationPageSize":5}};
            //vm.gridOptions.columnDefs = [{name:'sadsd'}];
            vm.gridOptions.columnDefs[1].visible = false;
            rsr();  
        }

        function rsr() {
            refreshState();
            saveState();
            restoreState();
        }

        function tableConfiguration() {

            vm.gridOptions = { 
                totalItems: 10,
                paginationPageSize: 5,
                minRowsToShow: 5,
                enablePaginationControls: false,
                paginationCurrentPage: 1,
               // enableFiltering: true,
                enableColumnResizing: true,
                enableColumnReordering: true,
                //enableColumnMenus: false,
                enableGridMenu: true,
             
                onRegisterApi: function(gridApi) {
                    // Keep a reference to the gridApi.
                    $scope.gridApi = gridApi;
                    vm.new_gridstate = null;
                    refreshState();
                    // Restore previously saved state.
                    restoreState();
                }
            };
            vm.gridOptions.columnDefs = [
                  {name: 'indexof', displayName:'', width:43, 
                   cellTemplate: '<div class="ui-grid-cell-contents">{{grid.renderContainers.body.visibleRowCache.indexOf(row) + (grid.appScope.vm.startfrom + 1)}}<div>',
                   enableHiding: false,
                   enableColumnMenu: false,
                    // pinnedLeft:true
                   },
                  { 
                    name: 'first_name', 
                  },
                  { 
                    name: 'last_name',
                    visible: false
                  },
                  { 
                    name: 'gender', 
                  },

            ];  
        }

        function saveState() {
                if (vm.new_gridstate)
                    vm.gridstate = angular.copy(vm.new_gridstate);
                else
                    vm.gridstate = $scope.gridApi.saveState.save();
                //console.log(vm.gridstate);
        }

        function restoreState() {
             $timeout(function() {
                if (vm.gridstate) 
                    $scope.gridApi.saveState.restore($scope, vm.gridstate);
                else {
                    vm.gridstate = {};
                    $scope.gridApi.saveState.restore($scope, vm.gridstate);
                }
                    
             });
        }

        function refreshState() {
            $scope.gridApi.core.refresh();
            // $scope.gridApi.core.queueGridRefresh();
            // $scope.gridApi.grid.refreshCanvas();
            // $scope.gridApi.grid.refreshRows();
            // $scope.gridApi.core.notifyDataChange( uiGridConstants.dataChange.ALL);  

            $scope.gridApi.colMovable.on.columnPositionChanged($scope, saveState);
            $scope.gridApi.colResizable.on.columnSizeChanged($scope, saveState);
            $scope.gridApi.core.on.columnVisibilityChanged($scope, saveState);
            $scope.gridApi.core.on.filterChanged($scope, saveState);
            $scope.gridApi.core.on.sortChanged($scope, saveState);
        }
    }
})();