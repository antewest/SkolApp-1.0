(function () {
    var findthewordsFilter = function () {
        return function (input) {
            input = input || '';
            if (input == '')
                return input;

            var words = [];
            var splitinput = input.split(" ");

            do
            {
                angular.forEach(splitinput, function (value, key, obj) {
                    if (Math.random() < 0.5)
                        this.push(value);
                    else
                        this.unshift(value);

                }, words);
            }
            while (words == splitinput)

            angular.forEach(words, function (value, key, obj) {
                obj[key] = obj[key] + "<br>";
            }, words);

            return words.join(' ');
        };
    };

    
    angular.module("SkolApp").filter("RandomWords", findthewordsFilter);

}());