    angular.module("SkolApp", ["ngRoute", "ngSanitize", "ngAnimate"])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

            $routeProvider
                .when("/", {
                    templateUrl: "/routes/main.html"
                })
                .when("/Challenges/:id?", {
                    templateUrl: '/routes/Challenges.html',
                    controller: 'ChallengeListController',
                    title: 'Challenge'

                })
                .when("/Challenge/", {
                    templateUrl: '/routes/Challenge.html',
                    controller: 'ChallengeController',
                    title: 'Utmaningen'
                })
                .otherwise({
                    templateUrl: "/routes/main.html"
                });

            if (window.history && window.history.pushState) {
                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: true
                });
            }
        }])
        .run(function ($templateCache) {
            $templateCache.removeAll();
        });

