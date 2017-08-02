;(function (){
    'use strict';

    angular
        .module('app')
        .controller('DirectiveDropdownCtrl', DirectiveDropdownCtrl);

    DirectiveDropdownCtrl.$inject = ['$scope', '$state', 'ModalService', 'QueryService', 'logger'];

    function DirectiveDropdownCtrl ($scope, $state, ModalService, QueryService, logger) {
        var vm                  = this;
        
        // variables
        vm.titleHeader          = 'Directive For Dropdown'; 
        vm.data                 = {};

        vm.init                 = init;

        init();

        function init() {
            vm.categories = DUMMY.categories; 
        }
        
    }
})();