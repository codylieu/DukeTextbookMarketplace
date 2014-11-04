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

    $scope.items = items;
    $scope.textbookName = '';
    $scope.textbookISBN = '';
    $scope.textbookCourse = '';
    $scope.textbookCondition = 'Poor';
    $scope.textbookConditions = ['Poor', 'Good', 'Like New'];

    $scope.selected = {
      // item: $scope.items[0]
    };

    $scope.addTextbook = function () {
      $modalInstance.close($scope.selected.item);
    };

    $scope.isAddTextbookButtonDisabled = function () {
      return $scope.textbookName == '' || $scope.textbookISBN == '' || $scope.textbookCourse == ''
    }

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
