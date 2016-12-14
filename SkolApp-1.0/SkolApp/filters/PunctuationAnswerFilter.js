
SkolApp.filter("PunctuationAnswer", [function () {
    return function (input, answer) {

        input = input || '';
        answer = answer || '';
        if (input == '')
            return input;

        var lastrightIndex = -5;
        var lastfalseIndex = -5;

        input = input.toUpperCase();
        answer = answer.toUpperCase();
        var string = "";
        var newstring = [];
        var punctuation = [".", "?", ",", "!"];

        angular.forEach(answer, function (value, key, obj) {
            if (input[key] != value) { // wrong
                if (lastrightIndex == (key - 1))
                    this.push("</span>");

                if (lastfalseIndex == (key - 1))
                    this.push(value);
                else
                    this.push("<span class='orange'>" + value);
                //console.log("false:"+lastfalseIndex);
                lastfalseIndex = key;
            }
            else { // right
                if (lastfalseIndex == (key - 1))
                    this.push("</span>");
                else if (lastrightIndex == (key - 1))
                    this.push(value);
                else
                    this.push("<span class='green'>" + input[key] + "</span>");

                //console.log("right:" + lastrightIndex);
                lastrightIndex = key;
            }
                
        }, newstring);

        angular.forEach(newstring, function (value, key) {
            string += value;
        });

        return string;
    }
}]);