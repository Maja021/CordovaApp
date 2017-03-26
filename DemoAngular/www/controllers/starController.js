(function () {

    "use strict";

    angular.module('store').controller("StarController", function () {
        this.star = {};

        this.addStar = function (product) {
            product.stars.push(this.star);
            this.star = {};
        };
    });

})();