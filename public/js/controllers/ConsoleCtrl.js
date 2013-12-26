/**
 * Created by Damien on 05/11/13.
 */
leto.controller('ConsolesCtrl', ['$scope', '$routeParams', 'consolesService', function ($scope, $routeParams, consolesService) {
    $scope.consoles;

    consolesService.all(function (data) {
        $scope.consoles = data;
        $scope.$apply();
    });

}]);