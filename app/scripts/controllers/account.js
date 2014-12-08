'use strict';

/**
 * @ngdoc function
 * @name dukeTextbookMarketplaceApp.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the dukeTextbookMarketplaceApp
 */
angular.module('dukeTextbookMarketplaceApp')
  .controller('AccountCtrl', function ($scope, $modal, $log, $location, currentUser, $http, $route) {

    $scope.currentUser = currentUser;
    $scope.books = [];

    $http.get('//colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/selectUserTextbooks.php?netid=' + $scope.currentUser.netid).
      success(function(data, status, headers, config) {
        $scope.books = data;
      });

    $scope.user = {};

    $http.get('//colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/Users/select.php?netid=' + $scope.currentUser.netid).
      success(function(data, status, headers, config) {
        $scope.user = data[0];
      });

    $scope.watching = [];
    $http.get('//colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/selectUserWatchings.php?netid=' + $scope.currentUser.netid).
      success(function(data, status, headers, config) {
        $scope.watching = data;
      });

    $scope.listings = [];
    $scope.listingsIncrementer;
    $http.get('//colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/selectAllListing.php').
      success(function(data, status, headers, config) {
        $scope.listings = data;
        $scope.listingsIncrementer = _.last($scope.listings).listing_id;
        console.log('incrementer: ' + $scope.listingsIncrementer);
      });

    $scope.tabs = [
      {
        name: 'My Books',
        active: true
      },
      {
        name: 'Watching',
        active: false
      },
      {
        name: 'Contact Info',
        active: false
      }
    ];

    $scope.switchTabs = function (tab) {
      _.each($scope.tabs, function(elem) {
        elem.active = (tab == elem.name);
      });
    }

    $scope.addTextbook = function () {
      var modalInstance = $modal.open({
        templateUrl: 'views/addTextbookModal.html',
        controller: 'AddTextbookModalInstanceCtrl'
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.listingsIncrementer++;
        $http.get("//colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/listings/insert.php?listing_id='" + $scope.listingsIncrementer + 
                  "'&netid='" + $scope.currentUser.netid +
                  "'&isbn='" + selectedItem.isbn +
                  "'&conditionOfBook='" + selectedItem.condition +
                  "'&statusOfBook='1" +
                  "'&price='" + selectedItem.price + "'").success(function(data){console.log(data)});
        $route.reload();
      });
    }

    $scope.deleteTextbook = function (textbook) {
      var modalInstance = $modal.open({
        templateUrl: 'views/deleteTextbookModal.html',
        controller: 'DeleteTextbookModalInstanceCtrl',
        resolve: {
          book: function () {
            return textbook;
        }}
      });

      modalInstance.result.then(function (selectedItem) {
        if(selectedItem) {
          $scope.books = _.without($scope.books, textbook);
          var listing = _.filter($scope.listings, function (listing) {
            return listing.netid == $scope.currentUser.netid && listing.isbn == textbook.isbn
          });
          var listing_id = listing[0].listing_id;
          $http.get("//colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/listings/delete.php?listing_id='" + listing_id +
                      "'&netid='" + $scope.currentUser.netid +
                      "'&isbn='" + textbook.isbn + "'");
        }
      });
    }

    $scope.editTextbookListing = function (textbook) {
      var modalInstance = $modal.open({
        templateUrl: 'views/editTextbookListingModal.html',
        controller: 'EditTextbookListingModalInstanceCtrl',
        resolve: {
          book: function () {
            return textbook;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.books[_.indexOf($scope.books, textbook)] = selectedItem;
        var listing = _.filter($scope.listings, function (listing) {
          return listing.netid == $scope.currentUser.netid && listing.isbn == selectedItem.isbn
        });
        var listing_id = listing[0].listing_id;
        $http.get("//colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/listings/update.php?listing_id='" + listing_id +
                  "'&netid='" + $scope.currentUser.netid +
                  "'&isbn='" + selectedItem.isbn +
                  "'&date='" + selectedItem.date +
                  "'&statusOfBook='1" +
                  "'&conditionOfBook='" + selectedItem.conditionOfBook +
                  "'&price='" + selectedItem.price + "'");
      });
    }

    $scope.unwatchTextbook = function (textbook) {
      $scope.watching = _.without($scope.watching, textbook);
      $http.get("//colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/watching/delete.php?netid='" + $scope.currentUser.netid + "'&isbn='" + textbook.isbn + "'");
    }

    $scope.editContactInfo = function () {
      var modalInstance = $modal.open({
        templateUrl: 'views/editContactInfoModal.html',
        controller: 'EditContactInfoModalInstanceCtrl',
        resolve: {
          user: function () {
            return $scope.user;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.user = selectedItem;
      });
    }

    $scope.isAddTextbookButtonDisabled = function () {
      return $scope.textbookName == '' || $scope.textbookISBN == '' || $scope.textbookCourse == ''
    }

    $scope.goToFindBooks = function () {
      $location.path('textbook');
    }

    $scope.logout = function () {
      $scope.currentUser.netid = '';
      $location.path('login');
    }
    
    $scope.viewSellers = function (textbook) {
      var modalInstance = $modal.open({
        templateUrl: 'views/viewSellersModal.html',
        controller: 'ViewSellersModalInstanceCtrl',
        resolve: {
          book: function () {
            return textbook;
          }
        }
    });
  };
  });
