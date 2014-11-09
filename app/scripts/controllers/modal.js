'use strict';

/**
 * @ngdoc function
 * @name dukeTextbookMarketplaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dukeTextbookMarketplaceApp
 */
angular.module('dukeTextbookMarketplaceApp')
  .controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

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

    $scope.deleteTextbook = function () {
      
    }

    $scope.isAddTextbookButtonDisabled = function () {
      return $scope.textbookDetails.name == '' ||
          $scope.textbookDetails.isbn == '' || $scope.textbookDetails.course == ''
    }

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
