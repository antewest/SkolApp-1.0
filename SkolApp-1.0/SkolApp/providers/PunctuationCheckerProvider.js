
SkolApp.factory("PunctuationChecker", function () {
    return {
        isRight: function (sentence1, sentence2) {
            return sentence1 == sentence2;
        }
    };
})