(function () {
    var PunctuationController = function ($scope, TaskProvider, $routeParams, Scores, PunctuationChecker, Message) {
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
            var title, message, type;

            _taskProvider.AllowNext();

            if ($scope.User.Input.length <= 0) {
                title = "Hoppsan!";
                message = "Du måste skriva något innan du kan rätta.";
                type = "error";
                Message.DisplayMessage(title, message, type);
                return;
            }
            
            var points = PunctuationChecker.CheckAnswer($scope.User.Input, $scope.CurrentTask.Question);

            if (points != 0) {
                title = "Bra jobbat!";
                message = "Helt rätt!";
                type = "success";
                PassedTest = true;
            }
            else {
                title = "Tyvärr!";
                message = "Nu blev det visst fel :(";
                type = "error";
            }

            Message.DisplayMessage(title, message, type).then(function (e) {
                UpdateTask(PassedTest, points);
            });
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
        "$routeParams",
        "TaskProvider",
        "Scores",
        "PunctuationChecker",
        "PunctuationAnswerFilter",
        "PunctuationQuestionFilter",
        "Message",
        PunctuationController
    ]);
}());
