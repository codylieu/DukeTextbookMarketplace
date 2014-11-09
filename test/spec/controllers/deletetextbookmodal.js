'use strict';

describe('Controller: DeletetextbookmodalCtrl', function () {

  // load the controller's module
  beforeEach(module('dukeTextbookMarketplaceApp'));

  var DeletetextbookmodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeletetextbookmodalCtrl = $controller('DeletetextbookmodalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
