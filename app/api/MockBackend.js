var myAppDev = angular.module('myAppE2E', ['GenomicsTest', 'ngMockE2E']);

myAppDev.run(function($httpBackend) {
  var reads = [{dna: 'AAA'}];

  // returns the current list of phones
  $httpBackend.whenGET('/reads').respond(reads);

  // adds a new phone to the phones array
  $httpBackend.whenPOST('/reads').respond(function(method, url, data) {
    var read = angular.fromJson(data);
    reads.push(read);
    return [200, read, {}];
  });
});