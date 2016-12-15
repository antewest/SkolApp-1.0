(function () {
    var WordAndColorController = function ($scope, $http, TaskProvider, Scores, Message, $timeout) {

        Scores.GetTopScores(10, "GetColors").then(function (response) {
            $scope.scores = response;
        });

        var Shuffle = function (array) {
            var currentIndex = array.length, temporaryValue, randomIndex;

            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }

        var UpdateTask = function (PassedTest) {
            $timeout(function () {
                $scope.AllTasks = TaskProvider.GetNext(PassedTest, 1, true);
                $scope.TaskIndex = TaskProvider.GetCount().Current + 1;

                var UpdatedColors = 0;
                var UsedIndex = [];
                $scope.CurrentTask = [];
                do {
                    var i = Math.floor(Math.random() * TaskProvider.GetCount().Last);

                    if (UpdatedColors == 0) {
                        if (RightIndexUsed.indexOf(i) == -1) {
                            $scope.CurrentTask.push($scope.AllTasks[i]);
                            $scope.Question = $scope.AllTasks[i].Question;

                            RightIndexUsed.push(i);
                            UsedIndex.push(i);
                            UpdatedColors += 1;
                        }
                    }
                    else if (UsedIndex.indexOf(i) == -1) {
                        $scope.CurrentTask.push($scope.AllTasks[i]);
                        UsedIndex.push(i);
                        UpdatedColors += 1;
                    }
                
                } while ($scope.AllTasks.length > 0 && UpdatedColors < 3);

                $scope.CurrentTask = Shuffle($scope.CurrentTask);
            }, 0);
        }

        var OnError = function (response) {
            console.error(response.statusText);
        }

        TaskProvider.GetTask("GetColors").then(function (response) {
            UpdateTask(false);
            $scope.AmountOfTasks = TaskProvider.GetCount().Last;
        });

        $scope.CheckTask = function () {
            var PassedTest = false;
            var title, message, type;

            if ($scope.User.Input.length <= 0) {
                title = "Hoppsan!";
                message = "Du måste välja en färg.";
                type = "error";
                Message.DisplayMessage(title, message, type);
                return;
            }

            if ($scope.Question.toLowerCase() == $scope.User.Input.Question.toLowerCase()) {
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

        $scope.AllTasks = {};
        $scope.TaskIndex;
        $scope.AmountOfTasks;
        $scope.Question;
        $scope.CurrentTask;
        $scope.User = {
            Input: ""
        };

        var RightIndexUsed = [];
    }

    angular.module("SkolApp").controller("WordAndColorController", [
        "$scope",
        "$http",
        "TaskProvider",
        "Scores",
        "Message",
        "$timeout",
        WordAndColorController
    ]);

}());