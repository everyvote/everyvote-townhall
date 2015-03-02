'use strict';

describe('Controller: PagechangewidgetCtrl', function () {

  // load the controller's module
  beforeEach(module('everyvoteTuresoApp'));

  var PagechangewidgetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PagechangewidgetCtrl = $controller('PagechangewidgetCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
