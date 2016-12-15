(function () {
    var findthewordsFilter = function () {
        return function (input, rightanswer) {
            input = input || '';
            rightanswer = rightanswer || '';
            if (input == '' || rightanswer == '')
                return input;

            rightanswer = rightanswer.split(" ");
            var words = [];

            angular.forEach(input.split(" "), function (value, key, obj) {
                if (rightanswer[key] == value)
                    this.push('<span class="green">' + value + '</span>')
                else
                    this.push('<span class="orange">' + value + '</span>')
            }, words);

            return words.join(' ');
        };

    };


    angular.module("SkolApp").filter("FindTheWordsAnswer", findthewordsFilter);

}());