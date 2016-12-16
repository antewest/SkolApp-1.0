(function () {
    angular.module("SkolApp").filter("PunctuationQuestion", function () {
    return function (input) {
        var punctuation = [".", "?", ",", "!"];
        var temp2 = "";

        input = input || '';
        var temp1 = input;

        if (input == '')
            return input;

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
