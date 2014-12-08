'use strict';

/**
 * @ngdoc function
 * @name dukeTextbookMarketplaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dukeTextbookMarketplaceApp
 */
angular.module('dukeTextbookMarketplaceApp')
  .controller('AddTextbookModalInstanceCtrl', function ($scope, $modalInstance) {

    $scope.textbookDetails = {
      isbn: '',
      price: '',
      condition: ''
    };

    $scope.addTextbook = function () {
      $modalInstance.close($scope.textbookDetails);
    };

    $scope.isAddTextbookButtonDisabled = function () {
      return $scope.textbookDetails.isbn == ''||
        $scope.textbookDetails.price == '' || $scope.textbookDetails.condition == '';
    }

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
