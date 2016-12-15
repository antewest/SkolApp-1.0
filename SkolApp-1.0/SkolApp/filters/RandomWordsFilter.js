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
                words = [];
                angular.forEach(splitinput, function (value, key, obj) {
                    if (Math.random() < 0.5)
                        this.push(value);
                    else
                        this.unshift(value);

                }, words);
                
            }
            while (words == splitinput)

            return words.join(' ');
        };

    };

    
    angular.module("SkolApp").filter("RandomWords", findthewordsFilter);

}());