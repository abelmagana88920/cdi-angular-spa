;(function (){
    'use strict';

    angular
        .module('app')
        .controller('DynamicTableCtrl', DynamicTableCtrl);

    DynamicTableCtrl.$inject = ['$scope', '$state', 'ModalService', 'QueryService', 'logger'];

    function DynamicTableCtrl ($scope, $state, ModalService, QueryService, logger) {
        var vm                  = this;
        
        // variables
        vm.titleHeader          = 'Dynamic Table'; 
        vm.data                 = {}; 

        // test methods
        vm.testYes              = testYes;

        function testYes (data) {
            console.log(data);
        }

        function formModal (request, modal, template, size) { 
            return ModalService.form_modal(request, modal, template, size);
        }

        function confirmation (content) {
            return ModalService.confirm_modal(content);
        }

        (function getPost () {
            
            var request = {
                method  : 'GET', // POST, GET, PUT, DELETE
                body    : false, // data to be sent
                params  : false, // sample { page:1, limit:10 }
                hasFile : false, // formData to be sent
                route   : { users:'' }, // will result /users
                cache   : true, // false if not needed
                cache_string : 'users' // replace with '' if not needed
            };

            QueryService
                .query(request)
                .then(function (response) {
                    console.log(response);
                    vm.data = response.data;
                    // logger.success('',response, MESSAGE.success);
                }, function (err) {
                    logger.error(MESSAGE.error, err, '');
                })

        })()
    }
})();