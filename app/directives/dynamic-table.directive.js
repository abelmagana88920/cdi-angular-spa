;(function (){
    'use strict';

    angular
        .module('app')
        .directive('dynamicTable', dynamicTable);

    function dynamicTable () {
        return {
            restrict: 'EA',
            scope : { 
                testYes : '&',
                details : '=details'
            },
            templateUrl: "app/directives/html/dynamic-table-directive.html" 
        };
    }

})();