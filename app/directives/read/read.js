var app = angular.module('app.directives.read', []);

app.directive('read', function(){
  return {
    restrict: 'E',
    scope: {
      read: "=",
      searchValue: "=?bind",
      searchResults: "=?bind",
      index: "=",
      currentSearchResult: "=?bind"
    },
    templateUrl: "directives/read/read.html",
    
    controller: function($scope){
      $scope.currentSearchResult = 0;
			$scope.SearchResultCount = 0;
      
     	$scope.generateRandom = function(){
        $scope.read.dna = generateRandomDNA(150);
      }
      
      $scope.search = function(){
        $scope.searchResults = SearchStringForAccurencesOf($scope.searchValue, $scope.read.dna);
					$scope.SearchResultCount = 0;
      }
      
      $scope.nextResult = function(){
        if ($scope.currentSearchResult != $scope.searchResults.length -1){
            $scope.currentSearchResult += 1;
						$scope.SearchResultCount += 1;
        }
      }
      
      $scope.previousResult = function(){
        if($scope.currentSearchResult != 0){
            $scope.currentSearchResult -= 1;
						$scope.SearchResultCount -= 1;
        }
      }
    }
  }
});


function generateRandomDNA(size){
    charArray = ["A","C","G","T"];
    dnaArray = [];
    for(i = 0; i < size; i++){ 
      randomNumber = Math.floor(Math.random() * 4);
      dnaArray.push(charArray[randomNumber]);
    }
  return dnaArray.toString().replace(/\,/g, '');
}


function SearchStringForAccurencesOf(needle, hayStack) {
    var needleLength = needle.length;
    var startIndex = 0, index, indices = [];
  
    hayStack = hayStack.toUpperCase();
    needle = needle.toUpperCase();
  
    if (needleLength == 0) {
        return [];
    }
    
    while ((index = hayStack.indexOf(needle, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + needleLength;
    }
    return indices;
}