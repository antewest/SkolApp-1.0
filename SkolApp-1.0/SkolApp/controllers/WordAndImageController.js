(function () {
    var WordAndImageController = function ($scope, $http, TaskProvider, Scores, Message) {

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
            var title, message, type;

            if ($scope.User.Input.length <= 0) {
                title = "Hoppsan!";
                message = "Du måste skriva något innan du kan rätta.";
                type = "error";
                Message.DisplayMessage(title, message, type);
                return;
            }

            if ($scope.CurrentTask.Answer.toLowerCase() == $scope.User.Input.toLowerCase()) {
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
                UpdateTask(PassedTest);
            });
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
        "Message",
        WordAndImageController
    ]);

}());