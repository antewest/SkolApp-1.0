(function () {
    var challengeController = function ($scope, $timeout, $routeParams, TaskProvider, Scores, Points, Message, Colors, $filter) {
        var _taskProvider = new TaskProvider();
        var _Colors = new Colors();

        Scores.GetTopScores(10, $routeParams.id).then(function (response) {
            $scope.scores = response;
        })

        var UpdateTask = function (PassedTest, points) {
            $timeout(function () {
                var temparray = [];

                $scope.CurrentTask = _taskProvider.GetNext(PassedTest, points);
                $scope.TaskIndex = _taskProvider.GetCount().Current;
                $scope.User.Input = '';

                var typename = $scope.CurrentTask.Type.Name || '';
                var currentAnswer = $scope.CurrentTask.Answer || '';

                if ($scope.CurrentTask && String(typename).toLowerCase() == 'colorandtext') {

                    _Colors.Reset();

                    var UpdatedColors = 0;
                    do {
                        temparray.push(_Colors.RandomColor(currentAnswer));
                        UpdatedColors += 1;
                    } while (UpdatedColors < 3);

                }
                $scope.CurrentTask.PossibleAnswers = $filter('Shuffle')(temparray);
            }, 0);
            
        }

        var OnError = function (response) {
            console.error(response.statusText);
        }

        _taskProvider.GetTask($routeParams.id).then(function (response) {
            _Colors.Load().then(function () {
                UpdateTask(false, 0);
            });
            
            $scope.AmountOfTasks = _taskProvider.GetCount().Last;
        });

        $scope.CheckTask = function () {
            var PassedTest = false;
            var title, message, type;
            //_taskProvider.AllowNext();
            $scope.InputView = $scope.User.Input;
            if ($scope.User.Input.length <= 0) {
                title = "Hoppsan!";
                message = "Du måste välja något först.";
                type = "error";
                Message.DisplayMessage(title, message, type);
                return;
            }

            var points = Points.CalculatePoints($scope.CurrentTask.Type.Name, $scope.User.Input, $scope.CurrentTask.Answer);
            
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
            $scope.InputView = "";
        }

        $scope.CurrentTask = {};
        $scope.TaskIndex;
        $scope.AmountOfTasks;
        $scope.User = {
            Input: ""
        };
    }

    angular.module("SkolApp").controller("ChallengeController", [
        "$scope",
        "$timeout",
        "$routeParams",
        "TaskProvider",
        "Scores",
        "Points",
        "Message",
        "Colors",
        "$filter",
        challengeController]);
}());