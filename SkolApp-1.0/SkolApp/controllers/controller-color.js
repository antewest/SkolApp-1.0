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