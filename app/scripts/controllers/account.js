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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.tabs = ["My books", "Watching"];
    $scope.activeTab = "My books";

    $scope.isTabMyBooksTab = true;

    $scope.textbooks = {};

    $scope.switchTabs = function (tab) {
      $scope.isTabMyBooksTab = (tab == 'My books');
      $scope.activeTab = tab;
    }

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

    $scope.openModal = function () {
      var modalInstance = $modal.open({
        templateUrl: 'views/modal.html',
        controller: 'ModalInstanceCtrl',
        resolve: {items: function () {}}
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.addTextbook(selectedItem);
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

    $scope.goToFindBooks = function() {
      $location.path('textbook');
    }
  });
