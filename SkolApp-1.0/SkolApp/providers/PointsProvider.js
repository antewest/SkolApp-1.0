
SkolApp.factory("Points", function () {
    return {
        addPoints: function (amount) {
            this.TotalPoints += amount;
        },
        removePoints: function (amount) {
            this.TotalPoints -= amount;
        },
        TotalPoints: 0
    };
})