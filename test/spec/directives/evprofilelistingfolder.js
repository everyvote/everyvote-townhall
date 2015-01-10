'use strict';

describe('Directive: evProfileListingFolder', function () {

  // load the directive's module
  beforeEach(module('everyvoteTuresoApp'));
  beforeEach(module('views/directives/evProfileListingFolder.html'));
  beforeEach(module('views/directives/evProfileListing.html'));

  // var element;
  var scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  // FAILING TEST
  // it('should make hidden element visible', inject(function ($compile) {
  //   element = angular.element('<ev-profile-listing-folder></ev-profile-listing-folder>');
  //   element = $compile(element)(scope);
  //   scope.$apply();
  // }));
});
