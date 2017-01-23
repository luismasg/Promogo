angular.module('starter.controllers', [])
.value('Settings', {
    uber: true,
    uberType:'UberX',
    ios:ionic.Platform.platform()==='ios'

})

.controller('DashCtrl', function($scope,$http,Settings) {

    $http.get('http://luismasg.com/script/api.php')
      .then(function (response) {
        console.log(response);
         $scope.lugares=response.data;
      });
      $scope.settings=Settings;
      console.log( $scope.settings);



})

.controller('ChatsCtrl', function($scope, Chats,$http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // $scope.chats = Chats.all();

  $http.get('http://luismasg.com/script/api.php?task=promos')
    .then(function (response) {
      console.log(response);
       $scope.promos=response.data || [];
    });

  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope,Chats,Settings) {


  $scope.settings = Settings;


});
