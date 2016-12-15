(function () {

    var Message = function () {

        var Display = function (TITLE, MESSAGE, TYPE) {

            return swal({
                title: TITLE,
                text: MESSAGE,
                type: TYPE
            }).then(
            function (isConfirm) {
                return true;
            },
            function (dismiss) {
                return true;
            });

        }

        var DisplayCountdown = function (TITLE, MESSAGE, TYPE, TIMEDOWN) {

            swal({
                title: TITLE,
                text: MESSAGE,
                type: TYPE,
                timer: TIMEDOWN
            }).then(
                function () { },
                function (dismiss) {
                    if (dismiss == "timer") {
                        return true;
                    }
                }
            ).catch(swal.noop());

        }

        return {
            DisplayMessage: Display,
            DisplayMessageCD: DisplayCountdown
        };
    }

    angular.module("SkolApp").factory("Message", [
        Message
    ]);

}());