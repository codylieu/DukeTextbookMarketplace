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

    $scope.departments = [];

    $scope.textbookManager = [
      {
        name: 'Introduction to Algorithms',
        isbn: '978-0262033848',
        course: 'Compsci 330',
        condition: 'Good'
      },
      {
        name: 'Linear Algebra: A Geometric Approach',
        isbn: '978-1429215213',
        course: 'Math 221',
        condition: 'Excellent'
      }
    ];

    $scope.goToAccount = function () {
      $location.path('account');
    }
  })