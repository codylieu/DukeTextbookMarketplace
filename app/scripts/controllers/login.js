'use strict';

/**
 * @ngdoc function
 * @name dukeTextbookMarketplaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dukeTextbookMarketplaceApp
 */
angular.module('dukeTextbookMarketplaceApp')
  .controller('LoginCtrl', function ($scope, $http, currentUser, $location) {

    $scope.currentUser = currentUser;
    $scope.netid = '';
    $scope.newNetid = '';
    $scope.newUser = {
      netid: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      major: ''
    }
    $scope.login = function () {
      $http.get('http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/Users/select.php?netid=' + $scope.netid).
        success(function(data, status, headers, config) {
          $scope.user = data;
          if(_.isEmpty($scope.user)) {
            $scope.loginFailed = true;
          }
          else {
            $scope.loginFailed = false;
            $scope.currentUser.netid = $scope.netid;
            $location.path('account');
          }
        });
    };

    $scope.register = function () {
      $http.get("http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/Users/insert.php?netid='" + $scope.newUser.netid +
                "'&firstName='" + $scope.newUser.firstName +
                "'&lastName='" + $scope.newUser.lastName +
                "'&major='" + $scope.newUser.major +
                "'&phoneNumber='" + $scope.newUser.phoneNumber + "'");
      $scope.currentUser.netid = $scope.newUser.netid;
      $location.path('account');
    };

    $scope.isRegisterButtonDisabled = function () {
      return _.isEmpty($scope.newUser.netid) ||
            _.isEmpty($scope.newUser.firstName) ||
            _.isEmpty($scope.newUser.lastName) ||
            _.isEmpty($scope.newUser.phoneNumber) ||
            _.isEmpty($scope.newUser.major);
    }

  });