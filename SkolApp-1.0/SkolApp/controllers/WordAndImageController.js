(function () {
    var WordAndImageController = function ($scope, $http, TaskProvider, Scores) {

        Scores.GetTopScores(10, "GetWordAndImage").then(function (response) {
            $scope.scores = response;
        })

        var UpdateTask = function (PassedTest) {
            $scope.CurrentTask = TaskProvider.GetNext(PassedTest, 1);
            $scope.TaskIndex = TaskProvider.GetCount().Current + 1;
            $scope.User.Input = '';
        }

        var OnError = function (response) {
            console.error(response.statusText);
        }

        TaskProvider.GetTask("GetWordAndImage").then(function (response) {
            UpdateTask(false);
            $scope.AmountOfTasks = TaskProvider.GetCount().Last;
        });

        $scope.CheckTask = function () {
            var PassedTest = false;
            if ($scope.User.Input.length <= 0) {
                alert("Du måste skriva något innan du kan rätta.");
                return;
            }

            if ($scope.CurrentTask.Answer.toLowerCase() == $scope.User.Input.toLowerCase()) {
                alert("Rätt svar!");
                PassedTest = true;
            }
            else {
                alert("Tyvärr, det är fel svar :(");
            }

            UpdateTask(PassedTest);
        }

        $scope.CurrentTask = {};
        $scope.TaskIndex;
        $scope.AmountOfTasks;
        $scope.User = {
            Input: ""
        };
    }

    angular.module("SkolApp").controller("WordAndImageController", [
        "$scope",
        "$http",
        "TaskProvider",
        "Scores",
        WordAndImageController
    ]);

}());