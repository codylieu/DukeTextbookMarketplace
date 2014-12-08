'use strict';

/**
 * @ngdoc function
 * @name dukeTextbookMarketplaceApp.controller:TextbookCtrl
 * @description
 * # TextbookCtrl
 * Controller of the dukeTextbookMarketplaceApp
 */
angular.module('dukeTextbookMarketplaceApp')
  .controller('TextbookCtrl', function ($scope, $location, $http, currentUser, $modal) {

    $scope.currentUser = currentUser;

    $scope.allTextbooks = [];
    $scope.departments = [];
    $scope.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    $http.get('//colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/selectListingInfo.php?callback=json_callback').
      success(function(data, status, headers, config) {
        $scope.allTextbooks = data;
        $scope.departments = _.uniq(_.pluck($scope.allTextbooks, 'deptName'));
      });

    $scope.selectedDepartment = 'African and African American Studies';
    $scope.switchDepartment = function (department) {
      $scope.selectedDepartment = department;
    };

    $scope.showDepartment = function (department) {
      return department.substring(0, 1) == $scope.selectedLetter;
    }

    $scope.selectedLetter = 'A';
    $scope.switchLetter = function (letter) {
      $scope.selectedLetter = letter;
    };

    $scope.showTextbook = function (textbook) {
      return textbook.deptName == $scope.selectedDepartment &&
              textbook.deptName.substring(0, 1) == $scope.selectedLetter;
    };

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

    $scope.watchTextbook = function (textbook) {
      $http.get("//colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/watching/insert.php?netid='" + $scope.currentUser.netid + "'&isbn='" + textbook.isbn + "'");
    };

    $scope.goToAccount = function () {
      $location.path('account');
    };

    $scope.logout = function () {
      $location.path('login');
    };
  })