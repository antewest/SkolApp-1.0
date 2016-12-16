(function () {

    var challengeController = function ($scope, TaskProvider, $location) {
        //$route.current.params.id
        _taskProvider = new TaskProvider();
        $scope.challengeList = [];
        _taskProvider.GetTasksList().then(function (response) {
            $scope.challengeList = response;
        })

        $scope.go = function (Id) {
            $location.path("/Challenge/").search({ id: Id });
        };

    }

    angular.module("SkolApp").controller("ChallengeListController", [
        "$scope",
        "TaskProvider",
        "$location",

        challengeController]);




    // ignore for now
    /*
    angular.module("SkolApp", [ngRoute]).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
                .when("/:id", {
                    templateUrl: function (params) {
                        return 'routes/asdf-' + params.id + '.html';
                    },
                    controller: 'controllername'
                }).otherwise({
                    redirectTo: '/',
                });

        if (window.history && window.history.pushState) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: true
            });
        }
    
    }]);*/
}());