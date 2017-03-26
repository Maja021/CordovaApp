(function () {

    "use strict";

    angular.module('store').component('myPanel', {
        templateUrl: 'templates/myPanelTemplate.html',
        //transclude: true,
        bindings: {
            iselected: '&',
            product: '='
        },
        controller: function () {
        }
    });

})();