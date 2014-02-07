/**
 * Created by Damien on 05/11/13.
 */
// controller handling interactions with the views

//controller handling the movie list
montaud.controller('MoviesCtrl', ['$scope', '$routeParams', 'moviesService', function ($scope, $routeParams, moviesService) {
    $scope.movies;

    // the getrating object will fill each movie object by requesting the right movie on themoviedb.
    //I assume that the right result if the first result of the list.
    var getrating = function () {
        $scope.movies.episodes.forEach(function (movie) {

            moviesService.getrating(movie.programme.title, function (data) {
                movie.hasrating = '';

                if (data.results.length > 0) {

                    movie.hasrating = 'true';

                    //I assume that the first object of the list is the right result...
                    movie.tmdb = data['results'][0];
                    movie.tmdb.ratings = [];

                    //I affect stars depending on the average of the vote ( I 'floor' the result because I didn't use the ressource 'star-half.png')
                    //The ressources come from themovieDB website.
                    // I assume that the mark is always /10.
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
montaud.controller('MovieCtrl', ['$scope', '$routeParams', 'moviesService', function ($scope, $routeParams, moviesService) {
    $scope.movie;
    $scope.properties = new Array();

    //pid of the selected movie
    var pid = $routeParams.pid;

    // this method format, in a array, each property of a movie following the pattern "object.property = value"
    var format = function (obj, objName) {
        for ( var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                $scope.properties.push({'name': prop,'format': objName + "." + prop + " = " + obj[prop]});
            }
        }
    };

    moviesService.get(pid, function (movie) {
        $scope.movie = movie.programme;

        //little hack to load dynamically the picture.
        $scope.movie.image.url = 'http://ichef.bbci.co.uk/images/ic/272x153/'+ $scope.movie.image.pid + '.jpg';

        //creation of an array containing each formatted properties.
        format(movie.programme, movie.programme.constructor.name);

        $scope.$apply();
    });
}]);
