(function () {

    "use strict";

    angular.module('store').component('myButton', {
        templateUrl: 'templates/myButtonTemplate.html',
        bindings: {
            iselected: '&',
            setpanel: '&'
            //name: '@'
        },
        controller: function () {
        }
    });

})();