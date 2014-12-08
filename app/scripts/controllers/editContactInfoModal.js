'use strict';

/**
 * @ngdoc function
 * @name dukeTextbookMarketplaceApp.controller:TextbookCtrl
 * @description
 * # TextbookCtrl
 * Controller of the dukeTextbookMarketplaceApp
 */
angular.module('dukeTextbookMarketplaceApp')
  .controller('EditContactInfoModalInstanceCtrl', function ($scope, $modalInstance, user, $http) {

    $scope.user = _.clone(user);

    $scope.updateContactInfo = function () {
      $modalInstance.close($scope.user);
      var url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/Users/update.php?netid='" + $scope.user.netid +
                "'&firstName='" + $scope.user.firstName +
                "'&lastName='" + $scope.user.lastName +
                "'&major='" + $scope.user.major +
                "'&phoneNumber='" + $scope.user.phoneNumber + "'";
      console.log(url);
      $http.get(url).success(function(data) {console.log(data);});
    }

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    }

    $scope.isUpdateContactInfoButtonDisabled = function () {
      return _.isEqual($scope.user, user);
    }
  })