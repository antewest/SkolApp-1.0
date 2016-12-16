(function () {

    var PunctuationController = function ($scope, TaskProvider, Scores, PunctuationChecker, Message) {
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
            var title, message, type;

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
        "TaskProvider",
        "Scores",
        "PunctuationChecker",
        "PunctuationAnswerFilter",
        "PunctuationQuestionFilter",
        "Message",
        PunctuationController
    ]);
}());
