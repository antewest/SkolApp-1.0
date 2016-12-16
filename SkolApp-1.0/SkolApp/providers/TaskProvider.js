'use strict';
(function () {
    var TaskProvider = function ($http, Points, Scores, Message) {
        var taskprovider = function () {
            var challenge = {};
            var challenges = [];
            var usedindexes = [];


            var iferror = function (response) {
                console.error("TaskProvider -> getTask -> \n" + response.statusText);
            }

            var getTask = function (id) {

                id = id || 1;

                return $http.post("/Home/GetChallenge/", {
                    Id: id
                }).then(function (response) {
                    challenge = angular.fromJson(response.data);
                    return true;
                });
            }

            var Getnext = function (PassedTest, points, GetAll) {
                if (PassedTest)
                    Points.AddPoints(points);
                
                if (challenge.Questions.length < 1)
                    return null;
                
                if (usedindexes.length < challenge.Questions.length) {

                    if (GetAll === true)
                        return challenge.Questions;

                    while (true)
                    {
                        
                        var i = Math.floor(Math.random() * (challenge.Questions.length));
                        if (usedindexes.indexOf(i) == -1)
                        {
                            usedindexes.push(i);
                            return challenge.Questions[i];
                        }
                    } 
                }  
                else
                {
                    var totalpoints = 0;

                    angular.forEach(challenge.Questions, function (val) {
                        totalpoints += Points.CalculatePoints(val.Type.Name, val.Answer, val.Answer);
                    })

                    Message.DisplayQuestion("Din poäng", "Du fick " + Points.TotalPoints + " av " + totalpoints + "\nVill du spara resultatet?").then(function (e) {
                        if (e == true) {
                            Message.DisplayInput("Spara poäng", "Välj ett namn.").then(function (e) {
                                console.log(e);
                                var str = e;
                                Scores.SetScore(str, challenge.Id, Points.TotalPoints);
                            });
                        }
                    });

                    return challenge.Questions[usedindexes[usedindexes.length - 1]];
                }
            }

            var getlength = function () {
                return {
                    Current: usedindexes.length,
                    Last: challenge.QuestionsCount
                }
            }

            var getTasksList = function () {
                return $http.get("/Home/GetChallenges/").then(function (response) {
                    return angular.fromJson(response.data);
                });
            }

            return {
                GetTask: getTask,
                GetNext: Getnext,
                GetCount: getlength,
                GetTasksList: getTasksList
            };
        };

        return taskprovider;
    };
        

    angular.module("SkolApp").factory("TaskProvider", [
        "$http",
        "Points",
        "Scores",
        "Message",
        TaskProvider
    ]);
}());