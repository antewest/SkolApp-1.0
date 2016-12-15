(function () {
    var WordAndColorController = function ($scope, $http, TaskProvider, Scores) {

        Scores.GetTopScores(10, "GetColors").then(function (response) {
            $scope.scores = response;
        })

        var UpdateTask = function (PassedTest) {
            $scope.AllTasks = TaskProvider.GetNext(PassedTest, true);
            $scope.TaskIndex = TaskProvider.GetCount().Current + 1;

            var UpdatedColors = 0;
            var UsedIndex = [];
            do {
                var i;

                if (!$scope.CurrentTask[0]) {
                    i = TaskProvider.GetCount().Current;
                    $scope.CurrentTask.push($scope.AllTasks[i]);
                    $scope.Question = $scope.AllTasks[i].Question;
                    UsedIndex.push(i);
                    UpdatedColors += 1;
                }
                else {
                    i = Math.floor(Math.random() * TaskProvider.GetCount().Last);

                    console.log()

                    if (UsedIndex.indexOf(i) == -1) {
                        $scope.CurrentTask.push($scope.AllTasks[i]);
                        UsedIndex.push(i);
                        UpdatedColors += 1;
                    }
                }
                
            } while (UpdatedColors < 3);
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

            if ($scope.User.Input.length <= 0) {
                alert("Du måste välja en färg.");
                return;
            }

            if ($scope.Question.toLowerCase() == $scope.User.Input.Question.toLowerCase()) {
                alert("Rätt svar!");
                PassedTest = true;
            }
            else {
                alert("Tyvärr, det är fel svar :(");
            }

            UpdateTask(PassedTest);
        }

        $scope.AllTasks = {};
        $scope.TaskIndex;
        $scope.AmountOfTasks;
        $scope.Question;
        $scope.CurrentTask = [];
        $scope.User = {
            Input: ""
        };
    }

    angular.module("SkolApp").controller("WordAndColorController", [
        "$scope",
        "$http",
        "TaskProvider",
        "Scores",
        WordAndColorController
    ]);

}());





SkolApp.controller("ColorController", ["$scope", "$http", "Points", function ($scope, $http, Points) {

    $scope.points = 0;
    $scope.numberAnswered = 0;
    var correct;

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    $scope.GetColor = function () {
        $http.get("/Home/GetColors")
                    .success(function (data, header, status, config) {

                        $scope.numberOfColors = data.length;
                        data = shuffle(data);
                        $scope.types = data;

                        $scope.correctColor = data[0].Value;

                        correct = Math.floor(Math.random() * 3);

                        var colorArray = [data[1].Value, data[2].Value];
                        colorArray.splice(correct, 0, data[0].Value);

                        $scope.color1 = colorArray[0];
                        $scope.color2 = colorArray[1];
                        $scope.color3 = colorArray[2];

                    }).error(function (data, header, status, config) {
                        alert("Something went wrong GetTypes().");
                    });
    };

    $scope.Answer = function (value) {
        
        if (value == correct) {
            Points.addPoints(1);
        }

        $scope.numberAnswered++;
        $scope.points = Points.TotalPoints
        
        $scope.GetColor();
    }

}]);