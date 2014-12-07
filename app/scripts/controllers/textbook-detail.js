'use strict';

/**
 * @ngdoc function
 * @name dukeTextbookMarketplaceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dukeTextbookMarketplaceApp
 */
angular.module('dukeTextbookMarketplaceApp')
  .controller('TextbookDetailCtrl', function ($scope) {
    
    $scope.textbook = {
      name: 'Introduction to Algorithms',
      author: 'Thomas H. Cormen',
      isbn: '9780262033848',
      course: 'Compsci 330'
    };

    $scope.sellers = [
      {
        id: '1',
        name: 'Cody Lieu',
        price: 70,
        condition: 'Like New',
        email: 'cody.a.lieu@gmail.com'
      },
      {
        id: '2',
        name: 'Stephen Hughes',
        price: 30,
        condition: 'Good',
        email: 'sdh31@duke.edu'
      }
    ];

    $scope.minPrice = function () {
      return _.min(_.pluck($scope.sellers, 'price'));
    }
    
    $scope.maxPrice = function () {
      return _.max(_.pluck($scope.sellers, 'price'));
    }

    $scope.watchTextbook = function (seller) {

    }

    $scope.goToSellerPage = function (seller) {

    }

    $scope.goToFindBooks = function () {
      $location.path('textbook');
    }

    $scope.goToAccount = function () {
      $location.path('account');
    }
  });
