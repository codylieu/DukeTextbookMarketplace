'use strict';

/**
 * @ngdoc function
 * @name dukeTextbookMarketplaceApp.controller:TextbookCtrl
 * @description
 * # TextbookCtrl
 * Controller of the dukeTextbookMarketplaceApp
 */
angular.module('dukeTextbookMarketplaceApp')
  .controller('EditTextbookListingModalInstanceCtrl', function ($scope, $modalInstance, book) {

    $scope.textbook = _.clone(book);

    $scope.updateTextbook = function () {
      $modalInstance.close($scope.textbook);
    }

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    }

    $scope.isUpdateTextbookButtonDisabled = function () {
      return _.isEqual($scope.textbook, book);
    }
  })