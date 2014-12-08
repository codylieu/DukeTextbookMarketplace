'use strict';

/**
 * @ngdoc function
 * @name dukeTextbookMarketplaceApp.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the dukeTextbookMarketplaceApp
 */
angular.module('dukeTextbookMarketplaceApp')
  .controller('AccountCtrl', function ($scope, $modal, $log, $location, currentUser, $http) {

    $scope.currentUser = currentUser;
    $scope.books = [];

    $http.get('http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/selectUserTextbooks.php?netid=' + $scope.currentUser.netid).
      success(function(data, status, headers, config) {
        $scope.books = data;
      });

    $scope.user = {};

    $http.get('http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/Users/select.php?netid=' + $scope.currentUser.netid).
      success(function(data, status, headers, config) {
        $scope.user = data[0];
      });

    $scope.watching = [];
    $http.get('http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/selectUserWatchings.php?netid=' + $scope.currentUser.netid).
      success(function(data, status, headers, config) {
        $scope.watching = data;
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
        $scope.books.push(selectedItem);
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
        $scope.textbookManager[_.indexOf($scope.textbookManager, textbook)] = selectedItem;
      });
    }

    $scope.unwatchTextbook = function (textbook) {
      $scope.watching = _.without($scope.watching, textbook);
    }

    $scope.editContactInfo = function () {
      var modalInstance = $modal.open({
        templateUrl: 'views/editContactInfoModal.html',
        controller: 'EditContactInfoModalInstanceCtrl',
        resolve: {
          contactInfo: function () {
            return $scope.contact;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.contact = selectedItem;
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
  });
