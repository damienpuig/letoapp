/**
 * Created by Damien on 05/11/13.
 */
leto.directive("delayedSearch", ['$timeout', function($timeout) {
        return {
            restrict: "E",
            template: '<input type="text" ng-model="model" />',
            scope: {
                model : '='
            },
            link: function (scope, element, attrs) {
                var timer = false;
                scope.$watch('model', function (new_val) {
                    if(new_val){
                        if (timer) {
                            $timeout.cancel(timer);
                        }
                        timer = $timeout(function () {
                            alert('timeout expired');
                        }, 500);
                    }

                });
            }
        }
    }])
    .controller('SearchAddController', ['$scope', '$routeParams', 'jvcService', function ($scope, $routeParams, jvcService) {
        $scope.consoles = jvcService.get_consoles()

        console.log($scope.consoles)
    }]);