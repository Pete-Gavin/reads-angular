app = angular.module("GenomicsTest",['app.directives.read']);

app.controller("ReadController", function($scope , $http){
  
    var ctrl = this;

    $scope.reads = [
      
    ];
    
    $scope.new = function(){
     $scope.reads.push( {"dna": ""});
    };

})

;
