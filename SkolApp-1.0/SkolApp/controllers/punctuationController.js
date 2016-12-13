
SkolApp.controller("punctuationController", ["$scope", "$sce", function ($scope, $sce) {
    var punctuation = [".", "?", ",", "!"];
    $scope.rightsentence = "I have a hamster, a dog, and a cat.";

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

    $scope.answersentence = "";

    $scope.checkstring = function () {
        var indexes = [];
        var substrings = $scope.astrisksentence().split('*');
        var string = "";
        if($scope.rightsentence == $scope.answersentence)
        {
            console.log('right');
        } else {
            for (var i = 0; i < $scope.rightsentence.length; i++) {
                if ($scope.rightsentence[i] != $scope.answersentence[i] && punctuation.indexOf($scope.rightsentence[i]) != -1)
                    indexes.push(i);
            }
            console.log(indexes);
            for (var i = 0; i < (substrings.length) ; i++) {
                if (substrings.length == indexes.length)
                    string += substrings[i] + "<span class='orange'>" + $scope.rightsentence[indexes[i]] + "</span>";
                else
                {
                    //string += 
                    // to do;
                }
            }
            console.log(string);
        }
        $scope.answersentenceView = string == "" ? $scope.rightsentence : string;
    };
}]);