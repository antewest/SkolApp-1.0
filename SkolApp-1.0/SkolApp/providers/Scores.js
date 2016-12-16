(function () {

    var scores = function ($http) {
        var topscores = function (limit, challengeId) {
            challengeId = challengeId || 1;
            return $http.get('/Home/GetScores/', {
                params: {
                    Limit: limit,
                    ChallengeId: challengeId
                }
            }).then(function (response) {
                return angular.fromJson(response.data);
            });
        }

        var setscore = function (nickname, challengeId, points) {
            challengeId = challengeId || 1;
            var tempobj = {
                Id: -1,
                NickName: nickname,
                Points: points,
                ChallengeId: challengeId
            }
            return $http.post('/Home/AddScore/', { score: tempobj }).then(function (response) {
                alert("Din poäng har lagts till.");
                window.location.reload();
            });
        }

        return {
            GetTopScores: topscores,
            SetScore: setscore
        }
    }

    angular.module("SkolApp").factory("Scores", [
        "$http",
        scores
    ]);

}());