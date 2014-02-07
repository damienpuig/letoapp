/**
 * Created by Damien on 05/11/13.
 */

 // initialisation of the leto app
var montaud = angular.module('montaud', ['ngResource']);

montaud.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {templateUrl: 'views/index.html'})
        .when('/movies', {controller: 'MoviesCtrl', templateUrl: '/views/movies.html'})
        .when('/movies/:pid', { controller: 'MovieCtrl', templateUrl: '/views/movie.html'})
        .when('/consoles', {controller: 'ConsolesCtrl', templateUrl: '/views/consoles.html'})
        .when('/add', {controller: 'SearchAddController', templateUrl: '/views/add_game.html'})
        .when('/games', {controller: 'GameCtrl', templateUrl: '/views/games.html'})
        .otherwise({redirectTo: '/'});
    
    $locationProvider.html5Mode(true);
});
