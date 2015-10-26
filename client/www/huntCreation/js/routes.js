angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('createChallenge', {
      url: '/createChallenge',
      templateUrl: 'templates/createChallenge.html',
      controller: 'createChallengeCtrl'
    })





    .state('createHunt', {
      url: '/createHunt',
      templateUrl: 'templates/createHunt.html',
      controller: 'createHuntCtrl'
    })




//This is not necessary for MVP
    .state('previewChallenge', {
      url: '/previewChallenge',
      templateUrl: 'templates/previewChallenge.html',
      controller: 'previewChallengeCtrl'
    })





    .state('previewHunt', {
      url: '/previewHunt',
      templateUrl: 'templates/previewHunt.html',
      controller: 'previewHuntCtrl'
    })


    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/createHunt');

});
