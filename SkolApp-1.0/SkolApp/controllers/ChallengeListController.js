(function () {

    var challengeController = function ($scope, TaskProvider, $location) {
        _taskProvider = new TaskProvider();
        $scope.challengeList = [];
        _taskProvider.GetTasksList().then(function (response) {
            $scope.challengeList = response;
        })

        $scope.go = function (Id) {
            $location.path("/Challenge/").search({ id: Id });
        };

        $scope.gotoRandomChallenge = function () {
            /*
            var randomchallenge = [];
            angular.forEach($scope.challengeList, function (val, key, obj) {
                if (val.Type == 'Custom')
                    this.push(val);
            }, randomchallenge)
            var i = Math.floor(Math.random() * randomchallenge.length);
            */
            $location.path("/Challenge/").search({ id: 5 });
        }

    }

    angular.module("SkolApp").controller("ChallengeListController", [
        "$scope",
        "TaskProvider",
        "$location",

        challengeController]);

}());