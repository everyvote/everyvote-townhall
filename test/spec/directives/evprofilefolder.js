'use strict';

describe('Directive: evProfileFolder', function () {

  // load the directive's module
  beforeEach(module('everyvoteTuresoApp'));
  beforeEach(module('views/directives/evProfileFolder.html'));
  beforeEach(module('views/directives/evProfile.html'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ev-profile-folder></ev-profile-folder>');
    element = $compile(element)(scope);
    scope.$apply();
  }));
});
