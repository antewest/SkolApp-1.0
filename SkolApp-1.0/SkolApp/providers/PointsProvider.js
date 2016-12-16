(function () {
    angular.module("SkolApp").factory("Points", function () {
        var calculatepoints = function (QuestionType, input, rightanswer) {
            QuestionType = String(QuestionType).toLowerCase() || '';
            input = input || '';
            rightanswer = rightanswer || '';
            if (input == '' || rightanswer == '' || QuestionType == '')
                return 0;


            switch (QuestionType) {
                case "colorandtext":
                    {
                        if(input == rightanswer)
                            return 1;
                    }
                    break;
                case "wordandimage":
                    {
                        if (input == rightanswer)
                            return 1;
                    }
                    break;
                case "punctuation":
                    {
                        var punctuation = [".", "?", ",", "!"];

                        var score = 0;

                        angular.forEach(input, function (value, key, obj) {
                            if (rightanswer[key] == value && punctuation.indexOf(value) != -1)
                                score += 1
                        });

                        return score;
                    }
                    break;
                case "findthewords":
                    {
                        var score = 0;

                        angular.forEach(input.split(" "), function (value, key, obj) {
                            if (rightanswer[key] == value)
                                score += 1
                        });

                        return score;
                    }
                    break;
                default:
                    return 0;
            }

            return 0;
        }

        return {
            CalculatePoints: calculatepoints,
            AddPoints: function (amount) {
                this.TotalPoints += amount;
                debugger;
            },
            RemovePoints: function (amount) {
                this.TotalPoints -= amount;
            },
            TotalPoints: 0
        };
    })

}());
