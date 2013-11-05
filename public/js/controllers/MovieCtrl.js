/**
 * Created by Damien on 05/11/13.
 */
// controller handling interactions with the views

//controller handling the movie list
leto.controller('MoviesCtrl', ['$scope', '$routeParams', 'moviesService', function ($scope, $routeParams, moviesService) {
    $scope.movies;

    var getrating = function () {
        $scope.movies.episodes.forEach(function (movie) {
            moviesService.getrating(movie.programme.title, function (data) {

                movie.hasrating = '';

                if (data.results.length > 0) {

                    movie.hasrating = 'true';

                    movie.tmdb = data['results'][0];
                    movie.tmdb.ratings = [];

                    for (var mark = 0; mark < 10 ; mark++){
                        if(mark < Math.floor(movie.tmdb.vote_average)) {
                            movie.tmdb.ratings.push("https://d3a8mw37cqal2z.cloudfront.net/images/star-on.png");
                        }
                        else {
                            movie.tmdb.ratings.push("https://d3a8mw37cqal2z.cloudfront.net/images/star-off.png");
                        }
                    }
                }
                $scope.$apply();
            });
        });
    };

    moviesService.all(function (movies) {
        $scope.movies = movies;
        getrating();
        console.dir($scope.movies);

    });

}]);


//controller handling a single movie detail
// pid is the id of the current movie
leto.controller('MovieCtrl', ['$scope', '$routeParams', 'moviesService', function ($scope, $routeParams, moviesService) {
    $scope.movie;
    var pid = $routeParams.pid;

    moviesService.get(pid, function (movie) {
        $scope.movie = movie.programme;
        $scope.$apply();
    });
}]);
