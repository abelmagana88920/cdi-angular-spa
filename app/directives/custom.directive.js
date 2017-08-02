;(function (){
    'use strict';

    angular
        .module('app')
        .directive('uiSrefIf', uiSrefIf)
        .directive('compileTemplate', compileTemplate);

    function uiSrefIf ($compile) {
         return {
            link: function($scope, $element, $attrs) {
                var uiSrefVal       = $attrs.uiSrefVal,
                    uiSrefIf        = $attrs.uiSrefIf,
                    uiSrefNgBind    = $attrs.uiSrefNgBind;

                $element.removeAttr('ui-sref-if');
                $element.removeAttr('ui-sref-val');

                $scope.$watch(
                    function(){
                        return $scope.$eval(uiSrefIf);
                    },
                    function(bool) {
                        if (bool) {
                            $element.attr('ui-sref', uiSrefVal);
                            $element.removeClass('no_style');
                        } else {
                            $element.attr('class', 'no_style');
                            $element.removeAttr('ui-sref');
                            $element.removeAttr('href');
                        }

                        $element.attr('ng-bind-html', uiSrefNgBind + ' | displaynone');
                         
                        $compile($element)($scope);
                    }
                );
            }
        };
    }

    function compileTemplate($compile, $parse){
        return {
            link: function(scope, element, attr){
                var parsed = $parse(attr.ngBindHtml);
                function getStringValue() { return (parsed(scope) || '').toString(); }
                
                //Recompile if the template changes
                scope.$watch(getStringValue, function() {
                    $compile(element, null, -9999)(scope);  //The -9999 makes it skip directives so that we do not recompile ourselves
                });
            }         
        }
    }

})();



