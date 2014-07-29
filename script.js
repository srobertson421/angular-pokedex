var app = angular.module('myApp', []);

app.controller('pokeController', function($scope, $http) {
    $scope.pokeNum = 0;
    $scope.getPokemon = function() {
        
        $http({
            method: 'jsonp',
            url: 'http://pokeapi.co/api/v1/pokemon/' + $scope.pokeNum + '?callback=JSON_CALLBACK'
        }).success(function(data, status, headers, config) {
            
            //console.log(data);
            $scope.pokemon = data;
            $scope.pokemon.name = data.name;
            $scope.pokemon.sprite = 'http://pokeapi.co/media/img/' + $scope.pokeNum + '.png';
            
        }).error(function(data, status, headers, config) {
            console.log(status);
            console.log(headers);
        });
        
    };
});