'use strict';
(function () {

    var TaskProvider = function ($http, Points, Scores) {
        var taskprovider = function () {
            var challenge = {};
            var challenges = [];
            var index = 0;
            var task = "";

            var iferror = function (response) {
                console.error("TaskProvider -> getTask -> \n" + response.statusText);
            }

            var getTask = function (action, id) {
                task = action;
                id = id || 1;

                return $http.post("/Home/GetChallenge/", {
                    TypeId: action,
                    Id: id
                }).then(function (response) {
                    challenge = angular.fromJson(response.data);
                    for (var i = 0; i < challenge.Questions.length; i++) {
                        challenge.Questions[i].AllowNext = false;
                    }
                    return true;
                });
            }

            var Getnext = function (PassedTest, points, GetAll) {
                if (PassedTest)
                    Points.AddPoints(points);
                
                if (challenge.Questions.length < 1)
                    return null;

                if (challenge.Questions[index].AllowNext)
                    index += 1;
                if (index < challenge.Questions.length) {
                    if (GetAll === true)
                        return challenge.Questions;

                    return challenge.Questions[index];
                }
                else {
                    index -= 1;
                    if (confirm("You scored:" + Points.TotalPoints + "\nOut of:" + getlength().Last + "\nDo you want to add your score?")) {
                        var nickname = prompt("Enter Nickname:");
                        Scores.SetScore(nickname, challenge.Id, Points.TotalPoints);
                    }
                }
            }

            var getlength = function () {
                return {
                    Current: index,
                    Last: challenge.Questions.length
                }
            }

            var getTasksList = function () {
                return $http.get("/Home/GetChallenges/").then(function (response) {
                    return angular.fromJson(response.data);
                });
            }

            var allownext = function () {
                challenge.Questions[index].AllowNext = true;
            }

            return {
                GetTask: getTask,
                GetNext: Getnext,
                GetCount: getlength,
                GetTasksList: getTasksList,
                AllowNext: allownext
            };
        };

        return taskprovider;
    };
        

    angular.module("SkolApp").factory("TaskProvider", [
        "$http",
        "Points",
        "Scores",
        TaskProvider
    ]);
}());