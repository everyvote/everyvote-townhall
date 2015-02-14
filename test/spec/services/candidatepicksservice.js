'use strict';

describe('Service: CandidatePicksService', function () {

  // load the service's module
  beforeEach(module('everyvoteTuresoApp'));

  // instantiate service
  var CandidatePicksService, $scope, storage;

  beforeEach(inject(function (_CandidatePicksService_, _$rootScope_, _storage_) {

    $scope = _$rootScope_;
    storage = _storage_;
    CandidatePicksService = _CandidatePicksService_;


    storage.clearAll();
  }));


  describe('when storing a candidate pick', function () {

    it('should save the candidatePick in localstorage', function () {
      // V, N, U

      CandidatePicksService.savePick('abc123', 'V');

      var result = storage.get('candidatePick-abc123');

      expect(result).toEqual('V');

    });

  });

  describe('when retrieving a candidatePick', function () {

      it('should retrieve the candidate from localstorage', function () {

        storage.set('candidatePick-asdf5500', 'N');

        var result = CandidatePicksService.getPick('asdf5500');

        expect(result).toEqual('N');

      });

      it('should return U when no decision has been made for a candidate', function () {

        var result = CandidatePicksService.getPick('asdf5500');

        expect(result).toEqual('U');
        
      });

  });

});
