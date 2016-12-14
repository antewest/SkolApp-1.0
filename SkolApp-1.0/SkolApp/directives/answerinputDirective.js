SkolApp.directive('answerinput', function () {
    return {
        restrict: 'A',
        scope: {},
        template: "<textarea ng-model='answersentence' placeholder='Skriv ditt svar här' class='col-xs-12 form-control' />",
        link: function (scope) {
            scope.$watch('answersentence', function (newValue) {
                if (newValue.length === 0) {
                    console.log('');
                } else {
                    console.log('');
                }
            });
        }
    };
});