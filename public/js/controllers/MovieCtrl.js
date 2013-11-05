/**
 * Created by Damien on 05/11/13.
 */
// controller handling interactions with the views

//controller handling the movie list
leto.controller('MoviesCtrl', ['$scope', '$routeParams', 'moviesService', function ($scope, $routeParams, moviesService) {
    $scope.movies;
}]);


//controller handling a single movie detail
// pid is the id of the current movie
leto.controller('MovieCtrl', ['$scope', '$routeParams', 'moviesService', function ($scope, $routeParams, moviesService) {
    $scope.movie;
    var pid = $routeParams.pid;
}]);
