(function () {
    var findthewordsProvider = function () {

        var checkasnwer = function (input, rightanswer) {
            input = input || '';
            rightanswer = rightanswer || '';
            if (input == '' || rightanswer == '')
                return 0;
            rightanswer = rightanswer.split(" ");

            var score = 0;

            angular.forEach(input.split(" "), function (value, key, obj) {
                if (rightanswer[key] == value)
                    score += 1
                else
                    return 0;
            });

            return score;
        };

        return {
            CheckAnswer: checkasnwer
        }

    };

    angular.module("SkolApp").factory("FindTheWords", findthewordsProvider);
}());