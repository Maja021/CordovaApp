(function () {

    "use strict";

    angular.module('store').controller('storeController', function () {
        this.products = mobs;

        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        }

        this.isSelected = function (checkTab) {
            return this.tab === checkTab;

        }

    });

})();