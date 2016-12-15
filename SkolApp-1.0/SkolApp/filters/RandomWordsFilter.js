(function () {
    var findthewordsFilter = function () {
        return function (input) {
            input = input || '';
            if (input == '')
                return input;

            var words = [];

            angular.forEach(input.split(" "), function (value, key, obj) {
                if (Math.random() < 0.5)
                    this.push(value);
                else
                    this.unshift(value);

            }, words);

            return words.join(' ');
        };

    };

    
    angular.module("SkolApp").filter("RandomWords", findthewordsFilter);

}());