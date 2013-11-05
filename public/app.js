/**
 * Created by Damien on 05/11/13.
 */

 // initialisation of the leto app
var leto = angular.module('leto', ['ngResource']);


//leto routes
leto.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {templateUrl: 'views/index.html'})
        .when('/movies', {controller: 'MoviesCtrl', templateUrl: '/views/movies.html'})
        .when('/movies/:pid', { controller: 'MovieCtrl', templateUrl: '/views/movie.html'})
        .otherwise({redirectTo: '/'});
    
    $locationProvider.html5Mode(true);
});
