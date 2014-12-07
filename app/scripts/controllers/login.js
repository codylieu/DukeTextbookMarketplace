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
    }
  });