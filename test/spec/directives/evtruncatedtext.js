'use strict';

describe('Directive: evTruncatedText', function () {

  // load the directive's module
  beforeEach(module('everyvoteTuresoApp'));
  beforeEach(module('views/directives/evTruncatedText.html'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));


  it('should work minimally', inject(function ($compile) {
    element = angular.element('<ev-truncated-text></ev-truncated-text>');
    element = $compile(element)(scope);
    expect(element).toBeDefined();
  }));
});
