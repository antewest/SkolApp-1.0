(function () {

    var findthewordsController = function ($scope, TaskProvider, Scores, FindTheWords) {
        Scores.GetTopScores(10, "GetFindTheWords").then(function (response) {
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

        TaskProvider.GetTask("GetFindTheWords").then(function (response) {
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
            var points = FindTheWords.CheckAnswer($scope.User.Input, $scope.CurrentTask.Question);
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




    angular.module("SkolApp").controller("FindTheWordsController", [
        "$scope",
        "TaskProvider",
        "Scores",
        "FindTheWords",
        "FindTheWordsAnswerFilter",
        findthewordsController
    ]);

}());
