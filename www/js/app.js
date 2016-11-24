// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

angular.module('starter')
  .controller('Test', function($scope, $ionicModal) {
    var vm = this;

    vm.modal = null;

    vm.card = {
      card_number: null,
      expiry_month: null,
      expiry_year: null,
      cvc: null,
      amount: null,
      emai: null
    }

    vm.openTokenModal = function() {
      $ionicModal.fromTemplateUrl('token-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        vm.modal = modal;
        vm.modal.show();
      });
    }

    vm.openChargeModal = function() {
      $ionicModal.fromTemplateUrl('charge-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        vm.modal = modal;
        vm.modal.show();
      });
    }

    vm.getToken = function() {
      if(window.plugins.paystackCordova) {
        window.plugins.paystackCordova.getToken(vm.card, function(response) {
          alert('Token: ' + response.token)
        }, function(i, j) {
          console.log(arguments)
        })
      }
    }

    vm.chargeCard = function() {
      if(window.plugins.paystackCordova) {
        window.plugins.paystackCordova.chargeCard(vm.card, function(response) {
          alert('Reference: ' + response.reference)
        }, function(i, j) {
          console.log(arguments)
        })
      }
    }
  })

angular.module('starter')
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
