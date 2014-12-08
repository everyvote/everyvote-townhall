'use strict';

describe('Service: ElectionService', function () {

  // load the service's module
  beforeEach(module('everyvoteTuresoApp'));

  // instantiate service
  var ElectionService, $scope;
  beforeEach(inject(function (_ElectionService_, _$rootScope_) {
    $scope = _$rootScope_;
    ElectionService = _ElectionService_;
  }));

  it('should do something', function () {
    var result;

    ElectionService.getElection()
      .then(function (election) {
        result = election;
      });

      $scope.$apply();

      expect(result).toBeDefined();
  });

});
