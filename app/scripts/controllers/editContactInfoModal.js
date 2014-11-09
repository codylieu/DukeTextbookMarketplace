'use strict';

/**
 * @ngdoc function
 * @name dukeTextbookMarketplaceApp.controller:TextbookCtrl
 * @description
 * # TextbookCtrl
 * Controller of the dukeTextbookMarketplaceApp
 */
angular.module('dukeTextbookMarketplaceApp')
  .controller('EditContactInfoModalInstanceCtrl', function ($scope, $modalInstance, contactInfo) {

    $scope.contact = _.clone(contactInfo);

    $scope.updateContactInfo = function () {
      $modalInstance.close($scope.contact);
    }

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    }

    $scope.isUpdateContactInfoButtonDisabled = function () {
      return _.isEqual($scope.contact, contactInfo);
    }
  })