(function () {
    angular.module("SkolApp").filter("PunctuationQuestion", function () {
    return function (input) {
        input = input || '';

        //input = input.toUpperCase();

        if (input == '')
            return input;

        var punctuation = [".", "?", ",", "!"];

        var temp1 = input;
        var temp2 = "";

        for (var i = 0; i < temp1.length; i++) {
            if (punctuation.indexOf(temp1[i]) != -1)
                temp2 += "*";
            else
                temp2 += temp1[i];
        };
        return temp2;
    }
    });
}());
