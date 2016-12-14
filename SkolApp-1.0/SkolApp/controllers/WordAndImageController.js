(function () {
    SkolApp.controller("WordAndImageController", ["$scope", "$http", function ($scope, $http) {

        var OnError = function (response) {
            console.error(response.statusText);
        }

        var SetTask = function (index) {
            $scope.CurrentTask = $scope.Tasks[index];
            $scope.User.Input = "";

            console.log($scope.CurrentTask);
        }

        var Init = function (response) {
            if (response.data.length > 0) {
                $scope.Tasks = response.data;
                $scope.TaskIndex = 0;

                SetTask($scope.TaskIndex);
            }
        }

        $http.get("/Home/GetWordAndImage/")
             .then(Init, OnError);

        $scope.CheckTask = function () {
            if ($scope.User.Input.length <= 0)
            {
                alert("Du måste skriva något innan du kan rätta.");
                return;
            }

            if ($scope.CurrentTask.Answer.toLowerCase() == $scope.User.Input.toLowerCase()) {
                alert("Rätt svar!");
                $scope.User.Points += 1;
            }
            else {
                alert("Tyvärr, det är fel svar :(");
            }

            if ($scope.TaskIndex < $scope.Tasks.length - 1) {
                $scope.TaskIndex += 1;
                SetTask($scope.TaskIndex);
            }
            else {
                alert("Du fick " + $scope.User.Points + " rätt av " + $scope.Tasks.length + " möjliga.");
            }
        }

        $scope.Tasks = {};
        $scope.CurrentTask = {};
        $scope.TaskIndex;
        $scope.User = {
            Input: "",
            Points: 0
        };

    }]);

}());