
SkolApp.filter("PunctuationAnswer", [function () {
    return function (input, answer) {

        input = input || '';

        if (input == '')
            return input;

        input = input.toUpperCase();
        answer = answer.toUpperCase();
        var string = "";
        var newstring = [];
        var punctuation = [".", "?", ",", "!"];

        angular.forEach(answer, function (value, key, obj) {
            if (input[key] != value) {
                this.push("<span class='orange'>" + value + "</span>");
            }
            else if (input[key] == value && punctuation.indexOf(value) != -1) {
                this.push("<span class='green'>" + input[key] + "</span>");
            }
            else
                this.push(input[key]);
        }, newstring);

        angular.forEach(newstring, function (value, key) {
            string += value;
        });

        return string;
    }
}]);