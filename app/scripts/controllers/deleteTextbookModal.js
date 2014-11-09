'use strict';

/**
 * @ngdoc function
 * @name dukeTextbookMarketplaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dukeTextbookMarketplaceApp
 */
angular.module('dukeTextbookMarketplaceApp')
  .controller('DeleteTextbookModalInstanceCtrl', function ($scope, $modalInstance, book) {

    $scope.textbook = book;
    
    $scope.deleteTextbook = function () {
      $modalInstance.close(true);
    }

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
