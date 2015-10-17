var app = angular.module('chatroom');

app.controller('mainCtrl', function($scope, parseService){

  $scope.getParseData = function(){
    parseService.getData().then(function(results){
      $scope.messages = results
    })
  }

  //The getParseData function will call the getData method on the parseService object. You'll then save the result of that request to 
  //your controllers $scope as messages ($scope.messages)

  $scope.postData = function(){
    parseService.postData($scope.message)
  }


  //The postData function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postData method on the parseService object which will then post it to the parse backend.
  $scope.formatDate = function(dateString){
    return new Date(dateString).toLocaleString();
  }


    setInterval(function(){
    $scope.getParseData();
  }, 1000)

  //uncomment this code when your getParseData function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
  // setInterval(function(){
  //   $scope.getParseData();
  // }, 1500)
})
