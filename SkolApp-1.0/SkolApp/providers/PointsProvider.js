
SkolApp.factory("Points", function () {
    return {
        AddPoints: function (amount) {
            this.TotalPoints += amount;
        },
        RemovePoints: function (amount) {
            this.TotalPoints -= amount;
        },
        TotalPoints: 0
    };
})