(function () {
    angular.module("SkolApp").factory("Colors", ['$http', function ($http) {
        return function () {
            var colors = [];
            var index = [];
            var usedcolors = [];
            var add = function (str) {
                if (colors.indexOf(str) == -1)
                    colors.push(str);
            };

            var random = function (answer) {
                while (true) {

                    if (usedcolors.indexOf(answer) == -1) {
                        index.push(colors.indexOf(answer));
                        usedcolors.push(answer);
                        return answer;
                    }

                    var i = Math.floor(Math.random() * colors.length);
                    if (index.indexOf(i) == -1 && usedcolors.indexOf(answer) != -1) {
                        index.push(i);
                        usedcolors.push(colors[i]);
                        return colors[i];
                    }
                }
            };

            var load = function () {
                return $http.post("/Home/GetChallenge/", {
                    Id: 3
                }).then(function (response) {
                    angular.forEach(angular.fromJson(response.data).Questions, function (value) {
                        colors.push(value.Answer);
                    });
                    return true;
                });
            }

            var reset = function () {
                index = [];
                usedcolors = [];
            }

            return {
                Load: load,
                AllColor: colors,
                AddColor: add,
                RandomColor: random,
                Reset: reset
            }
        }
        
    }]);
}());