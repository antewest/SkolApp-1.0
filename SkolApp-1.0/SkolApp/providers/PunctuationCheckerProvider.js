(function () {

    var punctuationchecker = function () {

        var checkasnwer = function (input, rightanswer) {
            var punctuation = [".", "?", ",", "!"];
            var score = 0;

            input = input || '';
            rightanswer = rightanswer || '';

            if (input == '' || rightanswer == '')
                return 0;

            angular.forEach(input, function (value, key, obj) {
                if (rightanswer[key] == value && punctuation.indexOf(value) != -1)
                    score += 1
            });

            return score;
        }

        return {
            CheckAnswer: checkasnwer
        }
    };

    angular.module("SkolApp").factory("PunctuationChecker", punctuationchecker)
}());
