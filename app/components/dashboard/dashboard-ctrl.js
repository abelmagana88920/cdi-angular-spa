;(function (){
    'use strict';

    angular
        .module('app')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$scope', '$state', 'ModalService', 'QueryService', 'logger','$sce'];

    function DashboardCtrl ($scope, $state, ModalService, QueryService, logger, $sce) {
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
        vm.tinymceModel         = `<a ui-sref="app.directive-dropdown">Go to Directive Dropdown</a>`;
        vm.updateHTML           = updateHTML;

        vm.init                 = init;

        init();

        console.log(window.location)
        function init() {
            vm.updateHTML();
        }

        vm.alerto                = alerto;
        function alerto() {
            alert('This is sample alert');
        }

        function getContent () {
            console.log('Editor content:', vm.tinymceModel);
        };

        function setContent () {
            vm.tinymceModel = 'Time: ' + (new Date());
        };

        vm.tinymceOptions = {
            apply_source_formatting : true,

            protect: [/[\f\t\v]/g],
            selector: "textarea",  // change this value according to your HTML
            code_dialog_width: 900,
            init_instance_callback : GLOBAL.removeCDATA,
            height: 500,
            theme: 'modern',
            external_plugins: {
                codemirror: "plugins/codemirror/plugin.js"
            },
            codemirror: {
                indentOnInit: true, // Whether or not to indent code on init.
                fullscreen: false,   // Default setting is false
                path: 'codemirror-4.8', // Path to CodeMirror distribution
                config: {           // CodeMirror config object
                   mode: 'application/x-httpd-php',
                   lineNumbers: true
                },
                width: 1000,         // Default value is 800
                height: 500,        // Default value is 550
                //saveCursorPosition: true,    // Insert caret marker
                jsFiles: [          // Additional JS files to load
                   'mode/clike/clike.js',
                   'mode/php/php.js'
                ]
            },
            forced_root_block : '', 
            force_br_newlines : true,
            force_p_newlines : false,
            plugins: [
                'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                'searchreplace wordcount visualblocks visualchars code codemirror fullscreen',
                'insertdatetime media nonbreaking save table contextmenu directionality',
                'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc'
            ],
            toolbar1: 'undo redo | insert | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            toolbar2: 'print preview fontsizeselect media | forecolor backcolor emoticons | codesample help code',
            // fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
            valid_elements: "@[id|class|title|style]," +
            "div[class|style],"+
            "strong,em,i,sub,sup,code, span,"+
            "h1,h2,h3,h4,h5,h6,"+
            "a[name|href|target|title|alt|ng-click|onclick|ui-sref]," +
            "blockquote,pre,p,-ol,-ul,-li,br,img[src|height|width],-sub,-sup,-b,-i,-u," +
            "-span,hr",
            extended_valid_elements:'script[language|type|src]',
            image_advtab: true,
            templates: [
                { title: 'Test template 1', content: 'Test 1' },
                { title: 'Test template 2', content: 'Test 2' }
            ] 
        }; 

        function updateHTML() {
            vm.tinymceHtml = $sce.trustAsHtml(vm.tinymceModel);
        }
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