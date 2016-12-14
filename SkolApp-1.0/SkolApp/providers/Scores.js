
(function () {

    var scores = function ($http) {
        var topscores = function (limit, task) {
            return $http.get('/Home/GetScores/', {
                params: {
                    Limit: limit,
                    Task: task
                }
            }).then(function (response) {
                return response.data;
            })
        }

        var setscore = function (nickname, task, points) {
            var tempobj = {
                Id: -1,
                NickName: nickname,
                Points: points,
                Task: task
            }

            return $http.post('/Home/AddScore/', { score: tempobj }).then(function (response) {
                alert("Din poäng har lagts till.");
                window.location.reload();
            })

        }

        return {
            GetTopScores: topscores,
            SetScore: setscore
        }
    }

    angular.module("SkolApp").factory("Scores", ["$http", scores]);

}());