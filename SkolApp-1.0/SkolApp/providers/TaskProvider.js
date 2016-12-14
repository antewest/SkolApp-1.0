(function () {
    var TaskProvider = function ($http, Points) {
        var data = [];
        var index = -1;

        var iferror = function (response) {
            console.error("TaskProvider -> getTask -> \n" + response.statusText);
        }

        var getTask = function (action) {
            return $http.get("/Home/" + action + "/").then(function (response) {
                data = response.data;
                return true;
            });
        }

        var Getnext = function (PassedTest) {
            if (PassedTest)
                Points.AddPoints(1);

            if (data.length == 0)
                return null;

            if(index < data.length - 1)
            {
                index += 1;
                return data[index];
            }
            else
            {
                alert("You scored:" + Points.TotalPoints + "\nOut of:" + getlength().Last);
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

    angular.module("SkolApp").factory(
       "TaskProvider",
       [
           "$http",
           "Points",
           TaskProvider
       ]
       );
}());