(function () {

    var TaskProvider = function ($http, Points, Scores) {
        var data = [];
        var index = -1;
        var task = "";

        var iferror = function (response) {
            console.error("TaskProvider -> getTask -> \n" + response.statusText);
        }

        var getTask = function (action) {
            task = action;
            return $http.get("/Home/" + action + "/").then(function (response) {
                data = response.data;
                return true;
            });
        }

        var Getnext = function (PassedTest, points) {
            if (PassedTest)
                Points.AddPoints(points);

            if (data.length == 0)
                return null;

            if(index < data.length - 1)
            {
                index += 1;
                return data[index];
            }
            else
            {
                if (confirm("You scored:" + Points.TotalPoints + "\nOut of:" + getlength().Last + "\nDo you want to add your score?"))
                {
                    var nickname = prompt("Enter Nickname:");
                    Scores.SetScore(nickname, task, Points.TotalPoints);
                }
                
            }
        }

        var getlength = function () {
            return {
                Current: index,
                Last: data.length
            }
        }

        return {
            GetTask: getTask,
            GetNext: Getnext,
            GetCount: getlength
        };
    };

    angular.module("SkolApp").factory("TaskProvider", [
        "$http",
        "Points",
        "Scores",
        TaskProvider
    ]);
}());