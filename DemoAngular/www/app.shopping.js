(function () {

    "use strict";

    var app2 = angular.module("myShoppingList", []);

    app2.controller("myCtrl", function ($scope) {
        $scope.products = ["Black", "White", "Green"];
        $scope.addItem = function () {
            $scope.errortext = "";
            if (!$scope.addMe) { return; }
            if ($scope.products.indexOf($scope.addMe) == -1) {
                $scope.products.push($scope.addMe);
            } else {
                $scope.errortext = "The color is already on your mobile.";
            }
        }
        $scope.removeItem = function (x) {
            $scope.errortext = "";
            $scope.products.splice(x, 1);
        }
    });

})();





