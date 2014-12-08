'use strict';

/**
 * @ngdoc overview
 * @name dukeTextbookMarketplaceApp
 * @description
 * # dukeTextbookMarketplaceApp
 *
 * Main module of the application.
 */
angular
  .module('dukeTextbookMarketplaceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/textbook.html',
        controller: 'TextbookCtrl'
      })
      .when('/textbook', {
        templateUrl: 'views/textbook.html',
        controller: 'TextbookCtrl'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('currentUser', function () {
    return {netid: ''};
  });
