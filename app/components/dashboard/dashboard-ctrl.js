;(function (){
    'use strict';

    angular
        .module('app')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$scope', '$state', 'ModalService', 'QueryService', 'logger'];

    function DashboardCtrl ($scope, $state, ModalService, QueryService, logger) {
        var vm                  = this;
        
        // variables
        vm.titleHeader          = 'Dashboard'; 
        vm.data                 = {};

        // methods
        vm.handleConfirm        = handleConfirm;
        vm.handleForm           = handleForm;

        // temporary code
        vm.getContent           = getContent;
        vm.setContent           = setContent;
        vm.tinymceModel         = 'Initial content';

        function getContent () {
            console.log('Editor content:', vm.tinymceModel);
        };

        function setContent () {
            vm.tinymceModel = 'Time: ' + (new Date());
        };

        vm.tinymceOptions = {
            height: 500,
            theme: 'modern',
            plugins: [
                'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                'searchreplace wordcount visualblocks visualchars code fullscreen',
                'insertdatetime media nonbreaking save table contextmenu directionality',
                'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc help'
            ],
            toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            toolbar2: 'print preview media | forecolor backcolor emoticons | codesample help',
            image_advtab: true,
            templates: [
                { title: 'Test template 1', content: 'Test 1' },
                { title: 'Test template 2', content: 'Test 2' }
            ] 
        }; 
        // temporary code

        function handleForm () {

            var modal = { header: 'Form Modal', title: 'User' };
            var request = {
                method  : 'POST',
                body    : {},
                params  : false,
                hasFile : false,
                route   : { users:'' },
                cache_string : ''
            }; 
            
            formModal(request, modal, TPLS.users)
                .then( function (response) { 

                    if (response) {
                        vm.data.unshift(response); 
                    };

                }, function (error) {
                    logger.error(error.data.message);
                });

        }
        
        function handleConfirm () { 

            var request = {
                method  : 'DELETE',
                body    : false,
                params  : false,
                hasFile : false,
                route   : { users:'' },
                cache_string : ''
            }; 
            
            var content = { 
                header : "Confirmation Header", 
                message : "Are you sure you want to perform this action", 
                prop : '' // item name
            };

            confirmation(content)
                .then( function (response) { 


                    if (response) { 
                        // temporary code
                        logger.success( 'Success!');
                        return;
                        // temporary code
                        QueryService
                            .query(request)
                            .then( function (response) { 

                                vm.items.splice(vm.items.indexOf(item), 1);
                                logger.success( vm.subTitleHeader + ' removed!');
                            
                            }, function (error) {
                                logger.error(error.data.message);
                            });
                    }

                });

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