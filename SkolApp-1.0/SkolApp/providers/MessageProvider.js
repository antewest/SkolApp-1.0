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

        var Countdown = function (TITLE, MESSAGE, TYPE, TIMEDOWN) {

            swal({
                title: TITLE,
                text: MESSAGE,
                type: TYPE,
                timer: TIMEDOWN
            }).then(
                function () { },
                function (dismiss) {
                    if (dismiss != "cancel") {
                        return true;
                    }
                }
            );

        }

        var Question = function (TITLE, MESSAGE) {

            return swal({
                title: TITLE,
                text: MESSAGE,
                type: "question",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33'
            }).then(
            function (isConfirm) {
                return isConfirm;
            },
            function (dismiss) {
                if (dismiss != "timer")
                    return false;
            });

        }

        var Input = function (TITLE, MESSAGE) {

            return swal({
                title: TITLE,
                text: MESSAGE,
                input: 'text',
                showCancelButton: true,
                inputValidator: function (value) {
                    return new Promise(function (resolve, reject) {
                        if (value) {
                            resolve()
                        } else {
                            reject('Du måste fylla i något först.')
                        }
                    })
                }
            }).then(
            function (result) {
                return result;
            },
            function (dismiss) {
                if (dismiss != "timer")
                    return false;
            });

        }

        return {
            DisplayMessage: Display,
            DisplayMessageCD: Countdown,
            DisplayQuestion: Question,
            DisplayInput: Input
        };
    }

    angular.module("SkolApp").factory("Message", [
        Message
    ]);

}());