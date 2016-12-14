(function () {
    SkolApp.controller("WordAndImageController", ["$scope", "$http", "TaskProvider", function ($scope, $http, TaskProvider) {

        var UpdateTask = function (PassedTest) {
            $scope.CurrentTask = TaskProvider.GetNext(PassedTest);
            $scope.TaskIndex = TaskProvider.GetCount().Current;
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
            if ($scope.User.Input.length <= 0)
            {
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

    }]);

}());