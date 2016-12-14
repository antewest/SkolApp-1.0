
SkolApp.controller("punctuationController",
    ["$scope", "$sce", "PunctuationChecker", "Points", "PunctuationAnswerFilter", "PunctuationQuestionFilter",
    function ($scope, $sce, PunctuationChecker, Points) {

        // to get from repository
        // only this is needed for the system to work.
        $scope.rightsentences = [
            "I have a hamster, a dog, and a cat.",
            "Spain is a beautiful country; the beaches are warm, sandy and spotlessly clean.",
            "The children's books were all left in the following places: Mrs Smith's room, Mr Powell's office and the caretaker's cupboard.",
            "She always enjoyed sweets, chocolate, marshmallows and toffee apples.",
            "Sarah's uncle's car was found without its wheels in that old, derelict warehouse."
        ];

        $scope.rightsentence = $scope.rightsentences[0];


        $scope.next = function () {
            var indexOfCurrentSentence = $scope.rightsentences.indexOf($scope.rightsentence);
            if (indexOfCurrentSentence < ($scope.rightsentences.length - 1)) {
                if (angular.equals(angular.uppercase($scope.rightsentence), angular.uppercase($scope.answersentence)))
                    Points.addPoints(1);

                $scope.answersentence = "";
                $scope.rightsentence = $scope.rightsentences[indexOfCurrentSentence + 1];

                console.log("Points:" + Points.TotalPoints);
            }
            else {
                $scope.rightsentence = "Done.";
                console.log("finished");
                console.log("Points:" + Points.TotalPoints);
            }

            $scope.answersentenceView = "";
        };

        $scope.checkstring = function () {
            $scope.answersentenceView = $scope.answersentence;
        };
    }]);