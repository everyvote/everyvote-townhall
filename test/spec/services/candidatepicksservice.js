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

    it('should save the candidatePick in localstorage', function (done) {
      // V, N, U

      CandidatePicksService.savePick('abc123', 'V')
        .then(function () {
          var result = storage.get('candidatePick-abc123');
          expect(result).toEqual('V');
          done();
        });

      $scope.$digest();
    });

  });

  describe('when storing a candidate pick as Voting For', function () {

    it('should append the candidate to candidatePicks in localstorage', function (done) {

      var candidatePicks = ['candidatePick-abc123', 'candidatePick-def456'];
      candidatePicks = JSON.stringify(candidatePicks);
      storage.set('candidatePicks', candidatePicks);

      CandidatePicksService.savePick('ghi789', 'V')
        .then(function () {
          var result = storage.get('candidatePicks');
          expect(result).toEqual('["candidatePick-abc123","candidatePick-def456","candidatePick-ghi789"]');
          done();
        });

      $scope.$digest();
    });

  });

  describe('when storing a candidate pick that was Voting For to Not Voting For', function () {

    it('should remove the candidate from candidatePicks in localstorage', function (done) {

      var candidatePicks = ['candidatePick-abc123', 'candidatePick-def456'];
      candidatePicks = JSON.stringify(candidatePicks);
      storage.set('candidatePicks', candidatePicks);

      CandidatePicksService.savePick('abc123', 'N')
        .then(function () {
          var result = storage.get('candidatePicks');
          expect(result).toEqual('["candidatePick-def456"]');
          done();
        });

      $scope.$digest();
    });

  });

  describe('when storing a candidate pick that was Voting For to Undecided', function () {

    it('should remove the candidate from candidatePicks in localstorage', function (done) {

      var candidatePicks = ['candidatePick-abc123', 'candidatePick-def456'];
      candidatePicks = JSON.stringify(candidatePicks);
      storage.set('candidatePicks', candidatePicks);

      CandidatePicksService.savePick('abc123', 'U')
        .then(function () {
          var result = storage.get('candidatePicks');
          expect(result).toEqual('["candidatePick-def456"]');
          done();
        });

      $scope.$digest();
    });

  });

  describe('when retrieving a candidatePick', function () {

      it('should retrieve the candidate from localstorage', function (done) {

        storage.set('candidatePick-asdf5500', 'N');

        CandidatePicksService.getPick('asdf5500')
          .then(function (result) {
            expect(result).toEqual('N');
            done();
          });

        $scope.$digest();

      });

      it('should return U when no decision has been made for a candidate', function (done) {

        CandidatePicksService.getPick('asdf5500')
          .then(function (result) {
            expect(result).toEqual('U');
            done();
          });

        $scope.$digest();

      });

  });

  describe('when retrieving candidatePicks', function () {

      it('should retrieve the candidates from localstorage', function (done) {

        var candidatePicks = ['candidatePick-abc123', 'candidatePick-def456', 'candidatePick-ghi789'];
        candidatePicks = JSON.stringify(candidatePicks);
        storage.set('candidatePicks', candidatePicks);

        CandidatePicksService.getPicks('candidatePicks')
          .then(function (result) {
            expect(result).toEqual(['candidatePick-abc123', 'candidatePick-def456', 'candidatePick-ghi789']);
            done();
          });

        $scope.$digest();

      });

  });

});
