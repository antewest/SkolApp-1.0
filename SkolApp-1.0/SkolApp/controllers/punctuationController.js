(function () {
    var punctuationController = function ($scope, Points, TaskProvider, GetScores) {

        GetScores.TopScores(10, "punctuation").then(function (response) {
            $scope.scores = response;
        })

        var UpdateTask = function (PassedTest) {
            $scope.CurrentTask = TaskProvider.GetNext(PassedTest);
            $scope.TaskIndex = TaskProvider.GetCount().Current;
            $scope.User.Input = '';
        }

        var OnError = function (response) {
            console.error(response.statusText);
        }

        TaskProvider.GetTask("GetPunctuations").then(function (response) {
            UpdateTask(false);
            $scope.AmountOfTasks = TaskProvider.GetCount().Last;
        });

        $scope.CheckTask = function () {
            var PassedTest = false;
            if ($scope.User.Input.length <= 0) {
                alert("Du måste skriva något innan du kan rätta.");
                return;
            }

            if ($scope.CurrentTask.Question.toLowerCase() == $scope.User.Input.toLowerCase()) {
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
    };

    angular.module("SkolApp").controller(
        "punctuationController",
        [
            "$scope",
            "Points",
            "TaskProvider",
            "GetScores",
            "PunctuationAnswerFilter",
            "PunctuationQuestionFilter",
            punctuationController
        ]
        );
}());
