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
    
    $scope.textbookConditions = ['Poor', 'Good', 'Like New'];

    $scope.textbookDetails = {
      name: '',
      isbn: '',
      course: '',
      condition: 'Poor'
    };

    $scope.addTextbook = function () {
      $modalInstance.close($scope.textbookDetails);
    };

    $scope.isAddTextbookButtonDisabled = function () {
      return $scope.textbookDetails.name == '' ||
          $scope.textbookDetails.isbn == '' || $scope.textbookDetails.course == ''
    }

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
