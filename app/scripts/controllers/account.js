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

    $scope.contact = {
      name: 'Cody Lieu',
      phoneNumber: '7573950657',
      emailAddress: 'cody.a.lieu@gmail.com'
    };

    $scope.switchTabs = function (tab) {
      _.each($scope.tabs, function(elem) {
        elem.active = (tab == elem.name);
      });
    }

    $scope.textbookManager = [
      {
        name: 'Introduction to Algorithms',
        isbn: '9780262033848',
        course: 'Compsci 330',
        condition: 'Good'
      },
      {
        name: 'Linear Algebra: A Geometric Approach',
        isbn: '9781429215213',
        course: 'Math 221',
        condition: 'Like New'
      }
    ];

    $scope.textbookWatchingManager = [
      {
        name: 'Genki I: An Integrated Course in Elementary Japanese',
        isbn: '9784789014403',
        course: 'Jpn 101',
        condition: 'Poor'
      }
    ];

    $scope.addTextbook = function () {
      var modalInstance = $modal.open({
        templateUrl: 'views/addTextbookModal.html',
        controller: 'AddTextbookModalInstanceCtrl'
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.textbookManager.push(selectedItem);
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
          $scope.textbookManager = _.without($scope.textbookManager, textbook);
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
      $scope.textbookWatchingManager = _.without($scope.textbookWatchingManager, textbook);
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
  });
