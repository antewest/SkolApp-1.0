(function () {

    angular.module("SkolApp").filter("Shuffle", function () {
        return function (array) {
            array = array || '';
            if (array == '')
                return array;
            
            var array2 = array;

            var currentIndex = array2.length, temporaryValue, randomIndex;

            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = array2[currentIndex];
                array2[currentIndex] = array2[randomIndex];
                array2[randomIndex] = temporaryValue;
            }

            return array2;
        }

    })
}())