(function () {
    'use strict';

    angular.module('optiApp.services.bitwise-enum')
        .filter('is', function () {
            return function(input, option){
                return input.is(option);
            };
        });
})();