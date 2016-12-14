
(function () {

    var getscores = function ($http) {
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

        return {
            TopScores: topscores
        }
    }

    angular.module("SkolApp").factory("GetScores", ["$http", getscores]);

}());