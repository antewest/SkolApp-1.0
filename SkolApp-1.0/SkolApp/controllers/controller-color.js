(function () {

    var app = angular.module("Test", []);

    var ColorController = function ($scope, $http) {

        $scope.points = 0;
        $scope.numberAnswered = 0;
        $scope.answer;
        var correct;
        var buttons = [$scope.color1, $scope.color2, $scope.color3];

        $scope.GetColor = function () {
            $http.get("/Home/GetColors")
                        .success(function (data, header, status, config) {
                            $scope.types = data;
                            $scope.numberOfColors = data.length;

                            $scope.randomColor = Math.floor(Math.random() * data.length);
                            //random mellan 0 - length, 

                            //slumpa plats på rätt svar.
                            correct = Math.floor(Math.random() * 3);

                            for (var i = 0; i < 3; i++) {
                                if (i == correct) {
                                    buttons[i] = data[$scope.randomColor].Value;
                                    //$scope.color1 = data[$scope.randomColor].Value;
                                    console.log(buttons[i]);
                                } else {
                                    buttons[i] = Math.floor(Math.random() * data.length);
                                }
                            };


                        }).error(function (data, header, status, config) {
                            alert("Something went wrong GetTypes().");
                        });
        };

        $scope.Answer = function () {
            //test answer 
        }
    };

    app.controller("ColorController", ["$scope", "$http", ColorController]);

}());