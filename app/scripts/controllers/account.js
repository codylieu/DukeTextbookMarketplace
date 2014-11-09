'use strict';

/**
 * @ngdoc function
 * @name dukeTextbookMarketplaceApp.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the dukeTextbookMarketplaceApp
 */
angular.module('dukeTextbookMarketplaceApp')
  .controller('AccountCtrl', function ($scope, $modal, $log, $location) {

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
        condition: 'Excellent'
      }
    ];

    $scope.addNewTextbook = function () {
      var modalInstance = $modal.open({
        templateUrl: 'views/addTextbookModal.html',
        controller: 'AddTextbookModalInstanceCtrl',
        resolve: {items: function () {}}
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.addTextbook(selectedItem);
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

    $scope.addTextbook = function (textbookDetails) {
      $scope.textbookManager.push({
        name: textbookDetails.name,
        isbn: textbookDetails.isbn,
        course: textbookDetails.course,
        condition: textbookDetails.condition
      });
    }

    $scope.isAddTextbookButtonDisabled = function () {
      return $scope.textbookName == '' || $scope.textbookISBN == '' || $scope.textbookCourse == ''
    }

    $scope.goToFindBooks = function () {
      $location.path('textbook');
    }
  });
