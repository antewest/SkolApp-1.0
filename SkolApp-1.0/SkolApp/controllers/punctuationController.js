(function () {

    var PunctuationController = function ($scope, TaskProvider, Scores, PunctuationChecker) {
        Scores.GetTopScores(10, "GetPunctuations").then(function (response) {
            $scope.scores = response;
        })

        var UpdateTask = function (PassedTest, points) {
            $scope.CurrentTask = TaskProvider.GetNext(PassedTest, points);
            $scope.TaskIndex = TaskProvider.GetCount().Current + 1;
            $scope.User.Input = '';
        }

        var OnError = function (response) {
            console.error(response.statusText);
        }

        TaskProvider.GetTask("GetPunctuations").then(function (response) {
            UpdateTask(false, 0);
            $scope.AmountOfTasks = TaskProvider.GetCount().Last;
        });

        $scope.CheckTask = function () {
            var PassedTest = false;
            if ($scope.User.Input.length <= 0) {
                alert("Du måste skriva något innan du kan rätta.");
                return;
            }
            // Task Checker
            var points = PunctuationChecker.CheckAnswer($scope.User.Input, $scope.CurrentTask.Question);
            if (points != 0) {
                alert("Rätt svar!");
                PassedTest = true;
            }
            else {
                alert("Tyvärr, det är fel svar :(");
            }

            UpdateTask(PassedTest, points);
        }

        $scope.CurrentTask = {};
        $scope.TaskIndex;
        $scope.AmountOfTasks;
        $scope.User = {
            Input: ""
        };
    };

    angular.module("SkolApp").controller("PunctuationController", [
        "$scope",
        "TaskProvider",
        "Scores",
        "PunctuationChecker",
        "PunctuationAnswerFilter",
        "PunctuationQuestionFilter",
        PunctuationController
    ]);
}());
