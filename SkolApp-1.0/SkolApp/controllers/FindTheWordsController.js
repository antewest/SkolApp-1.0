﻿(function () {
    var findthewordsController = function ($scope, $routeParams, TaskProvider, Scores, FindTheWords) {
        var _taskProvider = new TaskProvider();
        Scores.GetTopScores(10, $routeParams.id).then(function (response) {
            $scope.scores = response;
        })

        var UpdateTask = function (PassedTest, points) {
            $scope.CurrentTask = _taskProvider.GetNext(PassedTest, points);
            $scope.TaskIndex = _taskProvider.GetCount().Current + 1;
            $scope.User.Input = '';
        }

        var OnError = function (response) {
            console.error(response.statusText);
        }

        _taskProvider.GetTask(1, $routeParams.id).then(function (response) {
            UpdateTask(false, 0);
            $scope.AmountOfTasks = _taskProvider.GetCount().Last;
        });

        $scope.CheckTask = function () {
            var PassedTest = false;
            if ($scope.User.Input.length <= 0) {
                alert("Du måste skriva något innan du kan rätta.");
                return;
            }
            // Task Checker
            var points = FindTheWords.CheckAnswer($scope.User.Input.toLowerCase(), $scope.CurrentTask.Question.toLowerCase());
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
        "$routeParams",
        "TaskProvider",
        "Scores",
        "FindTheWords",
        "FindTheWordsAnswerFilter",
        "RandomWordsFilter",
        findthewordsController
    ]);

}());
