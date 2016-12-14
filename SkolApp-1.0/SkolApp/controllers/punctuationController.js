
SkolApp.controller("punctuationController", ["$scope", "$sce", function ($scope, $sce) {
    var punctuation = [".", "?", ",", "!"];

    $scope.rightsentence = "I have a hamster, a dog, and a cat.";

    $scope.answersentence = "";

    $scope.astrisksentence = function () {
        var temp1 = $scope.rightsentence;
        
        var temp2 = "";
        
        for (var i = 0; i < temp1.length; i++) {
            if (punctuation.indexOf(temp1[i]) != -1)
                temp2 += "*";
            else
                temp2 += temp1[i];
        };
        return temp2;
    };

    $scope.checkstring = function () {
        var string = "";
        var newstring = [];

        angular.forEach($scope.rightsentence, function (value, key, obj) {
            if (obj[key] != $scope.answersentence[key] && punctuation.indexOf($scope.rightsentence[key]) != -1)
            {
                    this.push("<span class='orange'>" + value + "</span>");
            }
            else if (obj[key] == $scope.answersentence[key] && punctuation.indexOf($scope.answersentence[key]) != -1) {
                this.push("<span class='green'>" + value + "</span>");
            }
            else
                this.push(value);
        }, newstring);

        angular.forEach(newstring, function (value, key) {
                string += value;
        });
        
        $scope.answersentenceView = string == "" ? $scope.rightsentence : string;
    };
}]);