'use strict';

/**
 * @ngdoc function
 * @name dukeTextbookMarketplaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dukeTextbookMarketplaceApp
 */
angular.module('dukeTextbookMarketplaceApp')
  .controller('ViewSellersModalInstanceCtrl', function ($scope, $modalInstance, $http, book) {

    $scope.book = book;
    $scope.relevantListings = [];
    $scope.relevantUsers = [];
    $http.get('//colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/selectAllListing.php').
      success(function(data, status, headers, config) {
        $scope.relevantListings = _.filter(data, function(listing) {
          return listing.isbn == book.isbn;
        });
        _.each($scope.relevantListings, function (listing) {
          $http.get('//colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/Users/select.php?netid=' + listing.netid).
            success(function(data, status, headers, config) {
              console.log(data[0]);
              $scope.relevantUsers.push(data[0]);
            });
        });
      });

    $scope.noRelevantListings = function () {
      return _.isEmpty($scope.relevantListings);
    };

    $scope.OK = function () {
      $modalInstance.dismiss('OK');
    };
  });
