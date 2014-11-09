'use strict';

/**
 * @ngdoc function
 * @name dukeTextbookMarketplaceApp.controller:TextbookCtrl
 * @description
 * # TextbookCtrl
 * Controller of the dukeTextbookMarketplaceApp
 */
angular.module('dukeTextbookMarketplaceApp')
  .controller('TextbookCtrl', function ($scope, $location) {

    $scope.textbookName = '';
    $scope.textbookISBN = '';
    $scope.textbookCourse = '';
    $scope.textbookCondition = 'Poor';
    $scope.textbookConditions = ['Poor', 'Good', 'Like New'];

    $scope.textbookManager = [
      {
        name: 'Textbook 1',
        isbn: '1',
        course: 'Econ 101',
        condition: 'Good'
      },
      {
        name: 'Textbook 2',
        isbn: '2',
        course: 'Math 212',
        condition: 'Excellent'
      }
    ];

    $scope.addTextbook = function () {
      $scope.textbookManager.push({
        name: $scope.textbookName,
        isbn: $scope.textbookISBN,
        course: $scope.textbookCourse,
        condition: $scope.textbookCondition
      });
      $scope.textbookName = '';
      $scope.textbookISBN = '';
      $scope.textbookCourse = '';
    }

    $scope.isAddTextbookButtonDisabled = function () {
      return $scope.textbookName == '' || $scope.textbookISBN == '' || $scope.textbookCourse == ''
    }

    $scope.goToAccount = function () {
      $location.path('account');
    }
  })